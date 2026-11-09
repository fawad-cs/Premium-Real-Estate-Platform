import { motion } from "motion/react";
import {
  ArrowUpRight,
  Search,
  MapPin,
  ChevronDown,
} from "lucide-react";

import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-background"></div>
      <div className="hero-overlay"></div>

      <div className="hero-container">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <span className="hero-tag">
            <span></span>
            FIND YOUR PLACE IN THE WORLD
          </span>

          <h1>
            FIND A PLACE
            <br />
            <span>YOU'LL LOVE</span>
            <br />
            TO CALL HOME.
          </h1>

          <p>
            Discover exceptional properties, explore beautiful
            spaces and find the home that tells your story.
          </p>

          <div className="hero-actions">
            <a href="/properties" className="hero-primary">
              Explore Properties
              <ArrowUpRight size={19} />
            </a>

            <a href="/about" className="hero-secondary">
              Discover Estora
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-search"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <div className="search-field">
            <MapPin size={20} />
            <div>
              <span>LOCATION</span>
              <strong>Where do you want to live?</strong>
            </div>
          </div>

          <div className="search-divider"></div>

          <div className="search-field">
            <div>
              <span>PROPERTY TYPE</span>
              <strong>Any Property <ChevronDown size={15} /></strong>
            </div>
          </div>

          <div className="search-divider"></div>

          <div className="search-field">
            <div>
              <span>PRICE RANGE</span>
              <strong>Any Price <ChevronDown size={15} /></strong>
            </div>
          </div>

          <button className="search-button" aria-label="Search properties">
            <Search size={21} />
          </button>
        </motion.div>

      </div>

      <div className="hero-bottom">
        <span>01 — DISCOVER</span>
        <span>EXCEPTIONAL LIVING STARTS HERE</span>
      </div>

    </section>
  );
}

export default Hero;