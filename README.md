# wcag3
WCAG 3

There is a [presentation of the process the group](https://docs.google.com/presentation/d/14qG2f-ZkhFDqox_qmzqC5tCUt1xJaumkJS2l5GaD-3o/edit#slide=id.p) uses for addressing issues and updates.

## Editor's Draft

Editor's drafts of TR space documents are available at:

* [Guidelines](https://w3c.github.io/wcag3/guidelines/)
* [Explainer](https://w3c.github.io/wcag3/explainer/)
* [Requirements](https://w3c.github.io/wcag3/requirements/)

## Local Setup

Make sure you have [nodejs.org](Node.js) installed. This has primarily been tested with v20.

If you use [fnm](https://github.com/Schniz/fnm) or [nvm](https://github.com/nvm-sh/nvm) to manage multiple Node.js versions,
you can switch to the recommended version by typing `fnm use` or `nvm use`
(with no additional arguments) while in the repository directory.

First, run `npm i` in the root directory of the repository to install dependencies.

## Common Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm start`               | Start local dev server at `localhost:4321`       |
| `npm run build`           | Build to `./dist/`                               |
| `npm run check`           | Check for TypeScript errors                      |
| `npm run preview`         | Preview build locally at `localhost:4321`        |

## Project Structure

This repository uses Astro;
see [Astro's guide on project structure](https://docs.astro.build/en/basics/project-structure/)
for standard directories.

### Notable subdirectories under `src`

- `lib/` - contains files that contribute to Astro build or template logic
  - `markdown/` - contains files implementing remark and rehype plugins, to transform output of
    Markdown files

Additional directories with special meaning:

- `guidelines/` - contains content files which combine to form the normative document
  - `acknowledgements/` - Contents of Acknowledgement sections, one section per file
    - `index.json` - Defines order of Acknowledgements sections
  - `groups/` - Contents of grouping sections
    - `index.json` - Defines order of grouping sections
    - `{group-name}.json` - Defines order of underlying guideline sections; can specify status or title
    - `{group-name}/` - Contents of Guideline sections
      - `{guideline-name}.md` - Defines content of guideline and order of its requirements/assertions
      - `{guideline-name}/` - Subdirectory containing requirements/assertions under each guideline
        - `{requirement-or-assertion-name}.md` - Defines content of an individual requirement or assertion

In the case of files or directories representing groups, guidelines, or requirements/assertions,
each entity's title is based on its slug by default, i.e. hyphens are replaced by spaces, and
the first letter of the first word is capitalized. This can be customized by overriding the
`title` field, which exists in JSON files for groups, or in Markdown frontmatter for
guidelines, requirements, or assertions.

## Custom directives for guidelines Markdown

For more concrete examples, search for these directives in the repository.

### Decision Trees

The following block will be transformed into a decision tree `details` element,
with "Which foundational requirements apply" summary automatically included:

:::decision-tree
For each item:
1. Would X do Y?
   - Yes, .... Stop.
   - No, fail.
1. Would A do Z?
   - ...
:::

### Editor's Notes

The following block will be transformed into a green "Editor's Note" box:

```
:::ednote
Your content here
:::
```

### Glossary Terms

The text inside `:term[...]` will be transformed into a link referencing a term in the glossary,
and can be used inline within blocks of text:

```
... is :term[programmatically determinable].
```

## Environment Variables

### `WCAG_DIFFABLE`

Filters build output to reduce noise when diffing output between changes.
This is for maintenance purposes only, to catch regressions;
built code is not expected to run properly when this is active!

**Default:** Unset (set to any non-empty value to enable)
