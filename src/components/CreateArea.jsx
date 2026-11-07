import { useState } from "react";
import { AddIcon } from "./Icons";

const EMPTY_NOTE = { title: "", content: "" };

function CreateArea({ onAdd }) {
  const [isExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState(EMPTY_NOTE);

  const canSubmit = note.title.trim() !== "" || note.content.trim() !== "";

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  }

  function submitNote(event) {
    event.preventDefault();
    if (!canSubmit) return;
    onAdd({ title: note.title.trim(), content: note.content.trim() });
    setNote(EMPTY_NOTE);
  }

  function handleKeyDown(event) {
    // Ctrl/Cmd + Enter adds the note from either field.
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      submitNote(event);
    }
  }

  return (
    <form className="create-note" onSubmit={submitNote}>
      {isExpanded && (
        <input
          name="title"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={note.title}
          placeholder="Title"
          aria-label="Note title"
          autoFocus
        />
      )}

      <textarea
        name="content"
        onFocus={() => setExpanded(true)}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={note.content}
        placeholder="Take a note..."
        aria-label="Note content"
        rows={isExpanded ? 3 : 1}
      />
      <button
        type="submit"
        className={`fab${isExpanded ? " fab-visible" : ""}`}
        disabled={!canSubmit}
        aria-label="Add note"
        title="Add note (Ctrl+Enter)"
      >
        <AddIcon />
      </button>
    </form>
  );
}

export default CreateArea;
