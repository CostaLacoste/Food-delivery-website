# 🍕 Food Delivery Website

A modern, responsive food delivery web application built with React. Browse restaurants, explore menus, and place orders — all from a clean and intuitive interface.

---

## Tech Stack

- **React 19** — UI library
- **React Router DOM v7** — client-side routing
- **React Bootstrap + Bootstrap 5** — responsive layout and components
- **Bootstrap Icons** — icon set
- **Create React App** — project scaffolding and build tooling

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/CostaLacoste/Food-delivery-website.git
cd Food-delivery-website
npm install
```

### Running the App

```bash
npm start
```

Opens the app at [http://localhost:3000](http://localhost:3000). The page reloads automatically on file changes.

---

## Available Scripts

| Script | Description |
|---|---|
| `npm start` | Run the app in development mode |
| `npm test` | Launch the test runner in watch mode |
| `npm run build` | Build the app for production into the `build/` folder |
| `npm run eject` | Eject from Create React App (irreversible) |

---

## Project Structure

```
food-delivery-website/
├── public/          # Static assets and HTML template
├── src/             # Application source code
│   ├── components/  # Reusable UI components
│   ├── pages/       # Page-level components
│   └── App.js       # Root component and routing
├── package.json
└── README.md
```

---

## Deployment

Build the production bundle with:

```bash
npm run build
```

The optimised output goes into the `build/` folder and is ready to be served by any static hosting provider (Netlify, Vercel, GitHub Pages, etc.).

---

## License

This project is open source and available under the [MIT License](LICENSE).