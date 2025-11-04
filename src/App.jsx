import React, { useEffect, useRef, useState } from "react";
import NavbarComp from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import "./App.css";

function App() {
  const phrases = ["Tech passionate", "Web developer", "Software engineer"];
  const [text, setText] = useState("");
  const [current, setCurrent] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const charIndex = useRef(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const type = () => {
      const fullText = phrases[current];
      if (isDeleting) {
        setText(fullText.substring(0, charIndex.current--));
      } else {
        setText(fullText.substring(0, charIndex.current++));
      }

      if (!isDeleting && charIndex.current === fullText.length + 1) {
        setIsDeleting(true);
        setTimeout(type, 1000);
      } else if (isDeleting && charIndex.current === 0) {
        setIsDeleting(false);
        setCurrent((prev) => (prev + 1) % phrases.length);
        setTimeout(type, 500);
      } else {
        setTimeout(type, isDeleting ? 75 : 150);
      }
    };

    const timeout = setTimeout(type, 500);
    return () => clearTimeout(timeout);
  }, [current, isDeleting]);

  return (
    <div className="container-fluid">
      <NavbarComp />
      <Home typewriterText={text} />
      <About style={{marginBottom:'0 px'}}/>
      <Education />
      <Experience/>
      <Projects />      
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
