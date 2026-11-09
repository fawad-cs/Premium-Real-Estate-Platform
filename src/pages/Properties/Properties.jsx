
import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import properties from "../../data/properties";
import { useWishlist } from "../../context/WishlistContext";

import {
  Search,
  MapPin,
  BedDouble,
  Bath,
  Maximize,
  ArrowUpRight,
  Heart,
} from "lucide-react";

import "./Properties.css";

function Properties() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  const { toggleWishlist, isWishlisted } = useWishlist();

  const filteredProperties = properties.filter((property) => {
    const matchesFilter =
      activeFilter === "All" || property.type === activeFilter;

    const matchesSearch =
      property.name.toLowerCase().includes(search.toLowerCase()) ||
      property.location.toLowerCase().includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <main className="properties-page">
      <section className="properties-hero">
        <div className="properties-hero-content">
          <span>EXPLORE OUR COLLECTION</span>
          <h1>
            Find Your Perfect
            <strong> Property.</strong>
          </h1>
          <p>
            Discover exceptional properties selected for
            your lifestyle and future.
          </p>
        </div>
      </section>

      <section className="properties-listing">
        <div className="listing-container">
          <div className="listing-heading">
            <div>
              <span>OUR PROPERTY COLLECTION</span>
              <h2>Explore Properties</h2>
            </div>

            <p>{filteredProperties.length} Properties Found</p>
          </div>

          <div className="properties-toolbar">
            <div className="property-filters">
              {["All", "Buy", "Rent"].map((filter) => (
                <button
                  key={filter}
                  className={activeFilter === filter ? "selected" : ""}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter === "All" ? "All Properties" : filter}
                </button>
              ))}
            </div>

            <div className="property-search">
              <Search size={19} />
              <input
                type="text"
                placeholder="Search property or location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="listing-grid">
            {filteredProperties.map((property, index) => (
              <motion.article
                className="listing-card"
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="listing-image">
                  <img src={property.image} alt={property.name} />

                  <span>
                    {property.type === "Buy" ? "FOR SALE" : "FOR RENT"}
                  </span>

                  <button
                    className={`wishlist-btn ${
                      isWishlisted(property.id) ? "wishlisted" : ""
                    }`}
                    onClick={() => toggleWishlist(property)}
                    aria-label={
                      isWishlisted(property.id)
                        ? "Remove from wishlist"
                        : "Add to wishlist"
                    }
                  >
                    <Heart
                      size={20}
                      fill={
                        isWishlisted(property.id)
                          ? "currentColor"
                          : "none"
                      }
                    />
                  </button>
                </div>

                <div className="listing-info">
                  <div className="listing-location">
                    <MapPin size={15} />
                    {property.location}
                  </div>

                  <h3>{property.name}</h3>

                  <div className="listing-features">
                    <span>
                      <BedDouble size={16} /> {property.beds} Beds
                    </span>
                    <span>
                      <Bath size={16} /> {property.baths} Baths
                    </span>
                    <span>
                      <Maximize size={16} /> {property.area} sqft
                    </span>
                  </div>

                  <div className="listing-bottom">
                    <div>
                      <small>PRICE</small>
                      <strong>{property.price}</strong>
                    </div>

                    <Link
                      to={`/properties/${property.id}`}
                      className="listing-details-link"
                      aria-label={`View ${property.name}`}
                    >
                      <ArrowUpRight size={20} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="no-properties">
              <h3>No Properties Found</h3>
              <p>Try another search or select a different filter.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Properties;
