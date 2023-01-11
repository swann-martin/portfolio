import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef(null);

  const [isSent, setIsSent] = useState<boolean>(false);

  const sendEmail = (e: any) => {
    e.preventDefault();
    !!form?.current &&
      typeof form?.current !== 'string' &&
      emailjs
        .sendForm(
          // your service ID
          'service_zla5ps9',
          // your template ID
          'template_9tiguy4',
          form.current,
          process.env.REACT_APP_EMAILJS_KEY,
          // your user ID (protégé par .env)
          // process.env.REACT_APP_EMAILJS_KEY
        )
        .then(
          (result) => {
            console.log(result);
            result?.status === 200 && setIsSent(true);
          },
          (error) => {
            console.log(error.text);
          },
        );
  };

  return !!isSent ? (
    <div>Message sent !</div>
  ) : (
    <form ref={form} onSubmit={sendEmail}>
      <div>
        <label>Name</label>
        <input type="text" name="user_name" />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="user_email" />
      </div>
      <div>
        <label>Message</label>
        <textarea name="message" />
      </div>
      <input type="submit" value="Send" className="button" />
    </form>
  );
};

export default ContactForm;
