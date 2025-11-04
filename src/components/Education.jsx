// Education.jsx
import React from "react";

const Education = () => {
  return (
    <section id="education" className="py-5 bg-light" style={{marginTop:"-200px",marginBottom:"150px"}}>
      <h2 className="mb-4" data-aos="fade-up" style={{textAlign:"center"}}>
          Education
        </h2>
      <div className="container position-relative">
        

        {/* Vertical Line (visible on md and larger screens) */}
        <div className="timeline-line d-none d-md-block" />

        {/* Item 1 */}
        <div className="education-item row align-items-center mb-5">
          <div className="col-md-5 text-end" data-aos="fade-right">
            <h5><strong>2019</strong></h5>
            <p><strong>Secondary Education</strong></p>
          </div>

          <div className="col-md-2 text-center position-relative">
            {/* dot is absolutely positioned relative to the .education-item row */}
            <span className="dot" />
          </div>

          <div className="col-md-5 text-start" data-aos="fade-left">
            <p>MDRS, Baraguru</p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="education-item row align-items-center mb-5">
          <div className="col-md-5 text-end" data-aos="fade-right">
            <h5><strong>2019–2021</strong></h5>
            <p><strong>Pre-University Education</strong></p>
          </div>

          <div className="col-md-2 text-center position-relative">
            <span className="dot" />
          </div>

          <div className="col-md-5 text-start" data-aos="fade-left">
            <p>BGS PU College, Arkalgud</p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="education-item row align-items-center mb-5">
          <div className="col-md-5 text-end" data-aos="fade-right">
            <h5><strong>2021–2025</strong></h5>
            <p>
              <strong>
                Bachelor of Engineering <br />
                (Electronics and Communication Engineering)
              </strong>
            </p>
          </div>

          <div className="col-md-2 text-center position-relative">
            <span className="dot" />
          </div>

          <div className="col-md-5 text-start" data-aos="fade-left">
            <p>PES College Of Engineering, Mandya</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
