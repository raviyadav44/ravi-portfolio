import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Publications from "./components/sections/Publications";
import Achievements from "./components/sections/Achievements";
import Hobbies from "./components/sections/Hobbies";
import Languages from "./components/sections/Languages";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen font-body text-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Publications />
        <Achievements />
        <Hobbies />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}