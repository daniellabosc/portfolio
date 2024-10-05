import data from "./data";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container contact__container" data-aos="fade-up">
        {data.map((item) => (
          <div>
          <a href={item.desc} className="btn primary">
            {item.icon}
            {item.title}
          
          </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
