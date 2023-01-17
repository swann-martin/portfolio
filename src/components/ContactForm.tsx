import { useState } from 'react';
import { useForm } from '../utils/Hooks';

const ContactForm = () => {
  const userIdKey = import.meta.env.VITE_APP_EMAILJS_KEY;
  const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
  const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSent, setIsSent] = useState<boolean>(false);

  const informUser = {
    send: 'Sent',
    sending: 'Sending ...',
    isSent: 'Sent',
    errorEmail: 'You have entered an invalid email address!',
    success: 'Success',
    thanks: 'Thank you for your message !',
  };

  const initialState = {
    user_name: '',
    user_email: '',
    message: '',
  };

  const validateEmail = (email: string) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.trim())) {
      return true;
    }
    return false;
  };

  const sendEmail = async () => {
    try {
      setIsLoading(true);
      Object.values(values).forEach((value) => {
        value = value.trim();
      });

      const url = 'https://api.emailjs.com/api/v1.0/email/send';

      const data = {
        service_id: serviceId,
        template_id: templateId,
        user_id: userIdKey,
        template_params: values,
      };

      fetch(url, {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((res) => {
        if (res?.ok) {
          alert(`Your message was sent!`);
          setIsSent(true);
          setIsLoading(false);
          return true;
        } else {
          alert(res?.statusText);
          return false;
        }
      });
    } catch (error) {
      return false;
    }
  };

  const { onChange, onSubmit, values } = useForm(sendEmail, initialState);

  return !!isSent ? (
    <div>{informUser.thanks}</div>
  ) : (
    <form
      className="form"
      onSubmit={(e) => {
        !!values?.user_email
          ? validateEmail(values?.user_email) && onSubmit(e)
          : alert(informUser.errorEmail);
      }}
    >
      <div className="form-line">
        <label>Your Name</label>
        <input
          type="text"
          id="name"
          placeholder="Your Name"
          name="user_name"
          onChange={onChange}
          required
        />
      </div>
      <div className="form-line">
        <label>Your Email</label>
        <input
          type="email"
          placeholder="Your Email"
          id="email"
          name="user_email"
          onChange={onChange}
          required
        />
      </div>
      <div className="form-line">
        <label>Your Message</label>
        <textarea
          name="message"
          id="message"
          rows={4}
          onChange={onChange}
          placeholder="Your message"
          required
        />
      </div>
      {isLoading === false ? (
        <div className="form-btn">
          <i className="fa-regular fa-paper-plane"></i>
          <input type="submit" value="Send" />
        </div>
      ) : (
        <div className="form-btn">
          {isLoading ? (
            <>
              <i className="fa-solid fa-check"></i>
              <span>{informUser.send}</span>
            </>
          ) : isSent ? (
            <span>{informUser.send}</span>
          ) : (
            <span>{informUser.sending}</span>
          )}
        </div>
      )}
    </form>
  );
};

export default ContactForm;
