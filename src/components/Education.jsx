// Education.jsx
import React from "react";

const Education = () => {
  return (
    <section id="education" className="py-5 bg-light">
      <h2 className="mb-4" data-aos="fade-up" style={{ textAlign: "center" }}>
        Education
      </h2>

      <div className="container position-relative">
        {/* Vertical line (hidden automatically on small screens by CSS) */}
        <div className="timeline-line" />

        {/* Row 1 */}
        <div className="education-item">
          <div className="edu-left" data-aos="fade-right">
            <h5><strong>2019</strong></h5>
            <p><strong>Secondary Education</strong></p>
          </div>

          <div className="edu-center">
            <span className="dot" />
          </div>

          <div className="edu-right" data-aos="fade-left">
            <p>MDRS, Baraguru</p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="education-item">
          <div className="edu-left" data-aos="fade-right">
            <h5><strong>2019–2021</strong></h5>
            <p><strong>Pre-University Education</strong></p>
          </div>

          <div className="edu-center">
            <span className="dot" />
          </div>

          <div className="edu-right" data-aos="fade-left">
            <p>BGS PU College, Arkalgud</p>
          </div>
        </div>

        {/* Row 3 */}
        <div className="education-item">
          <div className="edu-left" data-aos="fade-right">
            <h5><strong>2021–2025</strong></h5>
            <p>
              <strong>
                Bachelor of Engineering <br />
                (Electronics and Communication Engineering)
              </strong>
            </p>
          </div>

          <div className="edu-center">
            <span className="dot" />
          </div>

          <div className="edu-right" data-aos="fade-left">
            <p>PES College Of Engineering, Mandya</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
