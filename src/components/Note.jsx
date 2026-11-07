import { useState } from "react";
import { CheckIcon, CloseIcon, DeleteIcon, EditIcon } from "./Icons";

function Note({ id, title, content, updatedAt, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState({ title, content });

  function startEditing() {
    setDraft({ title, content });
    setIsEditing(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setDraft((prev) => ({ ...prev, [name]: value }));
  }

  function save(event) {
    event.preventDefault();
    const next = { title: draft.title.trim(), content: draft.content.trim() };
    if (!next.title && !next.content) {
      onDelete(id);
      return;
    }
    onUpdate(id, next);
    setIsEditing(false);
  }

  function handleKeyDown(event) {
    if (event.key === "Escape") setIsEditing(false);
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) save(event);
  }

  if (isEditing) {
    return (
      <form className="note note-editing" onSubmit={save}>
        <input
          name="title"
          value={draft.title}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Title"
          aria-label="Edit title"
          autoFocus
        />
        <textarea
          name="content"
          value={draft.content}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Note"
          aria-label="Edit content"
          rows={4}
        />
        <div className="note-actions">
          <button type="button" onClick={() => setIsEditing(false)} aria-label="Cancel editing" title="Cancel (Esc)">
            <CloseIcon />
          </button>
          <button type="submit" aria-label="Save note" title="Save (Ctrl+Enter)">
            <CheckIcon />
          </button>
        </div>
      </form>
    );
  }

  return (
    <article className="note">
      {title && <h2>{title}</h2>}
      {content && <p>{content}</p>}
      <div className="note-actions">
        <time dateTime={new Date(updatedAt).toISOString()}>
          {new Date(updatedAt).toLocaleDateString(undefined, { month: "short", day: "numeric" })}
        </time>
        <button onClick={startEditing} aria-label={`Edit note ${title}`} title="Edit">
          <EditIcon />
        </button>
        <button onClick={() => onDelete(id)} aria-label={`Delete note ${title}`} title="Delete">
          <DeleteIcon />
        </button>
      </div>
    </article>
  );
}

export default Note;
