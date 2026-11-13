import { resolveRelative, type FullSlug } from "../util/path"
import type { QuartzComponent } from "./types"

const ResearchNavigation: QuartzComponent = ({ fileData }) => {
  const slug = fileData.slug!
  const pages = [
    { label: "首页", path: "index" },
    { label: "研究笔记", path: "notes/index" },
    { label: "专题", path: "projects/index" },
  ] as const

  return (
    <nav class="research-nav" aria-label="主导航">
      <a class="research-wordmark" href={resolveRelative(slug, "index" as FullSlug)}>
        Bruce Zhu
      </a>
      <div class="research-nav-links">
        {pages.map(({ label, path }) => (
          <a
            href={resolveRelative(slug, path as FullSlug)}
            aria-current={slug === path ? "page" : undefined}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default ResearchNavigation
