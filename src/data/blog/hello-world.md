---
title: "Hello World: Building This Blog with Astro"
pubDatetime: 2026-04-10T12:00:00Z
description: "First post! A quick look at the tech stack behind this blog and why I chose Astro, AstroPaper, and Cloudflare Pages."
tags:
  - astro
  - blog
  - web-development
featured: true
---

Welcome to my blog! This is my first post, and I wanted to kick things off by sharing the tech stack behind this site.

## The Stack

- **[Astro](https://astro.build/)** — A content-focused static site generator that ships zero JavaScript by default
- **[AstroPaper](https://github.com/satnaing/astro-paper)** — A minimal, accessible blog theme with dark mode, search, and RSS built-in
- **[Cloudflare Pages](https://pages.cloudflare.com/)** — Free, globally distributed hosting with automatic deployments from Git

## Why Astro?

After evaluating Next.js, Gatsby, Hugo, and Jekyll, Astro stood out for a blog because:

1. **Content-first architecture** — Markdown files are first-class citizens
2. **Zero JS by default** — Pages are static HTML unless you opt into interactivity
3. **Fast builds** — Full site builds in seconds, not minutes
4. **Island architecture** — Add React/Svelte/Vue components only where needed

## A Quick Code Example

Here's how simple an Astro component looks:

```astro
---
// This runs at build time
const posts = await getCollection("blog");
const sortedPosts = posts.sort(
  (a, b) => b.data.pubDatetime.valueOf() - a.data.pubDatetime.valueOf()
);
---

<ul>
  {sortedPosts.map(post => (
    <li>
      <a href={`/posts/${post.slug}`}>{post.data.title}</a>
    </li>
  ))}
</ul>
```

And here's a TypeScript snippet to show syntax highlighting:

```typescript
interface BlogPost {
  title: string;
  pubDatetime: Date;
  tags: string[];
  description: string;
  draft?: boolean;
}

function getPublishedPosts(posts: BlogPost[]): BlogPost[] {
  return posts
    .filter(post => !post.draft)
    .sort((a, b) => b.pubDatetime.valueOf() - a.pubDatetime.valueOf());
}
```

## What's Next

I'll be writing about software engineering, cloud architecture (especially AWS), and web development. Stay tuned!
