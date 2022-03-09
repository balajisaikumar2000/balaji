import React from "react";
import emailjs from "emailjs-com";
import "./contact.scss";
import { useState, useRef } from "react";

const USER_ID = "VY1JjGPA9SFxVY7PZ";
const SERVICE_ID = "service_5glw35r";
const TEMPLATE_ID = "template_piu9e2u";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const nameRef = useRef("");
  const mailRef = useRef("");
  const msgRef = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID);
    setMessage(true);
    nameRef.current.value = "";
    mailRef.current.value = "";
    msgRef.current.value = "";
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="name"
            placeholder="Name"
            name="from_name"
            ref={nameRef}
          />
          <input
            type="email"
            placeholder="Email"
            ref={mailRef}
            name="from_email"
            required
          />
          <textarea
            placeholder="Message"
            ref={msgRef}
            name="message"
          ></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks,I'll Reply ASAP</span>}
        </form>
      </div>
    </div>
  );
}
