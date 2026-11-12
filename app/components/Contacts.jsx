
import {useState} from 'react';

export function Contacts() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.target.reset();
  }

  return (
    <section className="contact-page">
      <div className="contact-hero">
        <p className="contact-eyebrow">WE'D LOVE TO HEAR FROM YOU</p>
        <h1>Get in Touch</h1>
        <p>Have a question? We'd be happy to help.</p>
      </div>

      <div className="contact-content">
        <div className="contact-details">
          <h2>Let's talk</h2>
          <p>Our team is here to help with your orders and product enquiries.</p>

          <div className="contact-detail">
            <span>Email</span>
            <a href="mailto:hello@joonafashion.com">
              hello@joonafashion.com
            </a>
          </div>

          <div className="contact-detail">
            <span>Customer support</span>
            <p>Monday – Friday</p>
            <p>9:00 AM – 5:00 PM</p>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <h2>Send us a message</h2>

          {submitted && (
            <p className="contact-success">
              Thank you! Your message has been submitted in this demo.
            </p>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <label htmlFor="contact-name">Your name</label>
            <input id="contact-name" name="name" required placeholder="Your name" />

            <label htmlFor="contact-email">Email address</label>
            <input id="contact-email" name="email" type="email" required placeholder="Your email" />

            <label htmlFor="contact-subject">Subject</label>
            <input id="contact-subject" name="subject" required placeholder="Subject" />

            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" rows="5" required placeholder="Write your message..." />

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
