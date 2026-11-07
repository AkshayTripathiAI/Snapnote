function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Snapnote &copy; {year} &middot; Notes are stored in this browser only.</p>
    </footer>
  );
}

export default Footer;
