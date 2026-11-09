import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import properties from "../../data/properties";
import {
  MapPin,
  BedDouble,
  Bath,
  Maximize,
  CheckCircle,
  ArrowLeft,
  Phone,
  Mail,
} from "lucide-react";

import "./PropertyDetails.css";


function PropertyDetails() {
  const { id } = useParams();

  const property = properties.find(
    (item) => item.id === Number(id)
  );

  if (!property) {
    return (
      <div className="property-not-found">
        <h2>Property Not Found</h2>
        <Link to="/properties">Back to Properties</Link>
      </div>
    );
  }

  return (
    <main className="property-details">

      <div className="details-container">

        <Link to="/properties" className="details-back">
          <ArrowLeft size={17} />
          Back to Properties
        </Link>

        <motion.div
          className="details-image"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={property.image} alt={property.name} />

          <span className="details-badge">{property.type}</span>
        </motion.div>

        <div className="details-layout">

          <section className="details-main">

            <span className="details-label">PROPERTY OVERVIEW</span>

            <h1>{property.name}</h1>

            <div className="details-location">
              <MapPin size={18} />
              {property.location}
            </div>

            <div className="details-features">
              <div>
                <BedDouble size={21} />
                <strong>{property.beds}</strong>
                <span>Bedrooms</span>
              </div>

              <div>
                <Bath size={21} />
                <strong>{property.baths}</strong>
                <span>Bathrooms</span>
              </div>

              <div>
                <Maximize size={21} />
                <strong>{property.area}</strong>
                <span>Square Feet</span>
              </div>
            </div>

            <div className="details-description">
              <h2>About This Property</h2>
              <p>{property.description}</p>
            </div>

            <div className="details-amenities">
              <h2>Property Features</h2>

              <div className="amenities-grid">
                {property.features.map((feature) => (
                  <div key={feature}>
                    <CheckCircle size={18} />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

          </section>

          <aside className="details-sidebar">

            <div className="details-price-card">
              <span>PROPERTY PRICE</span>
              <h2>{property.price}</h2>

              <hr />

              <h3>Interested in this property?</h3>

              <p>
                Contact our team to get more information
                and arrange a property viewing.
              </p>

              <Link to="/contact" className="details-contact-btn">
                <Phone size={17} />
                Contact Agent
              </Link>

              <a
                href="mailto:hello@estora.com"
                className="details-email-btn"
              >
                <Mail size={17} />
                Send Email
              </a>
            </div>

          </aside>

        </div>

      </div>

    </main>
  );
}

export default PropertyDetails;