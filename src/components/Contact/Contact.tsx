import React, { FC, useState } from 'react';
import styles from './Contact.module.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const sendEmail:React.FormEventHandler<HTMLFormElement> = (e: any) => {
    e.preventDefault();
  
    const submitMessage = {
      name:name,
      email:email,
      message:message
    }

    emailjs.send(
      "service_g7x9ml8",
      "template_33va8qb",
      submitMessage,
      "ArzRLyWl61Nihhzn7"
    ).then(
      result => console.log(result.text),
      error => console.log(error.text)
    );
  }

  return(
    <div className={styles.Contact} data-testid="Contact">
    <h1>Contact</h1>
    <p>Send me a message here and i will get back to you as soon as possible !</p>
    <form onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" value={name} onChange={(event) => setName(event.target.value)} required/>
      <label>Email</label>
      <input type="email" name="user_email" value={email} onChange={(event) => setEmail(event.target.value)} required/>
      <label>Message</label>
      <textarea name="message" value={message} onChange={(event) => setMessage(event.target.value)} required/>
      <input type="submit" value="Send"/>
    </form>
  </div>
  );
};

export default Contact;
