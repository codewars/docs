# Codewars Docs

> New documentation for Codewars. Still work in progress.

## Taxonomy

Documents are classified with the following:

- `Category` (`category`): Document belongs to a category
- `Tag` (`tags`): Document can have multiple tags
- `Language` (`languages`): A special kind of `Tag` that is used to collect documents to show on the language page

## Routes

- `/languages/`: List of supported languages
- `/languages/:id`: Show language information
  - Sidebar lists all pages referencing the language, grouped by `category`
- `/tags/`: List of tags
- `/tags/:id`: List of pages with tag `id`
- `/categories/`: List of documentation categories
- `/categories/:id`: List of pages in the category

Markdown files matching `content/**/*.md` generates matching routes. For example, `content/foo/bar.md` generates `/foo/bar/`.

---

Built with [Gridsome](https://gridsome.org/) using [docc](https://github.com/mrcrmn/docc) starter.
