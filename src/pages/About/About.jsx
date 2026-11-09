import { motion } from "motion/react";
import {
  ArrowUpRight,
  Award,
  ShieldCheck,
  Users,
  Building2,
} from "lucide-react";
import "./About.css";

const values = [
  {
    icon: <ShieldCheck size={25} />,
    title: "Trust & Transparency",
    description:
      "We believe every property journey should be clear, honest and stress-free.",
  },
  {
    icon: <Award size={25} />,
    title: "Excellence",
    description:
      "We focus on quality, attention to detail and exceptional service.",
  },
  {
    icon: <Users size={25} />,
    title: "Client First",
    description:
      "Your goals and needs remain at the center of everything we do.",
  },
];

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-overlay"></div>

        <motion.div
          className="about-hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span>WHO WE ARE</span>
          <h1>
            Redefining The
            <br />
            Art Of <em>Living.</em>
          </h1>
          <p>
            We connect people with exceptional places and turn property
            dreams into meaningful realities.
          </p>
        </motion.div>
      </section>

      <section className="about-story">
        <motion.div
          className="about-story-image"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000"
            alt="Modern luxury home"
          />
          <div className="about-image-label">
            <Building2 size={22} />
            <span>Spaces With Purpose</span>
          </div>
        </motion.div>

        <motion.div
          className="about-story-content"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="about-eyebrow">OUR STORY</span>
          <h2>
            More Than Property.
            <br />
            <em>A Better Way To Live.</em>
          </h2>
          <p>
            ESTORA was built around a simple idea: finding the right property
            should feel exciting, not complicated.
          </p>
          <p>
            We bring together carefully selected properties, thoughtful
            guidance and a modern experience to help every client make
            confident decisions.
          </p>

          <a href="/properties" className="about-story-link">
            Explore Properties <ArrowUpRight size={19} />
          </a>
        </motion.div>
      </section>

      <section className="about-values">
        <div className="about-section-heading">
          <span className="about-eyebrow">WHAT DRIVES US</span>
          <h2>Our Core Values</h2>
          <p>The principles behind every relationship and every decision.</p>
        </div>

        <div className="about-values-grid">
          {values.map((value, index) => (
            <motion.div
              className="about-value-card"
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="about-value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;