from PIL import Image
import os

assets_dir = r"c:\Users\omtri\.cursor\projects\c-Users-omtri-Downloads-akt-solutions-standalone\assets"
root = r"c:\Users\omtri\Downloads\akt-solutions-standalone"

src = None
for name in os.listdir(assets_dir):
    if "47d389bd" in name or "ChatGPT_Image_Jun_4" in name:
        src = os.path.join(assets_dir, name)
        break

if not src:
    src = os.path.join(root, "app", "icon.png")

src = "\\\\?\\" + os.path.abspath(src)
im = Image.open(src).convert("RGB")
pixels = im.load()
w, h = im.size

minx, miny, maxx, maxy = w, h, 0, 0
for y in range(h):
    for x in range(w):
        r, g, b = pixels[x, y]
        if r > 150 and g < 100 and b < 100:
            minx = min(minx, x)
            miny = min(miny, y)
            maxx = max(maxx, x)
            maxy = max(maxy, y)

crop = im.crop((max(0, minx - 20), max(0, miny - 20), min(w, maxx + 20), min(h, maxy + 20)))
cw, ch = crop.size
size = max(cw, ch)
pad = int(size * 0.12)
square = Image.new("RGB", (size + 2 * pad, size + 2 * pad), (0, 0, 0))
square.paste(crop, ((square.width - cw) // 2, (square.height - ch) // 2))

for name, dim in [("app/icon.png", 512), ("public/icon.png", 32), ("public/apple-icon.png", 180)]:
    square.resize((dim, dim), Image.Resampling.LANCZOS).save(os.path.join(root, name))

print("Generated favicons from", src)
