import AboutImage from "../../assets/about.jpg";
import data from "./data";
import Card from "../../components/Card";
import "./about.css";
import TypingEffect from "../../components/TypingEffect"

const About = () => {

 let handleClick = () =>{}
 
  return (
    <section id="home" data-aos="fade-in">
      <div className="container about__container">
          <div className="about__cards">
              <div className="card">
                 <Card onClick={handleClick} className="about__card" children={<TypingEffect data={data} />} />
              </div>
          </div>
          <div className="about__portrait">
            <img src={AboutImage} alt="About" />
          </div>
      </div>
    </section>
  );
};

export default About;
