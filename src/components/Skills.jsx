import React from "react";

const Skills = () => {
  return (
    <section className="p-5 bg-light" data-aos="fade-up">
      <h2 className="mb-4" id="skills" data-aos="fade-up" style={{textAlign:"center"}}>
          Skills
      </h2>
        <div style={{display: "flex",flexWrap: "wrap",justifyContent: "center",gap: "180px",}}>
          <a href="https://www.w3schools.com/html/" target="_blank" style={{color: "black"}}>
              <img data-aos="fade-up" src="https://tse1.mm.bing.net/th/id/OIP.wVbymUSb5UJZIqR3b64fAQHaHa?pid=Api&P=0&h=180" alt="HTML" style={{ width: "100px", height: "100px",margin:"10px" }}/>
          </a>
          <a href="https://www.w3schools.com/Css/" class="skill-icon-wrapper" target="_blank" style={{color: "black"}}>
            <img data-aos="fade-up" src="https://tse1.mm.bing.net/th/id/OIP.fBJ2R5Y0m_tQXUxdc0icPQHaKd?pid=Api&P=0&h=180" alt="CSS" style={{ width: "100px", height: "100px",margin:"10px" }}/>
          </a>
          <a href="https://getbootstrap.com/docs/5.0/about/brand/"  target="_blank" style={{color: "black"}}>
            <img data-aos="fade-up" src="https://tse4.mm.bing.net/th/id/OIP.D1gvhsEUvjffVQ6sh793PQHaF5?pid=Api&P=0&h=180" alt="Bootstrap" style={{ width: "100px", height: "100px",margin:"10px" }}/>
          </a>
          <a href="https://www.mysql.com/" target="_blank" style={{color: "black"}}>
            <img data-aos="fade-up" src="https://tse4.mm.bing.net/th/id/OIP.JVt34lGxmm0GAGNNL_mwBgHaHa?pid=Api&P=0&h=180" alt="MySQL" style={{ width: "100px", height: "100px",margin:"10px" }}/>
          </a>
          <a href="https://jquery.com/" target="_blank" style={{color: "black"}}>
            <img data-aos="fade-up" src="https://tse2.mm.bing.net/th/id/OIP.ui9TDLmEivc1papncsuA6QHaGQ?pid=Api&P=0&h=180" alt="jQuery" style={{ width: "100px", height: "100px",margin:"10px" }}/>
          </a>
          <a href="https://www.java.com/" target="_blank" style={{color: "black"}}>
            <img data-aos="fade-up" src="https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.jpg" alt="JAVA" style={{ width: "100px", height: "100px",margin:"10px" }}/>
          </a>
          <a href="https://www.w3schools.com/react/" target="_blank" style={{color: "black"}}>
            <img data-aos="fade-up" src="https://tse1.mm.bing.net/th/id/OIP.K-4RqDC6zFrpAG31ayDDOgHaHa?pid=Api&P=0&h=180" alt="JAVA" style={{ width: "100px", height: "100px",margin:"10px" }}/>
          </a>
          <a href="https://www.w3schools.com/python/" target="_blank" style={{color: "black"}}>
            <img data-aos="fade-up" src="https://static.vecteezy.com/system/resources/previews/012/697/295/non_2x/3d-python-programming-language-logo-free-png.png" alt="JAVA" style={{ width: "100px", height: "100px",margin:"10px" }}/>
          </a>
          <a href="https://www.w3schools.com/django/index.php" target="_blank" rel="noopener noreferrer" style={{color: "black"}}>
              <img data-aos="fade-up" src="https://tse3.mm.bing.net/th/id/OIP.1LQLMCHf22t-MdK7op_rLgHaEo?pid=Api&P=0&h=180" alt="Django" style={{ width: "100px", height: "100px",margin:"10px" }} />
          </a>
        </div>

    </section>
  );
};

export default Skills;
