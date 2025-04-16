import React from "react";

const Contact = () => {
  return (
    <>
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Let's Talk</h3>
              <p>Ready to start your digital journey? Contact us today!</p>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
