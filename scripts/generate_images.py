#!/usr/bin/env python3
"""Scan images/ directory and generate images.json for gallery."""
import json
import os
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
IMAGES_DIR = ROOT / "images"
OUTPUT_FILE = ROOT / "images.json"
EXTENSIONS = {".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"}


def main():
    files = []
    if IMAGES_DIR.exists():
        for name in sorted(IMAGES_DIR.iterdir(), key=lambda p: p.name):
            if name.is_file() and name.suffix.lower() in EXTENSIONS:
                files.append(name.name)
    OUTPUT_FILE.write_text(json.dumps(files, ensure_ascii=False, indent=2), "utf-8")
    print(f"Generated images.json with {len(files)} images")


if __name__ == "__main__":
    main()
