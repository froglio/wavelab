# WaveLab — Professional Surf Analysis Platform (WIP)

[![Project Status](https://img.shields.io/badge/status-WIP-orange)](#)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](#)
[![Issues](https://img.shields.io/github/issues/froglio/wavelab)](#)

🎯 WaveLab is a web platform for professional surf analysis that helps subscribers improve their surfing by studying in-depth analyses of professional athletes. The app combines curated video content, frame-by-frame annotations, visual overlays, and expert commentary so users can learn technique, timing, and strategy from the best.

---

## Table of Contents

- About
- Goals
- Features
- Tech Stack
- Project Structure
- Getting Started
- Development
- Configuration
- Contributing
- Credits & Inspiration

---

## About

WaveLab provides curated surf analysis content for surfers, coaches, and analysts. Each analysis is designed to be actionable: frame annotations, visual overlays and focused lessons to make it easier to emulate and practice professional-level technique.

## Goals

- Accelerate learning through visual and data-informed analysis
- Provide clear, bite-sized lessons and full breakdowns of maneuvers
- Host subscriber-only curated content and playlists
- Maintain a modern, accessible, responsive interface for web and mobile

## Features

- ▶️ Video playback with annotated segments and frame-by-frame review
- 🔍 Visual overlays for foot placement, body posture, line and timing
- 📚 Curated lesson collections (maneuver, athlete, condition filters)
- ✨ Animated previews and interactive UI components
- 🔐 Subscription-based access for premium content

## Tech Stack

- React 18
- Vite (dev server & build)
- Tailwind CSS (styling)
- GSAP (animations)
- react-icons (icons)
- Optional: react-use, axios (for API calls)

---

## Project Structure

Root layout (example):

- index.html
- package.json
- vite.config.js
- tailwind.config.js
- postcss.config.js
- src/
  - main.jsx
  - App.jsx
  - index.css
  - components/
  - pages/
- public/
  - img/
  - videos/

---

## Getting Started

Requirements:

- Node.js 16+ (or current LTS)
- npm (or yarn)

Quick start:

1. Clone the repository

   git clone <repository-url>

2. Change into the project folder

   cd wavelab

3. Install dependencies

   npm install

4. Start the dev server

   npm run dev

5. Build for production

   npm run build

Common scripts (package.json):

- npm run dev — start Vite dev server
- npm run build — create production build
- npm run preview — preview production build locally
- npm run lint — run linters (if configured)

---

## Development

- Entry: `src/main.jsx`
- Main app: `src/App.jsx`
- Global styles: `src/index.css`
- Components: `src/components/`
- Pages: `src/pages/`
- Public assets: `public/img`, `public/videos`

---

## Configuration

Environment variables (example):

- Create a `.env` file for API keys and configuration used in development.
- Example values: API_BASE_URL, VITE_APP_ANALYTICS_KEY

For subscription/payment integration locally, provide mock endpoints or feature flags to disable live billing during development.

---

## Contributing

Contributions are welcome. Please follow these guidelines:

1. Fork the repository
2. Create a new branch: `git checkout -b feat/your-feature`
3. Commit your changes: `git commit -m "feat: add ..."`
4. Push your branch: `git push origin feat/your-feature`
5. Open a Pull Request with a clear description

Guidelines:

- Keep PRs small and focused.
- Add tests for new logic where appropriate.
- Run linters and format code before opening a PR.

---

## Credits & Inspiration

- Developed by Fabricio Roglio de Sousa
- Project structure and layout also influenced by: https://zentry.com/
