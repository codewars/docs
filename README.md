# Codewars Docs

> New documentation for Codewars. Still work in progress.

## Taxonomy

Documents are classified with the following:

- `Kind` (`kind`): By kind of documentation (`recipe`, `reference`, `tutorial`, etc.) See [kinds.yml].
- `Tag` (`tags`): By tags associated with the documentation. See [tags.yml].
- `Language` (`languages`): A special kind of `Tag` that is used to collect documents to show on the language page

## Routes

- `/tutorials/`: All docs with kind `tutorial`
- `/recipes/`: All docs with kind `recipe`
- `/references/`: All docs with kind `reference`
- `/tags/`: List of all tags
- `/tags/:id`: List of docs with tag `id`
- `/languages/`: List of supported languages
- `/languages/:id`: Show language information
  - Sidebar lists all pages referencing the language, grouped by `kind`

Markdown files matching `content/**/*.md` generates matching routes. For example, `content/foo/bar.md` generates `/foo/bar/`.

---

Built with [Gridsome](https://gridsome.org/) using [docc](https://github.com/mrcrmn/docc) starter.

[kinds.yml]: ./data/kinds.yml
[tags.yml]: ./data/tags.yml
