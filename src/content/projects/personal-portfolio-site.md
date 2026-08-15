---
title: "Personal Portfolio & Research Hub"
description: "High-performance statistical portfolio and technical blog built with Astro, View Transitions, KaTeX math rendering, automated RSS/Sitemap, and instant fuzzy search."
coverImage: "/uploads/portfolio-website/01_home_desktop.png"
tags: ["Astro", "TypeScript", "Design System", "Full Stack", "SEO", "View Transitions"]
liveUrl: "https://yajitim.github.io"
repoUrl: "https://github.com/Yajitim/yajitim.github.io"
featured: true
year: 2026
category: "Web App"
order: 1
draft: false
---

import Carousel from '../../components/Carousel.astro';

## Interactive Interface & Responsive Previews

Below is an interactive carousel showcasing key views captured across desktop, tablet, and mobile displays, including dark mode, light mode, and instant search:

<Carousel
  items={[
    {
      "src": "/uploads/portfolio-website/01_home_desktop.png",
      "alt": "Personal Portfolio - Home Hero View",
      "badge": "Home (Dark)",
      "caption": "Home Hero View — High-contrast dark theme with statistical bio and featured highlights."
    },
    {
      "src": "/uploads/portfolio-website/09_light_mode_home.png",
      "alt": "Personal Portfolio - Light Theme",
      "badge": "Light Theme",
      "caption": "Light Theme View — Accessible tokens with preserved cyan accent highlights."
    },
    {
      "src": "/uploads/portfolio-website/08_search_modal.png",
      "alt": "Personal Portfolio - Instant Search Command Palette",
      "badge": "Command Palette",
      "caption": "Instant Search Modal (Ctrl+K) — Sub-millisecond client-side indexing across posts & projects."
    },
    {
      "src": "/uploads/portfolio-website/02_work_projects.png",
      "alt": "Personal Portfolio - Projects & Work Gallery",
      "badge": "Work Gallery",
      "caption": "Projects Gallery — Category-filtered case studies with responsive grid cards."
    },
    {
      "src": "/uploads/portfolio-website/03_work_case_study.png",
      "alt": "Personal Portfolio - Individual Case Study View",
      "badge": "Case Study",
      "caption": "Case Study View — Deep technical documentation with live demo and GitHub links."
    },
    {
      "src": "/uploads/portfolio-website/04_blog_index.png",
      "alt": "Personal Portfolio - Blog & Writing Hub",
      "badge": "Blog Index",
      "caption": "Writing Hub — Categorized articles with featured spotlight and reading metrics."
    },
    {
      "src": "/uploads/portfolio-website/05_blog_article_with_toc.png",
      "alt": "Personal Portfolio - Article with Table of Contents",
      "badge": "Article & TOC",
      "caption": "Article Reader — Sticky Table of Contents with scrollspy and one-click code copy."
    },
    {
      "src": "/uploads/portfolio-website/06_tag_archive.png",
      "alt": "Personal Portfolio - Tag Archive Route",
      "badge": "Tag Archive",
      "caption": "Dynamic Tag Archives — Discoverability across research and tooling topics."
    },
    {
      "src": "/uploads/portfolio-website/07_about_cv.png",
      "alt": "Personal Portfolio - About & Interactive CV",
      "badge": "About & CV",
      "caption": "About & CV — Complete educational, career, and research timeline."
    }
  ]}
/>

## Project Overview

The **Personal Portfolio & Research Hub** serves as the central digital portfolio for **Yaji Timothy Terungwa** — Statistician, Data Scientist, and Educational Data Professional. Built from the ground up using **Astro**, the site delivers sub-second page loads, zero client-side JavaScript overhead for static content, and rich interactive tooling for readers.

---

## Key Architecture & Features

- **Astro View Transitions**: Seamless client-side SPA routing with smooth page morphs, preserved scroll state, and zero-FOUC theme switching.
- **Mathematical Formula Rendering**: Native KaTeX display integration for statistical formulas, LaTeX expressions, and algorithm derivations.
- **Instant Client-Side Search (`Ctrl+K`)**: Keyboard-driven command palette pre-indexed at build time for instantaneous query matching without external API requests.
- **Sticky Table of Contents & Code Enhancements**: Dynamic heading detection (`post.render()`) powering an active sidebar scrollspy and code blocks with syntax badges and copy buttons.
- **Automated RSS & Sitemap**: Automatic XML syndication (`/rss.xml`) and dynamic search engine sitemaps (`/sitemap-index.xml`).
- **Responsive Dark & Light Design System**: Curated HSL color tokens with fluid typography (`clamp()`), glassmorphism overlays, and full mobile accessibility.
