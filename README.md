#

This is the repository for hosting the document website for UoB CSA coursework.

## Editing

Open the page, click on the bottom of the
It's ok to directly editing markdowns in this repository on Github.

## Config

To manage the website and sidebar config, edit `docs/.vitepress/config.mts`.

For more info, please refer <https://vitepress.dev/reference/site-config>

## Routing

The `docs` directory is the root directory of the website, and all documents are under `docs` directory with file-based routing.

When you are accessing resources, please discard `docs/` in your path.
e.g. I want to insert an image `docs/assets/example.png`, I need to type `![PNG](/assets/example.png)` in the markdown.

For more info, please refer <https://vitepress.dev/guide/routing>
