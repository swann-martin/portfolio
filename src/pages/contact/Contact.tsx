import Navigation from "../../components/Nav/Navigation";
import ContactForm from "../../components/ContactForm";

const Contact = () => {
  const title = "Contact me";
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1 className="contactBox-title">{title}</h1>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
