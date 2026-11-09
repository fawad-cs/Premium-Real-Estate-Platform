import { useState } from "react";
import { motion } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your message has been submitted.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: <MapPin />,
      title: "Our Office",
      detail: "Lahore, Pakistan",
    },
    {
      icon: <Phone />,
      title: "Phone Number",
      detail: "+92 328 4779126",
    },
    {
      icon: <Mail />,
      title: "Email Address",
      detail: "fawad@estora.com",
    },
    {
      icon: <Clock />,
      title: "Working Hours",
      detail: "Monday - Saturday, 9 AM - 6 PM",
    },
  ];

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span>GET IN TOUCH</span>
          <h1>
            Let's Start A <em>Conversation.</em>
          </h1>
          <p>
            Have a question about a property? Our team is ready to help you
            find your perfect place.
          </p>
        </motion.div>
      </section>

      <section className="contact-section">
        <div className="contact-info">
          <span className="contact-eyebrow">CONTACT INFORMATION</span>
          <h2>We'd Love To Hear From You.</h2>
          <p>
            Reach out to our team. We'll get back to you as soon as possible.
          </p>

          <div className="contact-info-list">
            {contactInfo.map((item) => (
              <div className="contact-info-item" key={item.title}>
                <div className="contact-info-icon">{item.icon}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2>Send Us A Message</h2>
          <p>Fill out the form below and we'll contact you.</p>

          <div className="contact-input-row">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Write your message..."
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Send Message <Send size={17} />
          </button>

          <small>
            <CheckCircle size={14} /> We respect your privacy.
          </small>
        </motion.form>
      </section>
    </main>
  );
}

export default Contact;