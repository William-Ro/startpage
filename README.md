# Startpage

A minimal browser startpage with organized bookmarks and a daily rotating GIF slideshow.

## Features

- **Quick Links** — Bookmarks organized into color-coded categories (Social, Media, Misc, Vault)
- **Daily Slideshow** — A random GIF is selected each day, click to cycle through them manually
- **Persistent State** — Slideshow position is saved across sessions via localStorage

## Setup

Set this as your browser's homepage or new tab page by pointing it to the local `index.html` file.

## Structure

```
├── index.html          # Main page
├── style.css           # Styling
├── script.js           # Slideshow logic
└── assets/
    ├── JetBrainsMono.ttf
    ├── favicon.ico
    └── side[1-33].gif  # Slideshow images
```
