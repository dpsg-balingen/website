# DPSG Balingen Website - AI Coding Assistant Guide

This Jekyll-based website serves the DPSG Stamm Heilig Geist in Balingen, Germany - a Catholic scout group (Deutsche Pfadfinderschaft Sankt Georg).

## Architecture Overview

**Tech Stack**: Jekyll static site generator with GitHub Pages deployment
- **Theme**: Minima (with custom styling planned per `STYLING.md`)
- **Plugins**: SEO tags, sitemap, feed generation
- **Hosting**: GitHub Pages at `pages.faigle.dev/dpsg`
- **Language**: German content for local scout community

**Content Structure**:
- **Scout Age Groups**: `/stufen/` - Individual pages for each age-based group (Wichtel, Wölflinge, Jungpfadfinder, Pfadfinder, Rover, Leiter, Altrover)
- **Group Data**: `_data/gruppen.yml` - Centralized group information (meeting times, leaders, age ranges)
- **Wiki Pages**: `/wiki/` - Educational content about scouting, DPSG organization
- **Legal Pages**: `/legal/` - Contact, privacy, imprint (German legal requirements)

## Key Development Patterns

### Group Data Management
All scout group information is centralized in `_data/gruppen.yml`. 

### URL Structure Convention
- Group pages: `/stufen/{group-name-lowercase}/`
- Content pages: Root level (gruppenstunden, kalender, bilder)
- Wiki content: `/wiki/{topic}/`
- Legal pages: `/legal/{page}/`

## Development Workflow

### Local Development
```bash
bundle exec jekyll serve --livereload
# Serves on http://localhost:4000/dpsg
```

### Build & Deploy
```bash
bundle exec jekyll build
# Builds to _site/ directory
# GitHub Pages auto-deploys from main branch
```

### Content Updates
1. **Group Information**: Edit `_data/gruppen.yml` for meeting times, leaders
2. **New Pages**: Add markdown files with proper front matter
3. **Navigation**: Currently hardcoded in theme - consider custom navigation

## Project-Specific Conventions

### German Content Standards
- Use "Du-Form" (informal address) consistently
- Scout-specific terminology: "Gruppenstunden" (group meetings), "Stufen" (age groups)
- Local references: "Pfadi-Haus (Edith-Stein Zentrum, Hirschbergstraße 112/2)"

### Color Scheme (per STYLING.md)
- Primary: Dunkelgrün `#2E5939` (dark green - nature/stability)
- Secondary: Himmelblau `#4A90E2` (sky blue - links/CTA)
- Accent: Sandbeige `#E8D5B7` (sand beige - backgrounds)
- Text: Anthrazit `#333333`

### Content Categories
- **Stufen (Age Groups)**: Each has specific pedagogical focus (e.g., "ENTDECKEN" for Wölflinge, "WAGT ES" for Pfadfinder)
- **Financial Policy**: Explicit inclusion statement in `gruppenstunden.md` - no child excluded for financial reasons
- **Contact Information**: Centralized in `/legal/kontakt.md` with leadership team details

## Missing/TODO Components

1. **Layout Templates**: Create `_layouts/stufe.html` for group pages
2. **Calendar Integration**: `/kalender.md` references Google Calendar but needs implementation
3. **Image Gallery**: `/bilder.md` is incomplete (references Instagram/Facebook)
4. **Custom CSS**: No custom stylesheets exist yet (only planned in STYLING.md)
5. **Navigation Menu**: Likely needs custom implementation beyond theme defaults

## Integration Points

- **Google Calendar**: iCal integration planned for events
- **Social Media**: References to Instagram/Facebook accounts
- **GitHub Pages**: Auto-deployment from repository