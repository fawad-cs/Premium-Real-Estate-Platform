import { motion } from "motion/react";
import {
  ShieldCheck,
  BadgeCheck,
  Headset,
  Gem,
  ArrowUpRight,
} from "lucide-react";

import "./WhyChooseUs.css";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Properties",
    description:
      "Every property is carefully reviewed to provide a reliable experience.",
  },
  {
    icon: BadgeCheck,
    title: "Expert Guidance",
    description:
      "Our experienced team helps you make confident property decisions.",
  },
  {
    icon: Gem,
    title: "Premium Selection",
    description:
      "Explore exceptional homes selected for quality and lifestyle.",
  },
  {
    icon: Headset,
    title: "Dedicated Support",
    description:
      "Get assistance throughout your property journey.",
  },
];

function WhyChooseUs() {
  return (
    <section className="why-choose">
      <div className="why-container">

        <motion.div
          className="why-image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <img
            src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=85"
            alt="Luxury modern home"
          />

          <div className="experience-box">
            <strong>15+</strong>
            <span>YEARS OF EXCELLENCE</span>
          </div>
        </motion.div>

        <motion.div
          className="why-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <span className="section-label">
            WHY CHOOSE ESTORA
          </span>

          <h2>
            More Than Properties,
            <span> We Build Trust.</span>
          </h2>

          <p className="why-description">
            Finding the right property is more than a transaction.
            It's about discovering a place where your future begins.
            We make every step simple, transparent and rewarding.
          </p>

          <div className="why-features">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div className="why-feature" key={index}>
                  <div className="why-feature-icon">
                    <Icon size={23} />
                  </div>

                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <a href="/about" className="why-button">
            Learn More About Us
            <ArrowUpRight size={18} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default WhyChooseUs;