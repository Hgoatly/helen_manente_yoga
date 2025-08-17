import React from 'react';
import './ContactForm.css';

function ContactForm() {
    return (
      <section className="contact-page">
        <div className="container">
          <h1>Contact me</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <form
            target="_blank"
            action="https://formsubmit.co/helenmanenteyoga@gmail.com"
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

export default ContactForm;