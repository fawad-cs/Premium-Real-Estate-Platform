import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  Heart,
  Home,
  PlusCircle,
  UserRound,
  ArrowUpRight,
  LogOut,
} from "lucide-react";
import { useWishlist } from "../../context/WishlistContext";
import "./Dashboard.css";

function Dashboard() {
  const { wishlist } = useWishlist();

  const stats = [
    {
      title: "Saved Properties",
      value: wishlist.length,
      icon: Heart,
    },
    {
      title: "Available Properties",
      value: "06",
      icon: Home,
    },
    {
      title: "Account Status",
      value: "Active",
      icon: UserRound,
    },
  ];

  return (
    <main className="dashboard-page">
      <section className="dashboard-container">
        <motion.div
          className="dashboard-heading"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="dashboard-label">YOUR ACCOUNT</span>
            <h1>Welcome to your Dashboard</h1>
            <p>Manage your properties and account activity.</p>
          </div>

          <Link to="/properties" className="dashboard-browse-btn">
            Browse Properties <ArrowUpRight size={18} />
          </Link>
        </motion.div>

        <div className="dashboard-stats">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                className="dashboard-stat-card"
                key={stat.title}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="dashboard-stat-icon">
                  <Icon size={22} />
                </div>

                <p>{stat.title}</p>
                <h2>{stat.value}</h2>
              </motion.div>
            );
          })}
        </div>

        <div className="dashboard-content">
          <div className="dashboard-profile">
            <div className="dashboard-section-title">
              <h2>Profile Information</h2>
            </div>

            <div className="dashboard-avatar">
              <UserRound size={32} />
            </div>

            <h3>Welcome, User</h3>
            <p>fawad@example.com</p>

            <span className="dashboard-status">Active Member</span>
          </div>

          <div className="dashboard-quick-links">
            <div className="dashboard-section-title">
              <h2>Quick Actions</h2>
            </div>

            <Link to="/wishlist" className="dashboard-action">
              <span>
                <Heart size={20} />
                My Wishlist
              </span>
              <ArrowUpRight size={19} />
            </Link>

            <Link to="/properties" className="dashboard-action">
              <span>
                <Home size={20} />
                Explore Properties
              </span>
              <ArrowUpRight size={19} />
            </Link>

            <Link to="/sell" className="dashboard-action">
              <span>
                <PlusCircle size={20} />
                Sell a Property
              </span>
              <ArrowUpRight size={19} />
            </Link>

            <Link to="/contact" className="dashboard-action">
              <span>
                <UserRound size={20} />
                Contact Support
              </span>
              <ArrowUpRight size={19} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Dashboard;