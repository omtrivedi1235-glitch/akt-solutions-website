from __future__ import annotations

from collections import deque
import os

from PIL import Image

ROOT = r"c:\Users\omtri\Downloads\akt-solutions-standalone"
MASTER = os.path.join(ROOT, "app", "icon.png")


def is_removable_background(r: int, g: int, b: int, a: int) -> bool:
    if a < 20:
        return True
    if r > 215 and g > 215 and b > 215:
        return True
    if r < 45 and g < 45 and b < 45:
        return True
    brightness = (r + g + b) / 3
    if brightness > 190 and max(r, g, b) - min(r, g, b) < 35:
        return True
    return False


def remove_outer_background(img: Image.Image) -> Image.Image:
    out = img.convert("RGBA")
    pixels = out.load()
    width, height = out.size
    visited: set[tuple[int, int]] = set()
    queue: deque[tuple[int, int]] = deque()

    def try_seed(x: int, y: int) -> None:
        if (x, y) in visited:
            return
        r, g, b, a = pixels[x, y]
        if is_removable_background(r, g, b, a):
            visited.add((x, y))
            queue.append((x, y))

    for x in range(width):
        try_seed(x, 0)
        try_seed(x, height - 1)
    for y in range(height):
        try_seed(0, y)
        try_seed(width - 1, y)

    while queue:
        x, y = queue.popleft()
        r, g, b, _ = pixels[x, y]
        pixels[x, y] = (r, g, b, 0)
        for nx, ny in ((x - 1, y), (x + 1, y), (x, y - 1), (x, y + 1)):
            if 0 <= nx < width and 0 <= ny < height and (nx, ny) not in visited:
                nr, ng, nb, na = pixels[nx, ny]
                if is_removable_background(nr, ng, nb, na):
                    visited.add((nx, ny))
                    queue.append((nx, ny))

    return out


def resize_master(master: Image.Image, size: int) -> Image.Image:
    resample = Image.Resampling.LANCZOS if size >= 64 else Image.Resampling.BILINEAR
    return master.resize((size, size), resample)


def main() -> None:
    master = remove_outer_background(Image.open(MASTER))

    public_dir = os.path.join(ROOT, "public")
    app_dir = os.path.join(ROOT, "app")

    outputs = {
        os.path.join(public_dir, "android-chrome-512x512.png"): 512,
        os.path.join(public_dir, "android-chrome-192x192.png"): 192,
        os.path.join(public_dir, "apple-touch-icon.png"): 180,
        os.path.join(public_dir, "favicon-32x32.png"): 32,
        os.path.join(public_dir, "favicon-16x16.png"): 16,
        os.path.join(app_dir, "icon.png"): 512,
    }

    for path, size in outputs.items():
        image = master if size == 512 else remove_outer_background(resize_master(master, size))
        image.save(path)

    ico_sizes = [48, 32, 16]
    ico_images = [
        remove_outer_background(resize_master(master, size)) for size in sorted(ico_sizes, reverse=True)
    ]
    for ico_path in (
        os.path.join(public_dir, "favicon.ico"),
        os.path.join(app_dir, "favicon.ico"),
    ):
        ico_images[0].save(
            ico_path,
            format="ICO",
            sizes=[(image.size[0], image.size[1]) for image in ico_images],
            append_images=ico_images[1:],
        )

    bbox = master.getbbox()
    print("Removed outer white corners from favicon assets.")
    if bbox:
        fill_w = (bbox[2] - bbox[0] + 1) / 512
        fill_h = (bbox[3] - bbox[1] + 1) / 512
        print(f"Visible bounds: {fill_w:.3f} x {fill_h:.3f}")


if __name__ == "__main__":
    main()
