import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

const explorer = Component.Explorer({
    sortFn: (a, b) => {
        let aFile = a.file;
        let bFile = b.file;

        if (aFile && !bFile) {
            return -1;
        } else if (!aFile && bFile) {
            return 1;
        } else if (!aFile && !bFile) {
            return a.displayName.localeCompare(b.displayName);
        }

        let aOrder = aFile?.frontmatter?.order ?? Number.MIN_SAFE_INTEGER;
        let bOrder = bFile?.frontmatter?.order ?? Number.MIN_SAFE_INTEGER;
        let orderDiff = aOrder - bOrder;
        if (orderDiff === 0) return a.displayName.localeCompare(b.displayName);
        return orderDiff;
    },
});

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    explorer,
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    explorer,
  ],
  right: [],
}
