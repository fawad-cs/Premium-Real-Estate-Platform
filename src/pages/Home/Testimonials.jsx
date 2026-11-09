import { motion } from "motion/react";
import { Star, Quote, ArrowUpRight } from "lucide-react";

import "./Testimonials.css";

const reviews = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Property Buyer",
    image: "https://i.pravatar.cc/100?img=47",
    review:
      "ESTORA made finding our dream home incredibly easy. Their team was professional, helpful and transparent throughout the entire process.",
  },
  {
    id: 2,
    name: "James Anderson",
    role: "Property Investor",
    image: "https://i.pravatar.cc/100?img=12",
    review:
      "An excellent real estate experience. The property selection was impressive and the guidance helped me make a confident investment decision.",
  },
  {
    id: 3,
    name: "Emily Carter",
    role: "Home Buyer",
    image: "https://i.pravatar.cc/100?img=44",
    review:
      "From the first consultation to the final paperwork, everything felt smooth and organized. I highly recommend the ESTORA team.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-container">

        <motion.div
          className="testimonials-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span>CLIENT EXPERIENCES</span>
          <h2>
            What Our Clients <strong>Say About Us</strong>
          </h2>
          <p>
            Real experiences from people who found their place
            with ESTORA.
          </p>
        </motion.div>

        <div className="testimonials-grid">
          {reviews.map((review, index) => (
            <motion.article
              className="testimonial-card"
              key={review.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <div className="testimonial-top">
                <Quote size={35} />
                <div className="testimonial-stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={15} fill="currentColor" />
                  ))}
                </div>
              </div>

              <p className="testimonial-review">
                "{review.review}"
              </p>

              <div className="testimonial-user">
                <img src={review.image} alt={review.name} />

                <div>
                  <h3>{review.name}</h3>
                  <span>{review.role}</span>
                </div>

                <ArrowUpRight className="testimonial-arrow" size={21} />
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;