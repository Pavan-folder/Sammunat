export default function Footer() {
  return (
    <footer className="site-footer">
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>© {new Date().getFullYear()} Sammunat</div>
        <div style={{ color: "var(--muted)" }}>Built with care</div>
      </div>
    </footer>
  );
}
