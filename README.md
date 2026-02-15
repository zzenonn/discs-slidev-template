# slidev-theme-discs

A minimalist Slidev theme for Ateneo DISCS (Department of Information Systems and Computer Science) featuring a clean white background with blue (#00b0f0) accents and professional typography.

## Design

- **Colors:** White background with blue (#00b0f0) accents
- **Fonts:** Roboto (titles) and Roboto Condensed (body text)
- **Style:** Clean, professional, and minimalist

## Installation

```bash
npm install
```

## Development

Preview the theme locally:

```bash
npm run dev
```

## Available Layouts

### Cover
Title slide with customizable content sections

```markdown
---
layout: cover
title: Your Presentation Title
---

Your subtitle or description text

::author-info::
Your Name
Date
::

::subject-info::
Course Code
Course Name
::
```

All slots are optional and have defaults:
- If `::author-info::` is not provided, it falls back to `author` and `date` frontmatter fields
- If `::subject-info::` is not provided, it defaults to "DISCS" and "Ateneo de Manila University"

### Default
Standard content slide with footer

```markdown
---
---

# Your Slide Title

Your content here
```

Features:
- Fixed footer with DISCS logo and department name
- Titles are simple text (no blue boxes)
- Larger body font (1.25rem) for readability

### Section
Section divider with blue box title

```markdown
---
layout: section
---

# Section Title
```

### End
Closing slide with blue box title

```markdown
---
layout: end
---

# Thank You
```

## Customization

All layouts use a white background. Titles on cover, section, and end layouts have blue boxes, while default layout titles are simple text.

The footer logo can be customized by replacing `public/discs-logo.png`.

## License

MIT
