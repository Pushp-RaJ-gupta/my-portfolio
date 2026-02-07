import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">
      <h1>PUSHP RAJ GUPTA</h1>
      <p>B.Tech CSE (3rd Year) • DSA • C++ • React</p>

      <div className="hero-icons">
        <div className="glass"><Github /></div>
        <div className="glass"><Linkedin /></div>
        <div className="glass"><Mail /></div>
      </div>
    </section>
  );
}
