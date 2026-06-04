from PIL import Image
import os

root = r"c:\Users\omtri\Downloads\akt-solutions-standalone"
assets_dir = r"c:\Users\omtri\.cursor\projects\c-Users-omtri-Downloads-akt-solutions-standalone\assets"
TARGET = 512
PADDING = 0.015
LETTER_GAP = 3


def find_source() -> str:
    for name in os.listdir(assets_dir):
        if "60506747" in name or ("10_50_29" in name and "ecc1" in name):
            return "\\\\?\\" + os.path.abspath(os.path.join(assets_dir, name))
    raise FileNotFoundError("AKT logo source not found in assets")


def is_logo_pixel(r: int, g: int, b: int, a: int) -> bool:
    return a > 20 and r > 160 and g < 110 and b < 110


def extract_logo_rgba(img: Image.Image) -> Image.Image:
    src = img.convert("RGBA")
    out = Image.new("RGBA", src.size, (0, 0, 0, 0))
    src_pixels = src.load()
    out_pixels = out.load()

    for y in range(src.height):
        for x in range(src.width):
            r, g, b, a = src_pixels[x, y]
            if is_logo_pixel(r, g, b, a):
                out_pixels[x, y] = (r, g, b, a)

    bbox = out.getbbox()
    if not bbox:
        raise ValueError("Could not detect AKT logo in source image")
    return out.crop(bbox)


def column_density(img: Image.Image) -> list[int]:
    pixels = img.load()
    counts = [0] * img.width
    for x in range(img.width):
        for y in range(img.height):
            r, g, b, a = pixels[x, y]
            if a > 20 and is_logo_pixel(r, g, b, a):
                counts[x] += 1
    return counts


def split_letters(logo: Image.Image) -> list[Image.Image]:
    counts = column_density(logo)
    threshold = max(2, max(counts) * 0.04)
    segments: list[tuple[int, int]] = []
    start = None

    for x, value in enumerate(counts):
        if value > threshold:
            if start is None:
                start = x
        elif start is not None:
            segments.append((start, x))
            start = None
    if start is not None:
        segments.append((start, len(counts)))

    pieces: list[Image.Image] = []
    for left, right in segments:
        if right - left < 10:
            continue
        piece = logo.crop((left, 0, right, logo.height))
        if piece.getbbox():
            pieces.append(piece)
    return pieces if len(pieces) >= 2 else [logo]


def compose_tight(letters: list[Image.Image]) -> Image.Image:
    target_height = max(piece.height for piece in letters)
    scaled: list[Image.Image] = []

    for piece in letters:
        scale = target_height / piece.height
        width = max(1, int(piece.width * scale))
        scaled.append(piece.resize((width, target_height), Image.Resampling.LANCZOS))

    total_width = sum(p.width for p in scaled) + LETTER_GAP * max(0, len(scaled) - 1)
    row = Image.new("RGBA", (total_width, target_height), (0, 0, 0, 0))
    x = 0
    for index, piece in enumerate(scaled):
        row.paste(piece, (x, 0), piece)
        x += piece.width + (LETTER_GAP if index < len(scaled) - 1 else 0)
    return row


def fit_square(logo: Image.Image, size: int) -> Image.Image:
    lw, lh = logo.size
    usable = size * (1 - PADDING * 2)
    scale = min(usable / lw, usable / lh)
    new_w = max(1, int(lw * scale))
    new_h = max(1, int(lh * scale))
    resample = Image.Resampling.LANCZOS if size >= 64 else Image.Resampling.BILINEAR
    resized = logo.resize((new_w, new_h), resample)

    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    canvas.paste(resized, ((size - new_w) // 2, (size - new_h) // 2), resized)
    return canvas


def build_master(size: int = TARGET) -> Image.Image:
    source = Image.open(find_source())
    logo = extract_logo_rgba(source)
    letters = split_letters(logo)
    compact = compose_tight(letters)
    return fit_square(compact, size)


def save_outputs(master: Image.Image) -> None:
    public_dir = os.path.join(root, "public")
    app_dir = os.path.join(root, "app")

    outputs = {
        "android-chrome-512x512.png": 512,
        "android-chrome-192x192.png": 192,
        "apple-touch-icon.png": 180,
        "favicon-32x32.png": 32,
        "favicon-16x16.png": 16,
    }

    png_sizes: list[tuple[int, Image.Image]] = []
    for filename, dim in outputs.items():
        image = build_master(dim) if dim != TARGET else master
        image.save(os.path.join(public_dir, filename))
        png_sizes.append((dim, image))

    master.save(os.path.join(app_dir, "icon.png"))

    ico_images = [img for _, img in sorted(png_sizes, key=lambda item: item[0], reverse=True)]
    ico_images[0].save(
        os.path.join(public_dir, "favicon.ico"),
        format="ICO",
        sizes=[(img.size[0], img.size[1]) for img in ico_images],
        append_images=ico_images[1:],
    )
    build_master(32).save(
        os.path.join(app_dir, "favicon.ico"),
        format="ICO",
        sizes=[(32, 32), (16, 16)],
        append_images=[build_master(16)],
    )


if __name__ == "__main__":
    master = build_master()
    save_outputs(master)
    bbox = master.getbbox()
    print("Favicon rebuilt: transparent, tight spacing, uniform scale.")
    if bbox:
        w = bbox[2] - bbox[0] + 1
        h = bbox[3] - bbox[1] + 1
        print(f"Fill: {w / TARGET:.3f} x {h / TARGET:.3f}")
