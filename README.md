# Snapnote

A minimal note-taking web app built with React, Vite and Material-UI components.

Built as a practice project while learning React.

## Features

- Expanding "Take a note..." input: clicking it reveals a title field and an add button (with a zoom animation).
- Add notes with a title and content; notes appear as cards.
- Delete a note with its trash icon.
- Notes live in React state only, so they are cleared on page reload.

## Tech stack

- React 18
- Vite 5
- Material-UI v4 (`@material-ui/core` Fab/Zoom, `@material-ui/icons`)

## Getting started

Prerequisites: Node.js 18+ and npm.

```bash
git clone https://github.com/AkshayTripathiAI/Snapnote.git
cd Snapnote
npm install --force
npm run dev
```

Then open http://localhost:5173.

`--force` is needed because Material-UI v4 declares a peer dependency on React 16/17 while this project uses React 18; plain `npm install` fails with an `ERESOLVE` error. With `--force`, npm also installs `@material-ui/core`, which the code imports but `package.json` does not list.

Other scripts: `npm run build`, `npm run preview`, `npm run lint`.

## Project structure

```
src/
├── App.jsx              # Notes state: add/delete
├── main.jsx             # Entry point
└── components/
    ├── Header.jsx
    ├── CreateArea.jsx   # Expanding note form
    ├── Note.jsx         # Note card with delete button
    └── Footer.jsx
```
