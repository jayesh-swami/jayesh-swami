# Post-Change Checklist

After every change, go through this checklist and run only the tests relevant to the files you touched.

## Code Quality (always run)
- [ ] Files touched follow SOLID principles
- [ ] No duplicated logic — shared logic lives in `src/lib/`
- [ ] No unused imports in modified files
- [ ] `npm run build` passes with 0 errors

## Tests (run only what's relevant)

### If you touched `src/pages/rss.xml.ts`
- [ ] `/rss.xml` returns valid XML
- [ ] Feed includes blog, learning, and project entries sorted by date

### If you touched learning pages or `src/lib/learning-utils.ts`
- [ ] Tab counts on `/learning`, `/learning/courses`, `/learning/projects`, `/learning/papers` show the same total for "All"
- [ ] `LEARNING_DESCRIPTION` renders consistently across all learning pages

### If you touched `src/pages/index.astro` or `src/components/terminal-intro.astro`
- [ ] Terminal intro renders and types without getting cut off on mobile
- [ ] Terminal is scrollable after animation completes

### If you touched `src/components/footer.astro`
- [ ] Footer has top border, copyright year, and social icons
- [ ] Footer sits close to bottom of page

### If you touched `src/components/header.astro` or nav
- [ ] All nav links (`/blog`, `/learning`, `/about`) resolve

### If you touched blog pages or `src/lib/data-utils.ts`
- [ ] Blog pagination works (page 1, page 2, Previous/Next)
- [ ] Blog post pages render title, date, tags, reading time

### If you touched tag pages
- [ ] `/tags` lists all tags with counts
- [ ] `/tags/{tag}` filters posts correctly

### If you touched `src/components/theme-toggle.astro`
- [ ] Dark/light mode toggle persists across navigations

### If you touched `src/pages/about.astro`
- [ ] Timeline renders all entries with correct dates and titles

### If you touched `src/content.config.ts`
- [ ] All collection loaders point to correct directories
- [ ] All existing content still builds without errors
