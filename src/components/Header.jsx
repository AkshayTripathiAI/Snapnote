import { NoteIcon } from "./Icons";

function Header({ query, onQueryChange, count }) {
  return (
    <header>
      <h1>
        <NoteIcon />
        Snapnote
      </h1>
      {count > 0 && (
        <input
          className="search"
          type="search"
          placeholder="Search notes..."
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          aria-label="Search notes"
        />
      )}
    </header>
  );
}

export default Header;
