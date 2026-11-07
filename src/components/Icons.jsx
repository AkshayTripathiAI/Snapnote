// Small inline SVG icons (Material Design paths) so the app needs no icon library.
function Icon({ path, title }) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden={title ? undefined : true} role={title ? 'img' : undefined}>
      {title && <title>{title}</title>}
      <path d={path} />
    </svg>
  );
}

export function AddIcon(props) {
  return <Icon path="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" {...props} />;
}

export function DeleteIcon(props) {
  return (
    <Icon
      path="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
      {...props}
    />
  );
}

export function EditIcon(props) {
  return (
    <Icon
      path="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
      {...props}
    />
  );
}

export function CheckIcon(props) {
  return <Icon path="M9 16.17 4.83 12l-1.42 1.42L9 19 21 7l-1.41-1.41z" {...props} />;
}

export function CloseIcon(props) {
  return (
    <Icon
      path="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
      {...props}
    />
  );
}

export function NoteIcon(props) {
  return (
    <Icon
      path="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"
      {...props}
    />
  );
}
