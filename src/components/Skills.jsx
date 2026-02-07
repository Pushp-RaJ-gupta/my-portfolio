export default function Skills() {
  const skills = [
    "C++",
    "Java",
    "DSA",
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Git",
  ];

  return (
    <section className="container">
      <h2 className="section-title">Skills</h2>
      <div className="skills">
        {skills.map((skill) => (
          <div key={skill} className="skill glass">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
