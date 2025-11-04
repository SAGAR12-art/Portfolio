import React from "react";

const projects = [
  {
    name: "Quiz Competition App",
    techStack: ["React", "HTML", "CSS", "Bootstrap"],
    description:
      "This Quiz Application is a responsive web-based quiz platform built with HTML, CSS, Bootstrap, and SweetAlert2. Users select a topic—HTML, CSS, Bootstrap, or JavaScript—and answer a series of carefully curated quiz questions, each with multiple choice options. The application dynamically displays questions and captures user choices, offering immediate feedback using SweetAlert popups for both correct and incorrect answers, as well as for validation prompts such as topic selection and unanswered questions. The quiz flow includes topic selection, answer submission, and navigational features, with a summary alert displayed upon completion. The use of SweetAlert2 enhances the user experience by delivering visually appealing, interactive notifications throughout the quiz process. Overall, the app provides a robust, user-friendly way to test and improve web development knowledge interactively.",
  },
  {
    name: "BMI Calculator",
    techStack: ["React", "HTML", "CSS","Bootstrap","Javascript"],
    description:
      "This BMI Calculator project provides users with a simple and intuitive interface to calculate Body Mass Index using their weight and height values. Built with React and custom CSS, the calculator delivers a modern, fully responsive design with clear input fields and instant result feedback. The solution leverages SweetAlert to present user-friendly warning popups whenever required data is missing or invalid, improving input validation and ensuring a smooth user experience. In addition to computing BMI and indicating the standard health category (Underweight, Normal, Overweight, Obese), the app emphasizes accessibility and usability across devices through its clean layout and informative error handling.",
    vercel: "https://bmi-calculator-six-indol.vercel.app/",
    gitHub:"https://github.com/SAGAR12-art/BMICalculator",
  },
  {
    name: "Resume Generator",
    techStack: ["React", "HTML", "JSON","CSS","JavaScript","Bootstrap"],
    description:
      "This Resume Generator project is a user-friendly web application that enables users to create a personalized, professional resume with ease. Leveraging HTML, Bootstrap, and custom JavaScript, the app presents a clean and organized form for collecting essential information such as personal details, objective, skills, academic background, work experience, achievements, and project highlights. Upon submission, the user's inputs are immediately displayed in a styled, print-ready resume preview, offering instant feedback and the option to print the result directly. The project emphasizes a seamless experience for users who wish to quickly generate and visualize a well-structured resume without needing to manually format documents, making it particularly helpful for students and job seekers",
  },
];

const Projects = () => {
  return (
    <section id="projects" data-aos="fade-up" className="py-5 bg-light" style={{margin:"20px"}}>
      <h2 className="mb-4" style={{ textAlign: "center" }}>Projects</h2>
      <div className="container">
        <div className="row">
          {projects.map((project, idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h4 className="card-title">{project.name}</h4>
                  <p>
                    <strong>Tech Stack:</strong> {project.techStack.join(", ")}
                  </p>
                  <p className="card-text" style={{textAlign:"justify"}}>{project.description}</p>
                  {project.vercel && (
                    <a
                      href={project.vercel}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{marginRight:"20px"}}
                    >
                      View Live
                    </a>
                  )}
                  {project.gitHub && (
                    <a href={project.gitHub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      View Repo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
