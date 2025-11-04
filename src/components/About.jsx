// About.jsx
import React from "react";

const About = ({ style = {}, className = "", ...rest }) => {
  // default: no bottom margin, but allow overrides via the `style` prop
  const combinedStyle = { marginBottom: 0, ...style };

  return (
    <section
      id="aboutme"
      className={`py-5 ${className}`}
      style={combinedStyle}
      {...rest}
    >
      <div
        className="container"
        style={{
          borderColor: "black",
          boxShadow: "10px 10px 15px grey",
          borderRadius: "25px",
          padding: "15px",
        }}
      >
        <h2 className="mb-4" data-aos="fade-up">
          About Me
        </h2>
        <p data-aos="fade-up">
          I am a detail-oriented and enthusiastic software engineer with hands-on
          experience in full-stack development using Django, Python, and SQL. I
          have worked on building scalable and secure web applications,
          handling both frontend and backend tasks efficiently. Through my
          internship, I gained practical exposure to real-world development
          environments and contributed to delivering production-ready software
          solutions. I follow Agile methodologies and adhere to software
          development life cycle (SDLC) practices to ensure timely and quality
          outcomes. I am also comfortable working with RESTful APIs and
          relational databases. Collaboration is one of my strengths, and I
          thrive in team environments that encourage continuous learning and
          innovation. I’m a fast learner, quick to adapt to new technologies
          and tools. My passion lies in solving real-world problems with clean,
          maintainable code and delivering impactful digital solutions. I enjoy
          taking ownership of tasks and seeing them through to completion while
          being open to feedback and new challenges. Currently, I’m exploring
          cloud technologies and DevOps to further broaden my skill set. My
          ultimate goal is to contribute to building meaningful and efficient
          software systems that create real value.
        </p>
      </div>
    </section>
  );
};

export default About;
