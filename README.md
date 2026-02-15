# slidev-theme-discs

A minimalist Slidev theme for Ateneo DISCS (Department of Information Systems and Computer Science) featuring a clean blue and white color scheme with professional typography.

## Design

- **Colors:** Minimalist mix of white and blue (#00b0f0)
- **Fonts:** Roboto (titles) and Roboto Condensed (body text)
- **Style:** Clean, professional, and minimalist

## Installation

```bash
npm install slidev-theme-discs
```

## Usage

Add the theme to your slides frontmatter:

```yaml
---
theme: discs
---
```

## Available Layouts

### Cover
Title slide with DISCS branding

```yaml
---
layout: cover
title: Your Presentation Title
info: Subtitle or description
author: Your Name
date: 2026-02-15
---
```

### Default
Standard content slide with footer

```markdown
---
---

# Your Slide Title

Your content here
```

### Section
Section divider with blue background

```yaml
---
layout: section
---

# Section Title
```

### End
Closing slide with thank you message

```yaml
---
layout: end
---

# Questions?

Your contact info
```

## Development

Preview the theme locally:

```bash
npm install
npm run dev
```

## License

MIT
