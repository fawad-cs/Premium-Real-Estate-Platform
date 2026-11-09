import { motion } from "motion/react";
import { ArrowUpRight, MoveRight } from "lucide-react";

import "./CTA.css";

function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <span className="cta-label">YOUR NEXT CHAPTER STARTS HERE</span>

          <h2>
            Ready to Find Your
            <br />
            <span>Dream Property?</span>
          </h2>

          <p>
            Let our experienced team help you discover a place
            that perfectly matches your lifestyle and ambitions.
          </p>

          <div className="cta-actions">
            <a href="/contact" className="cta-primary">
              Get In Touch
              <ArrowUpRight size={19} />
            </a>

            <a href="/properties" className="cta-secondary">
              Explore Properties
              <MoveRight size={19} />
            </a>
          </div>
        </motion.div>

        <div className="cta-decoration">
          <span className="cta-circle circle-one"></span>
          <span className="cta-circle circle-two"></span>
          <span className="cta-circle circle-three"></span>
          <span className="cta-decoration-text">ESTORA</span>
        </div>
      </div>
    </section>
  );
}

export default CTA;