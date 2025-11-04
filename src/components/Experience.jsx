import React from "react";

const Experience = () => {
  return (
    <section id="experience" data-aos="fade-up" style={{margin:"20px"}} className="py-5 bg-light">
      <h2 className="mb-4" style={{ textAlign: "center" }}>
        Experience
      </h2>
      <div className="container">
        {/* Company Experience */}
        <div className="experience-item mb-5">
            <h3>Internship : Tally Sollutions
                <a href="https://tallysolutions.com/" target="_blank" style={{color:"black"}}>
                    <img src="https://tallysolutions.com/wp-content/uploads/2020/05/Website-min.jpg" alt="Tally Solutions" style={{width:"100px",height:"100px",margin:"20px"}}/>
                </a>
            </h3>
          <p><strong>Duration:</strong> Feb 2025 - May 2025</p>
          <p className="justified-text">
            Built a fully responsive GST portal interface, ensuring seamless access and usability 
            across desktops, tablets, and mobile devices. Implemented OTP-based secure user authentication
             with random TRN generation and validation to guarantee transaction integrity. Contributed to 
             the complete software development lifecycle including design, development, testing, and 
             documentation phases. Enhanced AJAX-driven dynamic form filling with real-time data 
             validation against server-returned datasets to enforce GST compliance and prevent input 
             errors. Applied structured software engineering practices to ensure data integrity and program 
             consistency across modules. Utilized a technology stack comprising HTML, CSS, jQuery, and Bootstrap 
             to deliver an optimized and accessible user experience.
          </p>
        </div>

        {/* Internship Certification Letter */}
        <div className="certification">
          <h4>Internship Certification</h4>
          <a
            href="/Internship_certificate.pdf"
            download="Internship_Certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/internship_certificate_preview.png"
              alt="Internship Certification Letter"
              style={{ width: "300px", cursor: "pointer" }}
            />
          </a>
          <p>Click the certificate to download.</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
