import data from "./data";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact"  style={{backgroundColor: "white"}}>
      <div className="container contact__container" data-aos="fade-up">
        {data.map((item) => (
          <div>
          <span>
            <a href={item.href}>
            {item.desc}</a>
          </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
