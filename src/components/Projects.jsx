export default function Projects() {
  const projects = [
    { title: "DSA Tracker", desc: "Track and improve coding practice" },
    { title: "Portfolio Website", desc: "Personal portfolio using React + Vite" },
    { title: "MEDI FUSION", desc: "Doctor consulting web app" },
  ];

  return (
    <section className="container">
      <h2 className="section-title">Projects</h2>
      <div className="projects">
        {projects.map((p) => (
          <div key={p.title} className="project glass">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
