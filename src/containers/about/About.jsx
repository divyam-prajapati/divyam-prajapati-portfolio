import React from "react";
import "./about.css";
import divyam from "../../assets/d.png";

const About = () => {
  return (
    <div className="portfolio__about section__padding" id="about">
      <div className="portfolio__about-content">
        <h1 className="gradient__text">About Me</h1>
        <div className="portfolio__about-content-container">
          <div className="portfolio__about-content-body">
            <p>
              Budding Programmer age 21, living in Mumbai. Pursuing graduation
              in Computer Engineering from{" "}
              <a href="https://kjsieit.somaiya.edu.in/en">
                K. J. Somaiya Institute of Engineering and I.T.
              </a>{" "}
              Keen in designing/developing stunning modern websites, mobile &
              web apps. Programming is not just my job but its my Passion. Some
              of my Hobbies are Listning Music, Traveling, Photography and
              Cooking. I am more of a CHAI lover than COFFEE.
            </p>
            <a
              href="https://drive.google.com/file/d/1MruhQs1-wiIrQpYhbFmoin4Jn7YJfy0o/view?usp=sharing"
              className="button"
              target="__blank"
            >
              Curriculum Vitae
            </a>
          </div>
          <div className="portfolio__about-content-img">
            <img src={divyam} alt="Divyam" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
