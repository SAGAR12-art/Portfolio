// Home.jsx
import React, { useEffect, useState } from "react";
import sagarPhoto from "../assets/sagar.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const phrases = ["Tech passionate", "Web developer", "Software engineer"];

  const TYPING_SPEED = 100;       
  const DELETING_SPEED = 45;     
  const PAUSE_AFTER_TYPE = 350;  

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0); 
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);

  useEffect(() => {
    let timeoutId = null;
    const currentPhrase = phrases[phraseIndex];
    const atFull = subIndex === currentPhrase.length;
    const atEmpty = subIndex === 0;

    if (!isDeleting && !atFull) {
      // Typing characters
      timeoutId = setTimeout(() => setSubIndex((s) => s + 1), TYPING_SPEED);
    } else if (!isDeleting && atFull) {
      // Finished typing -> short pause, then start deleting
      timeoutId = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
    } else if (isDeleting && !atEmpty) {
      timeoutId = setTimeout(() => setSubIndex((s) => s - 1), DELETING_SPEED);
    } else if (isDeleting && atEmpty) {
      // Finished deleting -> move to next phrase quickly
      timeoutId = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((i) => (i + 1) % phrases.length);
      }, 0);
    }

    return () => clearTimeout(timeoutId);
  }, [subIndex, isDeleting, phraseIndex, phrases]);

  const currentText = phrases[phraseIndex].substring(0, subIndex);

  return (
    <section
      id="home"
      className="vh-100 d-flex flex-column justify-content-center align-items-center bg-light text-center position-relative"
    >
      <img
        src={sagarPhoto}
        alt="Sagar H N"
        className="home-photo mb-4 rounded-circle shadow"
        style={{ width: "100px", height: "100px" }}
        data-aos="fade-up"
      />

      <h1 className="home-greeting mb-3" data-aos="fade-up">
        Hi There, it's me <br />
        <span className="text-primary">
          <strong>Sagar</strong>
        </span>
      </h1>

      <h2 className="home-typing mb-0" data-aos="fade-up">
        <span>I'm a </span>
        <span className="text-secondary" style={{ textShadow: "2px 2px 4px" }}>
          {currentText}
        </span>
        <span className="cursor">|</span>
      </h2>

      <h4 style={{ marginTop: "100px" }} data-aos="fade-up">
        Collaborate
      </h4>

      <div className="d-flex gap-3 mt-2 mb-0" data-aos="fade-up">
        <a
          href="https://www.linkedin.com/in/sagar-h-n-34a08a259/"
          target="_blank"
          rel="noreferrer"
          className="btn"
          style={{
            backgroundColor: "#0A66C2",
            color: "white",
            width: "100px",
            borderRadius: "25px",
          }}
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/SAGAR12-art"
          target="_blank"
          rel="noreferrer"
          className="btn"
          style={{
            backgroundColor: "#333333",
            color: "white",
            width: "100px",
            borderRadius: "25px",
          }}
        >
          GitHub
        </a>
        <a
          href="https://leetcode.com/u/sagar0831/"
          target="_blank"
          rel="noreferrer"
          className="btn"
          style={{
            backgroundColor: "#FCA121",
            color: "white",
            width: "100px",
            borderRadius: "25px",
          }}
        >
          LeetCode
        </a>
      </div>
    </section>
  );
};

export default Home;
