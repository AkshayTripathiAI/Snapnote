# Snapnote

**Live demo:** https://akshaytripathiai.github.io/Snapnote/

A minimal note-taking web app built with React and Vite. Jot something down, edit it later, and find it again with search. Notes are saved in your browser.

Built as a practice project while learning React.

## Features

- Expanding "Take a note..." box: focusing it reveals a title field and an add button (with a zoom-in animation)
- Add notes with a title and/or content (empty notes are ignored); `Ctrl+Enter` adds from the keyboard
- Edit a note in place (pencil icon); `Ctrl+Enter` saves, `Esc` cancels. Clearing both fields deletes the note.
- Delete a note with its trash icon
- Search notes by title or content
- Notes are saved to `localStorage`, so they survive page reloads
- Responsive card grid; lightweight inline SVG icons (no UI library)

## Tech stack

- React 18
- Vite 5

## Getting started

Prerequisites: Node.js 18+ and npm.

```bash
git clone https://github.com/AkshayTripathiAI/Snapnote.git
cd Snapnote
npm install
npm run dev
```

Then open the URL Vite prints (http://localhost:5173/Snapnote/).

Other scripts: `npm run build` (outputs `dist/`), `npm run preview`, `npm run lint`. The app is served under `/Snapnote/` (see `vite.config.js`) to match its GitHub Pages URL.

## Project structure

```
src/
├── App.jsx              # Notes state: add/edit/delete, search, localStorage
├── main.jsx             # Entry point
└── components/
    ├── Header.jsx       # Title and search box
    ├── CreateArea.jsx   # Expanding note form
    ├── Note.jsx         # Note card with edit and delete
    ├── Icons.jsx        # Inline SVG icons
    └── Footer.jsx
```
