import { motion } from "motion/react";
import {
  Building2,
  House,
  Castle,
  Building,
  ArrowUpRight,
} from "lucide-react";

import "./PropertyCategories.css";

const categories = [
  {
    id: 1,
    name: "Luxury Villas",
    count: "120+ Properties",
    icon: Castle,
  },
  {
    id: 2,
    name: "Apartments",
    count: "250+ Properties",
    icon: Building2,
  },
  {
    id: 3,
    name: "Family Houses",
    count: "180+ Properties",
    icon: House,
  },
  {
    id: 4,
    name: "Penthouses",
    count: "85+ Properties",
    icon: Building,
  },
];

function PropertyCategories() {
  return (
    <section className="property-categories">
      <div className="categories-container">

        <div className="categories-heading">
          <span>EXPLORE YOUR OPTIONS</span>
          <h2>
            Find Your Perfect <span>Property Type</span>
          </h2>
          <p>
            Explore a collection of exceptional spaces designed
            around your lifestyle.
          </p>
        </div>

        <div className="categories-grid">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.a
                href="/properties"
                className="category-card"
                key={category.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
              >
                <div className="category-icon">
                  <Icon size={30} strokeWidth={1.5} />
                </div>

                <div className="category-info">
                  <h3>{category.name}</h3>
                  <span>{category.count}</span>
                </div>

                <div className="category-arrow">
                  <ArrowUpRight size={20} />
                </div>
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default PropertyCategories;