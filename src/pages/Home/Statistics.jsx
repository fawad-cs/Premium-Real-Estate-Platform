import { motion } from "motion/react";
import {
  House,
  Users,
  UserRoundCheck,
  Trophy,
} from "lucide-react";

import "./Statistics.css";

const stats = [
  {
    id: 1,
    number: "2,500+",
    label: "Properties Listed",
    icon: House,
  },
  {
    id: 2,
    number: "1,800+",
    label: "Happy Clients",
    icon: Users,
  },
  {
    id: 3,
    number: "150+",
    label: "Expert Agents",
    icon: UserRoundCheck,
  },
  {
    id: 4,
    number: "15+",
    label: "Years Experience",
    icon: Trophy,
  },
];

function Statistics() {
  return (
    <section className="statistics">
      <div className="statistics-container">

        <motion.div
          className="statistics-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span>ESTORA IN NUMBERS</span>
          <h2>Our Success Speaks For Itself.</h2>
        </motion.div>

        <div className="statistics-grid">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                className="stat-card"
                key={stat.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
              >
                <div className="stat-icon">
                  <Icon size={27} />
                </div>

                <h3>{stat.number}</h3>

                <p>{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Statistics;