# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a static academic website for the research paper "O3Afford: One-Shot 3D Object-to-Object Affordance Grounding for Generalizable Robotic Manipulation". The site is built as a single-page HTML application using Bulma CSS framework with interactive components.

## Project Structure

- `index.html` - Main webpage containing the complete paper presentation
- `static/` - All static assets
  - `css/` - Stylesheets (Bulma framework + custom styles in `index.css`)
  - `js/` - JavaScript files (Bulma components + custom interactions in `index.js`)
  - `videos/` - Video content for the presentation

## Key Components

The website uses:
- **Bulma CSS Framework** - For responsive layout and UI components
- **Bulma Carousel** - For interactive content carousels
- **Bulma Slider** - For interpolation image viewing
- **FontAwesome** - For icons
- **jQuery** - For DOM manipulation and event handling

## Interactive Features

- Video presentation with HTML5 video controls
- Image interpolation slider (configured for 240 frames from `./static/interpolation/stacked/`)
- Responsive navigation with mobile burger menu
- Carousel components for displaying multiple items

## Development Notes

- This is a static site that can be served directly from any web server
- No build process or package management system
- All dependencies are loaded via CDN or local minified files
- The site follows academic paper website conventions (similar to Nerfies template)

## Deployment

Since this is a static site, it can be deployed to:
- GitHub Pages (recommended for `.github.io` repositories)
- Any static hosting service
- Local development server for testing

The site is designed to work without any server-side processing or database.