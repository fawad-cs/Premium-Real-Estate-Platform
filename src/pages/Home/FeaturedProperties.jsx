import { motion } from "motion/react";
import { ArrowUpRight, MapPin, BedDouble, Bath, Maximize } from "lucide-react";

import "./FeaturedProperties.css";

const properties = [
  {
    id: 1,
    name: "The Modern Residence",
    location: "Beverly Hills, California",
    price: "$1,250,000",
    beds: 4,
    baths: 3,
    area: "2,450",
    type: "FOR SALE",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 2,
    name: "Villa Serenity",
    location: "Palm Jumeirah, Dubai",
    price: "$850,000",
    beds: 3,
    baths: 2,
    area: "1,850",
    type: "FOR SALE",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 3,
    name: "The Grand Estate",
    location: "Miami, Florida",
    price: "$4,500 / month",
    beds: 5,
    baths: 4,
    area: "3,200",
    type: "FOR RENT",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
  },
];

function FeaturedProperties() {
  return (
    <section className="featured-properties">
      <div className="featured-container">

        <motion.div
          className="featured-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div>
            <span className="section-label">CURATED FOR YOU</span>
            <h2>
              Discover Our <span>Featured</span>
              <br /> Properties
            </h2>
          </div>

          <a href="/properties" className="view-all">
            View All Properties
            <ArrowUpRight size={18} />
          </a>
        </motion.div>

        <div className="properties-grid">
          {properties.map((property, index) => (
            <motion.article
              className="property-card"
              key={property.id}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="property-image">
                <img src={property.image} alt={property.name} />

                <span className="property-type">
                  {property.type}
                </span>
              </div>

              <div className="property-info">
                <span className="property-location">
                  <MapPin size={15} />
                  {property.location}
                </span>

                <h3>{property.name}</h3>

                <div className="property-features">
                  <span><BedDouble size={17} /> {property.beds} Beds</span>
                  <span><Bath size={17} /> {property.baths} Baths</span>
                  <span><Maximize size={17} /> {property.area} sqft</span>
                </div>

                <div className="property-bottom">
                  <div>
                    <small>PRICE</small>
                    <strong>{property.price}</strong>
                  </div>

                  <a href="/properties" aria-label={`View ${property.name}`}>
                    <ArrowUpRight size={20} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedProperties;