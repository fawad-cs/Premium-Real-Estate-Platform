import { useState } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle } from "lucide-react";

import "./Newsletter.css";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!email.trim()) return;

    setSubscribed(true);
    setEmail("");
  }

  return (
    <section className="newsletter">
      <motion.div
        className="newsletter-container"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="newsletter-content">
          <span>STAY CONNECTED WITH ESTORA</span>
          <h2>
            Get The Latest
            <br />
            <strong>Property Updates.</strong>
          </h2>
          <p>
            Subscribe to receive exclusive property listings,
            market insights and real estate updates.
          </p>
        </div>

        <form className="newsletter-form" onSubmit={handleSubmit}>
          <div className="newsletter-input">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button type="submit" aria-label="Subscribe">
              Subscribe
              <Send size={17} />
            </button>
          </div>

          {subscribed ? (
            <p className="newsletter-success">
              <CheckCircle size={16} />
              Thanks for subscribing!
            </p>
          ) : (
            <small>
              By subscribing, you agree to receive our updates.
            </small>
          )}
        </form>
      </motion.div>
    </section>
  );
}

export default Newsletter;