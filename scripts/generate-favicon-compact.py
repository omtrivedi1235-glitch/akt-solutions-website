from PIL import Image
import os

assets_dir = r"c:\Users\omtri\.cursor\projects\c-Users-omtri-Downloads-akt-solutions-standalone\assets"
root = r"c:\Users\omtri\Downloads\akt-solutions-standalone"

src = None
for name in os.listdir(assets_dir):
    if "9f1c1a7e" in name or "Adobe_Express" in name:
        src = "\\\\?\\" + os.path.abspath(os.path.join(assets_dir, name))
        break

if not src:
    raise SystemExit("Source logo not found")


def is_red(r: int, g: int, b: int, a: int = 255) -> bool:
    return a > 20 and r > 140 and g < 120 and b < 120


def strip_background(img: Image.Image) -> Image.Image:
    out = img.convert("RGBA")
    pixels = out.load()
    w, h = out.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            if not is_red(r, g, b, a):
                pixels[x, y] = (0, 0, 0, 0)
    return out


def column_density(img: Image.Image) -> list[int]:
    pixels = img.load()
    w, h = img.size
    counts = [0] * w
    for x in range(w):
        for y in range(h):
            r, g, b, a = pixels[x, y]
            if a > 20 and is_red(r, g, b, a):
                counts[x] += 1
    return counts


def split_letters(img: Image.Image) -> list[Image.Image]:
    counts = column_density(img)
    threshold = max(2, max(counts) * 0.03)
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
        if right - left < 8:
            continue
        piece = img.crop((left, 0, right, img.height))
        if piece.getbbox():
            pieces.append(piece)
    return pieces


def compose_compact(pieces: list[Image.Image], target: int, gap: int = 2) -> Image.Image:
    height = target
    scaled: list[Image.Image] = []
    for piece in pieces:
        scale = height / piece.height
        width = max(1, int(piece.width * scale))
        scaled.append(piece.resize((width, height), Image.Resampling.LANCZOS))

    total_width = sum(p.width for p in scaled) + gap * max(0, len(scaled) - 1)
    if total_width > target:
        shrink = (target - gap * max(0, len(scaled) - 1)) / sum(p.width for p in scaled)
        scaled = [
            p.resize((max(1, int(p.width * shrink)), height), Image.Resampling.LANCZOS)
            for p in scaled
        ]
        total_width = sum(p.width for p in scaled) + gap * max(0, len(scaled) - 1)

    canvas = Image.new("RGBA", (target, target), (0, 0, 0, 0))
    x = (target - total_width) // 2
    for index, piece in enumerate(scaled):
        canvas.paste(piece, (x, 0), piece)
        x += piece.width + (gap if index < len(scaled) - 1 else 0)
    return canvas


im = Image.open(src)
logo = strip_background(im)
bbox = logo.getbbox()
if not bbox:
    raise SystemExit("No logo pixels found")
logo = logo.crop(bbox)

# Scale up for clean segmentation, then rebuild compact favicon
working_height = 512
scale = working_height / logo.height
working = logo.resize(
    (max(1, int(logo.width * scale)), working_height),
    Image.Resampling.LANCZOS,
)

pieces = split_letters(working)
if len(pieces) < 2:
    pieces = [working]

canvas = compose_compact(pieces, 512, gap=1)

for name, dim in [("app/icon.png", 512), ("public/icon.png", 48), ("public/apple-icon.png", 180)]:
    canvas.resize((dim, dim), Image.Resampling.LANCZOS).save(os.path.join(root, name))

bbox2 = canvas.getbbox()
print(f"letters: {len(pieces)}, output bbox: {bbox2}, canvas: {canvas.size}")
