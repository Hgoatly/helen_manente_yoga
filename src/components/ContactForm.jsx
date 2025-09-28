import React from 'react';
import './ContactForm.css';
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const data = new FormData(form);

    try {
      await fetch("https://formsubmit.co/helenmanenteyoga@gmail.com", {
        method: "POST",
        body: data,
      });
      setStatus("✅ Message sent!");
      form.reset();
    } catch (err) {
      setStatus("❌ Something went wrong.");
    }
  };

    return (
      <section className="contact-page">
        <div className="container">
          <h1>Contact me</h1>
          <p>Please use this form to get in touch if you would like to connect or collaborate and I'll get back to you as quickly as possible. If you'd like to attend a class, have an idea for an event, or any other yoga-related query, I'm here to help!
</p>
          <form
            target="_blank"
            action="https://formsubmit.co/45ea9e2cad8fe549833beb33a1acad74"
            method="POST"
          >
            <div className="form-group">
              <div className="form-row">
                <div className="col">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email Address"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <textarea
                placeholder="Your Message"
                className="form-control"
                name="message"
                rows="10"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-lg btn-block">
              Submit Form
            </button>
          </form>
        </div>
        </section>
      );
}

