
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import "./Signup.css";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setMessage("");

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match. Please try again.");
      return;
    }

    setMessage(
      "Your account form is ready. Registration will be connected with the backend."
    );

    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <main className="signup-page">
      <motion.div
        className="signup-container"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* HEADING */}
        <div className="signup-heading">
          <span>JOIN ESTORA</span>

          <h1>
            Create Your <em>Account.</em>
          </h1>

          <p>
            Start your journey towards finding your perfect property.
          </p>
        </div>

        {/* SIGNUP FORM */}
        <form className="signup-form" onSubmit={handleSubmit}>
          <label htmlFor="signup-name">Full Name</label>

          <input
            id="signup-name"
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            required
          />

          <label htmlFor="signup-email">Email Address</label>

          <input
            id="signup-email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />

          {/* PASSWORD */}
          <label htmlFor="signup-password">Password</label>

          <div className="signup-password-input">
            <input
              id="signup-password"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="new-password"
              minLength={6}
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={
                showPassword ? "Hide password" : "Show password"
              }
            >
              {showPassword ? (
                <EyeOff size={19} />
              ) : (
                <Eye size={19} />
              )}
            </button>
          </div>

          {/* CONFIRM PASSWORD */}
          <label htmlFor="signup-confirm-password">
            Confirm Password
          </label>

          <div className="signup-password-input">
            <input
              id="signup-confirm-password"
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              autoComplete="new-password"
              minLength={6}
              required
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              aria-label={
                showConfirmPassword
                  ? "Hide confirm password"
                  : "Show confirm password"
              }
            >
              {showConfirmPassword ? (
                <EyeOff size={19} />
              ) : (
                <Eye size={19} />
              )}
            </button>
          </div>

          {/* SUBMIT */}
          <button type="submit" className="signup-submit">
            Create Account
            <ArrowRight size={18} />
          </button>

          {/* MESSAGE */}
          {message && (
            <p className="signup-message" role="status">
              {message}
            </p>
          )}

          {/* LOGIN LINK */}
          <p className="signup-login">
            Already have an account?
            <Link to="/login"> Sign In</Link>
          </p>
        </form>
      </motion.div>
    </main>
  );
}

export default Signup;
