import data from "./data";
import "./contact.css";
import Card from "../../components/Card";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <p>Shoot me a message via any of the links below!</p>
      <div className="container contact__container" data-aos="fade-up">
        {data.map((item) => (
          <a href={item.desc} className="btn primary">
            {item.icon}
            {item.title}
          </a>
        ))}
      </div>
      {/* </div> */}
    </section>
  );
};

export default Contact;
