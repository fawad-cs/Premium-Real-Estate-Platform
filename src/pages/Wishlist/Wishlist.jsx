
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Heart, MapPin, BedDouble, Bath, Maximize, ArrowUpRight, Trash2 } from "lucide-react";
import { useWishlist } from "../../context/WishlistContext";
import "./Wishlist.css";

function Wishlist() {
  const { wishlist, toggleWishlist } = useWishlist();

  return (
    <main className="wishlist-page">
      <section className="wishlist-hero">
        <span>YOUR PERSONAL COLLECTION</span>
        <h1>Saved <strong>Properties.</strong></h1>
        <p>Your favorite properties, all in one place.</p>
      </section>

      <section className="wishlist-content">
        <div className="wishlist-heading">
          <div>
            <span>YOUR FAVORITES</span>
            <h2>My Wishlist</h2>
          </div>
          <p>{wishlist.length} Saved Properties</p>
        </div>

        {wishlist.length > 0 ? (
          <div className="wishlist-grid">
            {wishlist.map((property, index) => (
              <motion.article
                className="listing-card"
                key={property.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="listing-image">
                  <img src={property.image} alt={property.name} />
                  <span>
                    {property.type === "Buy" ? "FOR SALE" : "FOR RENT"}
                  </span>
                  <button
                    className="wishlist-remove"
                    onClick={() => toggleWishlist(property)}
                    aria-label={`Remove ${property.name} from wishlist`}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>

                <div className="listing-info">
                  <div className="listing-location">
                    <MapPin size={15} />
                    {property.location}
                  </div>

                  <h3>{property.name}</h3>

                  <div className="listing-features">
                    <span><BedDouble size={16} /> {property.beds} Beds</span>
                    <span><Bath size={16} /> {property.baths} Baths</span>
                    <span><Maximize size={16} /> {property.area} sqft</span>
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
        ) : (
          <div className="wishlist-empty">
            <Heart size={45} />
            <h3>Your Wishlist Is Empty</h3>
            <p>Save properties you love and find them here later.</p>
            <Link to="/properties">Explore Properties</Link>
          </div>
        )}
      </section>
    </main>
  );
}

export default Wishlist;
