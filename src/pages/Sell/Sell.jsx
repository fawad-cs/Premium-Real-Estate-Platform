
import { useState } from "react";
import { motion } from "motion/react";
import {
  Home,
  MapPin,
  User,
  Mail,
  Phone,
  DollarSign,
  Send,
  CheckCircle,
} from "lucide-react";
import "./Sell.css";

function Sell() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyName: "",
    location: "",
    price: "",
    type: "Villa",
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

    alert("Your property details have been submitted successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      propertyName: "",
      location: "",
      price: "",
      type: "Villa",
      message: "",
    });
  };

  return (
    <main className="sell-page">
      <section className="sell-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span>SELL WITH ESTORA</span>
          <h1>
            Your Property.
            <strong> Our Expertise.</strong>
          </h1>
          <p>
            Let our experienced team help you find the right
            buyer and make your property stand out.
          </p>
        </motion.div>
      </section>

      <section className="sell-content">
        <div className="sell-info">
          <span>START YOUR JOURNEY</span>
          <h2>Ready to Sell Your Property?</h2>
          <p>
            Share your property details with us. Our team
            will review your information and get in touch.
          </p>

          <div className="sell-benefit">
            <CheckCircle />
            <div>
              <h3>Expert Guidance</h3>
              <p>Professional support throughout the selling process.</p>
            </div>
          </div>

          <div className="sell-benefit">
            <CheckCircle />
            <div>
              <h3>Premium Exposure</h3>
              <p>Present your property to interested buyers.</p>
            </div>
          </div>

          <div className="sell-benefit">
            <CheckCircle />
            <div>
              <h3>Personal Assistance</h3>
              <p>Our team will guide you at every step.</p>
            </div>
          </div>
        </div>

        <motion.form
          className="sell-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Property Information</h2>
          <p>Fill in the details below.</p>

          <div className="sell-input-grid">
            <label>
              Your Name
              <div className="sell-input">
                <User size={18} />
                <input
                  name="name"
                  placeholder="Full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </label>

            <label>
              Email Address
              <div className="sell-input">
                <Mail size={18} />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </label>

            <label>
              Phone Number
              <div className="sell-input">
                <Phone size={18} />
                <input
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </label>

            <label>
              Property Name
              <div className="sell-input">
                <Home size={18} />
                <input
                  name="propertyName"
                  placeholder="Property name"
                  value={formData.propertyName}
                  onChange={handleChange}
                  required
                />
              </div>
            </label>

            <label>
              Property Location
              <div className="sell-input">
                <MapPin size={18} />
                <input
                  name="location"
                  placeholder="City or area"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>
            </label>

            <label>
              Expected Price
              <div className="sell-input">
                <DollarSign size={18} />
                <input
                  type="number"
                  name="price"
                  placeholder="Expected price"
                  value={formData.price}
                  onChange={handleChange}
                  min="1"
                  required
                />
              </div>
            </label>

            <label>
              Property Type
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
              >
                <option>Villa</option>
                <option>House</option>
                <option>Apartment</option>
                <option>Penthouse</option>
                <option>Commercial</option>
                <option>Land</option>
              </select>
            </label>

            <label className="sell-full-width">
              Additional Details
              <textarea
                name="message"
                placeholder="Tell us more about your property..."
                value={formData.message}
                onChange={handleChange}
                rows="4"
              />
            </label>
          </div>

          <button type="submit">
            Submit Property <Send size={17} />
          </button>
        </motion.form>
      </section>
    </main>
  );
}

export default Sell;
