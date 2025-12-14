const items = [
  {
    title: "Product Design",
    desc: "Design systems, UI/UX and prototypes that scale.",
  },
  {
    title: "Web Development",
    desc: "Modern React applications with best practices.",
  },
  {
    title: "Growth & Strategy",
    desc: "Go-to-market guidance and product analytics.",
  },
  { title: "Support", desc: "Ongoing maintenance and optimizations." },
];

export default function Features() {
  return (
    <section className="features">
      <div className="container">
        <h2>What we do</h2>
        <div className="grid" style={{ marginTop: 16 }}>
          {items.map((it) => (
            <div key={it.title} className="card">
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
