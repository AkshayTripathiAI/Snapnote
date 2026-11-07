import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import "./App.css";

const STORAGE_KEY = "snapnote.notes";

function loadNotes() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
}

function createId() {
  return typeof crypto !== "undefined" && crypto.randomUUID
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function App() {
  const [notes, setNotes] = useState(loadNotes);
  const [query, setQuery] = useState("");

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    } catch {
      // Storage unavailable (e.g. private mode): notes still work for this session.
    }
  }, [notes]);

  function addNote(newNote) {
    setNotes((prevNotes) => [
      { ...newNote, id: createId(), updatedAt: Date.now() },
      ...prevNotes,
    ]);
  }

  function updateNote(id, changes) {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, ...changes, updatedAt: Date.now() } : note
      )
    );
  }

  function deleteNote(id) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }

  const term = query.trim().toLowerCase();
  const visibleNotes = term
    ? notes.filter(
        (note) =>
          note.title.toLowerCase().includes(term) ||
          note.content.toLowerCase().includes(term)
      )
    : notes;

  return (
    <div className="app">
      <Header query={query} onQueryChange={setQuery} count={notes.length} />
      <main>
        <CreateArea onAdd={addNote} />
        {notes.length === 0 && (
          <p className="empty">No notes yet. Click &ldquo;Take a note...&rdquo; to add one.</p>
        )}
        {notes.length > 0 && visibleNotes.length === 0 && (
          <p className="empty">No notes match &ldquo;{query}&rdquo;.</p>
        )}
        <section className="notes">
          {visibleNotes.map((note) => (
            <Note
              key={note.id}
              id={note.id}
              title={note.title}
              content={note.content}
              updatedAt={note.updatedAt}
              onDelete={deleteNote}
              onUpdate={updateNote}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
