# WaveLab — Professional Surf Analysis Platform (🚧 WIP)

WaveLab is a web platform for professional surf analysis that helps subscribers improve their surfing by studying in-depth analyses of professional athletes. The app combines curated video content, frame-by-frame annotations, visual overlays, and expert commentary so users can learn technique, timing, and strategy from the best.

## Table of Contents

- About
- Goals
- Features
- Tech Stack
- Project Structure
- Installation
- Development
- Usage
- Screenshots / Demo
- Contributing
- Credits
- License

## About

WaveLab is intended for surfers, coaches, and analysts who want to improve performance through data-informed study. Subscribers get access to curated analyses of professional surfers with visual annotations, breakdowns of critical maneuvers, and comparison tools.

## Goals

- Help users accelerate skill acquisition by studying professionals
- Provide clear, visual, and actionable analysis for common maneuvers
- Offer a subscription model to unlock premium curated content and expert sessions
- Maintain a modern, accessible, and responsive UI for web and mobile

## Features

- Video playback with annotated segments and frame-by-frame review
- Visual overlays to highlight foot placement, body position, trajectory, and stance
- Curated lesson collections organized by maneuver type, wave condition, or athlete
- Animated previews and interactive UI components
- Subscriber-only premium content and saved playlists

## Tech Stack

- React 18
- Vite (development and build)
- Tailwind CSS (styling)
- GSAP (animations)
- react-icons (icons)
- Optional utilities: react-use, axios (or fetch) for API calls

## Project Structure

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

## Installation

1. Clone the repository:

   git clone <repository-url>

2. Change into project directory:

   cd award-winning-website

3. Install dependencies:

   npm install

4. Start development server:

   npm run dev

5. Build production bundle:

   npm run build

6. Run linting (if configured):

   npm run lint

## Development

- Entry point: `src/main.jsx`
- Main app: `src/App.jsx`
- Global styles: `src/index.css`
- Components: `src/components/`
- Public assets: `public/img`, `public/videos`

Tips:

- Add demo videos or screenshots to `public/videos` and `public/img` to make testing easier.
- Keep components small and focused. Use Tailwind utility classes and centralize animation logic where appropriate.

## Usage

After starting the dev server, open the local URL shown by Vite (typically http://localhost:5173). Explore pages, test video playback, and try component interactions.

If the project integrates an API for user subscriptions or analysis data, configure environment variables appropriately (e.g., `.env` files) and provide mock data for local development.

## Screenshots / Demo

Add representative screenshots or short GIFs to the `public/img` folder and reference them in this README to showcase the UI. Example assets that may exist in the repo:

- `public/img/logo.png`
- `public/img/about.webp`
- `public/videos/hero-1.mp4`

To embed screenshots in GitHub's README, use the relative path: `![Alt text](public/img/screenshot.png)`.

## Contributing

Contributions are welcome. Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/your-feature`)
3. Commit your changes (`git commit -m "Add feature"`)
4. Push to your branch (`git push origin feat/your-feature`)
5. Open a Pull Request describing the change

Please open issues for bugs or feature requests before implementing large changes. Follow the existing code style and run linting/tests before submitting a PR.

## Credits

- Developed by Fabricio Roglio de Sousa
- Built with React and GSAP

Note: The project structure and layout were inspired by https://zentry.com/.
