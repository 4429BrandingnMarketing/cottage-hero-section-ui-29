// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.

import { writeFileSync } from "fs"
import { resolve } from "path"

const BASE_URL = "https://cottage-hero-section-ui-29.lovable.app"

interface SitemapEntry {
  path: string
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"
  priority?: string
}

const entries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/music", changefreq: "weekly", priority: "0.9" },
  { path: "/divisions/music", changefreq: "monthly", priority: "0.8" },
  { path: "/divisions/tv", changefreq: "monthly", priority: "0.8" },
  { path: "/divisions/radio", changefreq: "monthly", priority: "0.7" },
  { path: "/divisions/ai", changefreq: "monthly", priority: "0.8" },
  { path: "/divisions/ai/services", changefreq: "monthly", priority: "0.7" },
  { path: "/divisions/ai/pricing", changefreq: "monthly", priority: "0.7" },
  { path: "/divisions/ai/consulting", changefreq: "monthly", priority: "0.7" },
  { path: "/divisions/fashion", changefreq: "monthly", priority: "0.7" },
  { path: "/divisions/blog", changefreq: "weekly", priority: "0.7" },
  { path: "/divisions/tragic-mulatto", changefreq: "weekly", priority: "0.7" },
  { path: "/divisions/marketing", changefreq: "monthly", priority: "0.8" },
  { path: "/divisions/technology", changefreq: "monthly", priority: "0.7" },
  { path: "/divisions/university", changefreq: "monthly", priority: "0.7" },
  { path: "/divisions/agency", changefreq: "monthly", priority: "0.7" },
  { path: "/divisions/scripts", changefreq: "monthly", priority: "0.7" },
  { path: "/divisions/merch", changefreq: "weekly", priority: "0.7" },
  { path: "/pivot-book", changefreq: "monthly", priority: "0.6" },
  { path: "/pivot-tour", changefreq: "monthly", priority: "0.6" },
]

function generateSitemap(entries: SitemapEntry[]) {
  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  )

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n")
}

writeFileSync(resolve("public/sitemap.xml"), generateSitemap(entries))
console.log(`sitemap.xml written (${entries.length} entries)`)
