const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const IMAGES_DIR = path.join(ROOT, "images");
const OUTPUT_FILE = path.join(ROOT, "images.json");
const EXTENSIONS = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"];

function main() {
  let files = [];
  if (fs.existsSync(IMAGES_DIR)) {
    files = fs
      .readdirSync(IMAGES_DIR)
      .filter((name) => {
        const ext = path.extname(name).toLowerCase();
        return EXTENSIONS.includes(ext);
      })
      .sort((a, b) => a.localeCompare(b, "zh-CN"));
  }
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(files, null, 2), "utf-8");
  console.log(`Generated images.json with ${files.length} images`);
}

main();
