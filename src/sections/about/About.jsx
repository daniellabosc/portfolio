import AboutImage from "../../assets/about.jpg";
import CV from "../../assets/cv.pdf";
import { HiDownload } from "react-icons/hi";
import data from "./data";
import Card from "../../components/Card";
import "./about.css";

const About = () => {
  return (
    <section id="home" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About" />
          </div>
        </div>
        <div className="about__right">
          <h5>Malgorzata Phillips - Frontend/Web Developer</h5>
          <br />

          <p>
            I have extensive experience in software development, where I have
            held both frontend and full stack roles, particularly those working
            with frontend frameworks/libraries such as React, Angular, and Vue.
            And backend languages/platforms like Node and AWS.
            <br />
            <br />I enjoy collaboration and always strive to create a great
            product that follows the best practices of the software industry. I
            am seeking a role that is creative, innovative, and most
            importantly, engaging.
            <br />
            <br />I am a US citizen and currently reside in Phoenix, AZ.
            <br />
            <br />
            margaretphillips003@gmail.com
          </p>
          <a href={CV} download className="btn primary">
            Download Resume <HiDownload />
          </a>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
