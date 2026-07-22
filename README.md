# Portfolio Site

A premium dark-mode developer portfolio & blog built with the **ADC Stack**:
- **[Astro](https://astro.build/)** — Zero-JS static site generator
- **[Decap CMS](https://decapcms.org/)** — Git-backed headless CMS
- **[Cloudflare Pages](https://pages.cloudflare.com/)** — Free global CDN & deployment

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
portfolio-site/
├── public/
│   ├── admin/          ← Decap CMS admin panel
│   │   ├── index.html
│   │   └── config.yml  ← CMS field configuration
│   └── favicon.svg
├── src/
│   ├── content/
│   │   ├── blog/       ← Markdown blog posts
│   │   ├── projects/   ← Markdown project case studies
│   │   └── config.ts   ← Content collection schemas
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── components/
│   │   ├── Navbar.astro
│   │   └── Footer.astro
│   ├── pages/
│   │   ├── index.astro       ← Home (Hero + Bento grid)
│   │   ├── about.astro       ← About page
│   │   ├── work/
│   │   │   ├── index.astro   ← Projects listing
│   │   │   └── [slug].astro  ← Project detail
│   │   └── blog/
│   │       ├── index.astro   ← Blog listing
│   │       └── [slug].astro  ← Blog post
│   └── styles/
│       └── global.css        ← Full design system (tokens, components)
└── astro.config.mjs
```

## ✏️ Customising Your Content

### 1. Update personal info
Search for `Your Name` and `yourname` throughout the codebase and replace with your actual name and handles.

Also update in `src/layouts/BaseLayout.astro`:
```
const siteName = "Your Name · Developer";
```

And the `site` URL in `astro.config.mjs`.

### 2. Add blog posts
Create a `.md` file in `src/content/blog/` with this frontmatter:
```markdown
---
title: "Your Post Title"
description: "A compelling one-liner"
pubDate: 2026-07-22
category: "Tutorial"  # Tutorial | Opinion | Case Study | Dev | Open Source
tags: ["Astro", "CSS"]
readingTime: 5
featured: false
---

Your content here...
```

### 3. Add projects
Create a `.md` file in `src/content/projects/` with:
```markdown
---
title: "Project Name"
description: "What it does and why it matters"
tags: ["React", "Node.js"]
liveUrl: "https://yourproject.com"
repoUrl: "https://github.com/you/project"
featured: true
year: 2026
category: "Web App"
order: 1
---

Extended case study content...
```

## 🎨 Design System

All design tokens are in `src/styles/global.css`. Key customisations:
- **Colors**: Change `--color-accent-cyan` and `--color-accent-violet`
- **Fonts**: Swap Google Font imports at the top of `global.css`
- **Spacing**: Adjust the `--space-*` scale

## 🔧 Setting Up Decap CMS

1. Create a GitHub OAuth App (Settings → Developer Settings → OAuth Apps)
2. Host a Decap OAuth gateway (use [decap-oauth-github](https://github.com/vencax/netlify-cms-github-oauth-provider) or deploy on Cloudflare Workers)
3. Update `public/admin/config.yml` with your repo details
4. Go to `yourdomain.com/admin` to start writing

## 💬 Setting Up Comments (Giscus)

1. Enable Discussions on your GitHub repository
2. Go to [giscus.app](https://giscus.app) and configure your repo
3. Replace the placeholder in `src/pages/blog/[slug].astro` with the generated Giscus `<script>` tag

## 🚢 Deploying to Cloudflare Pages

1. Push this repo to GitHub
2. Log into [Cloudflare Pages](https://pages.cloudflare.com)
3. Connect your GitHub repo
4. Build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Deploy! Cloudflare will auto-deploy on every push.

## 📊 Analytics

Enable **Cloudflare Web Analytics** from your Cloudflare Pages dashboard — it's free, cookie-free, and GDPR-compliant.

---

Built with ♥ using 100% open-source, free tools. $0/month hosting.
