import {
  Home,
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import "./Footer.css";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Properties", path: "/properties" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const services = [
  "Buy Property",
  "Rent Property",
  "Sell Property",
  "Property Consultation",
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-main">
          <div className="footer-brand">
            <a href="/" className="footer-logo">
              <span><Home size={21} /></span>
              ESTORA<span className="footer-dot">.</span>
            </a>

            <p>
              Discover exceptional properties and experience
              a smarter, more personal way to find your place
              in the world.
            </p>

            <div className="footer-socials">
  <a href="https://facebook.com" aria-label="Facebook">f</a>

  <a href="https://instagram.com" aria-label="Instagram">ig</a>

  <a href="https://linkedin.com" aria-label="LinkedIn">in</a>

  <a href="https://twitter.com" aria-label="Twitter">𝕏</a>
</div>
          </div>

          <div className="footer-column">
            <h3>QUICK LINKS</h3>
            {quickLinks.map((link) => (
              <a key={link.name} href={link.path}>
                {link.name}
                <ArrowUpRight size={13} />
              </a>
            ))}
          </div>

          <div className="footer-column">
            <h3>OUR SERVICES</h3>
            {services.map((service) => (
              <a href="/properties" key={service}>
                {service}
                <ArrowUpRight size={13} />
              </a>
            ))}
          </div>

          <div className="footer-column footer-contact">
            <h3>GET IN TOUCH</h3>

            <p>
              <MapPin size={17} />
              Lahore, Pakistan
            </p>

            <p>
              <Phone size={17} />
              +92 328 4779126
            </p>

            <p>
              <Mail size={17} />
              fawad@estora.com
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} ESTORA. All rights reserved.</p>

          <div>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms & Conditions</a>
          </div>

          <span>CRAFTED FOR BETTER LIVING.</span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;