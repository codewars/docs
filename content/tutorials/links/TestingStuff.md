---
kind: tutorial
topic: links
---

### direct links:

- in docs (same folder): [installation]
- in docs (sub folder): [regularname]
- in docs (sub folder): [chekc-sub-dir]
- in docs (sub folder): [chekc sub dir]
- in content: [extensions]
- in data: [tags] (note: yml file)

### paths links (while original file is `docs/content/docs/TestingStuff.md`):

- [community](./getting-started/community) >>> OK!

```markdown
- [community](community.md) >>> FAIL
- [community](./content/getting-started/community.md) >>> FAIL
- [community](./docs/content/getting-started/community.md) >>> FAIL
```

```markdown
### direct links with custom text:

- in docs (same folder): [meh][installation]
- in docs (sub folder): [meh][regularname]
- in docs (sub folder): [meh][chekc-sub-dir]
- in docs (sub folder): [meh][chekc sub dir]
- in content: [meh][extensions]
- in data: [tags] (note: yml file)

* in docs (same folder): [meh!](installation)
* in docs (sub folder): [meh!](regularname)
* in docs (sub folder): [meh!](chekc-sub-dir)
* in docs (sub folder): [meh!](chekc sub dir)
* in content: [meh!](extensions)
* in data: [tags] (note: yml file)
```
