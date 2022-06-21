import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div id="contact" className="contact">
      <h1 className="title roboto">Contact Us</h1>
      <p className="roboto">
        Fill up the form below & our team will get back soon.
      </p>
      <form action="#">
        <div className="input-row">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
        </div>
        <textarea placeholder="Your Message"></textarea>
        <p className="note roboto">
          By submitting this form you agree to our terms and conditions and our
          Privacy policy.
        </p>
        <button className="submit-form">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
