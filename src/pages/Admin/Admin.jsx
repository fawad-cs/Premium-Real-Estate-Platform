import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Building2,
  Users,
  MessageSquare,
  TrendingUp,
  Plus,
  ArrowUpRight,
  MoreHorizontal,
} from "lucide-react";
import "./Admin.css";

const stats = [
  {
    title: "Total Properties",
    value: "248",
    change: "+12%",
    icon: <Building2 />,
  },
  {
    title: "Total Users",
    value: "1,840",
    change: "+18%",
    icon: <Users />,
  },
  {
    title: "Total Inquiries",
    value: "356",
    change: "+8%",
    icon: <MessageSquare />,
  },
  {
    title: "Monthly Growth",
    value: "24.8%",
    change: "+5%",
    icon: <TrendingUp />,
  },
];

const listings = [
  {
    id: 1,
    name: "The Modern Residence",
    location: "Beverly Hills, California",
    price: "$1,250,000",
    status: "Available",
  },
  {
    id: 2,
    name: "Villa Serenity",
    location: "Palm Jumeirah, Dubai",
    price: "$850,000",
    status: "Pending",
  },
  {
    id: 4,
    name: "Urban Heights",
    location: "New York, USA",
    price: "$650,000",
    status: "Available",
  },
];

function Admin() {
  return (
    <main className="admin-page">
      <div className="admin-container">

        <motion.div
          className="admin-header"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span>ESTORA MANAGEMENT</span>
            <h1>Admin Dashboard</h1>
            <p>Manage your real estate platform from one place.</p>
          </div>

          <Link to="/sell" className="admin-add-button">
            <Plus size={18} />
            Add Property
          </Link>
        </motion.div>

        <section className="admin-stats">
          {stats.map((stat, index) => (
            <motion.div
              className="admin-stat-card"
              key={stat.title}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <div className="admin-stat-top">
                <div className="admin-stat-icon">{stat.icon}</div>
                <span>{stat.change}</span>
              </div>

              <h2>{stat.value}</h2>
              <p>{stat.title}</p>
            </motion.div>
          ))}
        </section>

        <section className="admin-listings">
          <div className="admin-listings-heading">
            <div>
              <span>PROPERTY MANAGEMENT</span>
              <h2>Recent Listings</h2>
            </div>

            <Link to="/properties" className="admin-view-all">
              View All <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Location</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {listings.map((property) => (
                  <tr key={property.id}>
                    <td>{property.name}</td>
                    <td>{property.location}</td>
                    <td>{property.price}</td>

                    <td>
                      <span
                        className={`admin-status ${
                          property.status === "Available"
                            ? "available"
                            : "pending"
                        }`}
                      >
                        {property.status}
                      </span>
                    </td>

                    <td>
                      <Link
                        to={`/properties/${property.id}`}
                        className="admin-more-button"
                        aria-label={`View ${property.name}`}
                      >
                        <MoreHorizontal size={20} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="admin-bottom-card">
          <div className="admin-bottom-icon">
            <LayoutDashboard size={25} />
          </div>

          <div>
            <h3>Platform Overview</h3>
            <p>
              Your admin workspace is ready. Property management and
              user controls will be connected with the backend later.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}

export default Admin;