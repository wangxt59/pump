# 个人作品集

静态网页展示画师个人作品，单页结构。根据 `images/` 目录自动生成作品列表，标题为图片文件名（支持中文），点击图片可放大查看。

## 使用方式

### 本地预览

```bash
python3 -m http.server 8080
# 访问 http://localhost:8080
```

首次或新增图片后，先运行构建脚本生成 `images.json`：

```bash
python3 scripts/generate_images.py
```

### 部署到 Cloudflare Pages

1. 把项目推到 GitHub
2. 在 Cloudflare Dashboard → Pages → 创建项目 → 连接 Git
3. 构建配置：
   - **构建命令**：`python3 scripts/generate_images.py`
   - **构建输出目录**：`/`（项目根目录）

每次 push 后，构建会扫描 `images/` 并生成 `images.json`，新增的图片自动出现在网页上。

## 增加作品

1. 把图片放入 `images/` 文件夹（支持 JPG、PNG、GIF、WebP、SVG）
2. 文件名即标题，可包含中文，例如：`情人节手绘｜迪士尼｜关于我们的故事.jpg`
3. 本地：运行 `python3 scripts/generate_images.py` 后刷新页面
4. Cloudflare：直接 `git push`，构建后自动更新

## 文件说明

- `index.html`：页面与样式
- `images/`：作品图片目录
- `images.json`：由构建脚本自动生成，勿手动编辑
- `scripts/generate_images.py`：扫描 `images/` 并生成 `images.json`
