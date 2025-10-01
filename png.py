import os
from PIL import Image

# Caminho da imagem base e logo
logo_path = "/mnt/data/umbrel/home/apps/carlostech/public/assets/logo.png"           # logo grande horizontal
favicon_path = "/mnt/data/umbrel/home/apps/carlostech/public/assets/favicon.png"     # logo quadrada estilizada com "ct"

# Pasta de saída
output_dir = "/mnt/data/umbrel/home/apps/carlostech/public/images"
os.makedirs(output_dir, exist_ok=True)

# Lista de imagens a gerar
targets = [
    {"name": "og-image.jpg", "size": (1200, 630)},
    {"name": "twitter-card.jpg", "size": (1200, 600)},
    {"name": "instagram-square.jpg", "size": (1080, 1080)},
    {"name": "telegram-preview.jpg", "size": (1200, 630)},
    {"name": "discord-embed.jpg", "size": (1200, 630)},
    {"name": "favicon-16x16.png", "size": (16, 16), "source": favicon_path},
    {"name": "favicon-32x32.png", "size": (32, 32), "source": favicon_path},
    {"name": "apple-touch-icon.png", "size": (180, 180), "source": favicon_path},
    {"name": "apple-touch-icon-152x152.png", "size": (152, 152), "source": favicon_path},
    {"name": "apple-touch-icon-144x144.png", "size": (144, 144), "source": favicon_path},
    {"name": "apple-touch-icon-120x120.png", "size": (120, 120), "source": favicon_path},
    {"name": "apple-touch-icon-114x114.png", "size": (114, 114), "source": favicon_path},
    {"name": "apple-touch-icon-76x76.png", "size": (76, 76), "source": favicon_path},
    {"name": "apple-touch-icon-72x72.png", "size": (72, 72), "source": favicon_path},
    {"name": "apple-touch-icon-60x60.png", "size": (60, 60), "source": favicon_path},
    {"name": "apple-touch-icon-57x57.png", "size": (57, 57), "source": favicon_path},
    {"name": "mstile-70x70.png", "size": (70, 70), "source": favicon_path},
    {"name": "mstile-144x144.png", "size": (144, 144), "source": favicon_path},
    {"name": "mstile-150x150.png", "size": (150, 150), "source": favicon_path},
    {"name": "mstile-310x150.png", "size": (310, 150), "source": favicon_path},
    {"name": "mstile-310x310.png", "size": (310, 310), "source": favicon_path},
]

# Geração das imagens
results = []
for item in targets:
    name = item["name"]
    width, height = item["size"]
    src = item.get("source", logo_path)

    try:
        with Image.open(src) as img:
            img = img.convert("RGBA")
            img_resized = img.resize((width, height), Image.LANCZOS)

            output_path = os.path.join(output_dir, name)
            img_format = "JPEG" if name.endswith(".jpg") else "PNG"

            img_resized.save(output_path, format=img_format, quality=90)
            results.append((name, "✔️ OK", img.size, output_path))
    except Exception as e:
        results.append((name, "❌ ERROR", str(e), src))

results
