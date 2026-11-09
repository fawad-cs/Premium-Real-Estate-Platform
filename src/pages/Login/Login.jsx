
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import "./Login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage(
      "Your login form is ready. Authentication will be connected with the backend."
    );
  };

  return (
    <main className="login-page">
      <motion.div
        className="login-container"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* HEADING */}
        <div className="login-heading">
          <span>WELCOME BACK</span>

          <h1>
            Sign In To <em>ESTORA.</em>
          </h1>

          <p>
            Access your account and continue your property journey.
          </p>
        </div>

        {/* LOGIN FORM */}
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="login-email">Email Address</label>

          <input
            id="login-email"
            type="email"
            placeholder="Enter your email"
            autoComplete="email"
            required
          />

          {/* PASSWORD LABEL */}
          <div className="login-password-label">
            <label htmlFor="login-password">Password</label>

            <a href="#forgot-password">
              Forgot Password?
            </a>
          </div>

          {/* PASSWORD INPUT */}
          <div className="login-password-input">
            <input
              id="login-password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              autoComplete="current-password"
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

          {/* REMEMBER ME */}
          <label className="login-remember">
            <input type="checkbox" />
            <span>Remember me</span>
          </label>

          {/* SUBMIT */}
          <button type="submit" className="login-submit">
            Sign In
            <ArrowRight size={18} />
          </button>

          {/* FEEDBACK */}
          {message && (
            <p className="login-message" role="status">
              {message}
            </p>
          )}

          {/* REGISTER */}
          <p className="login-register">
            Don't have an account?
            <Link to="/signup"> Create Account</Link>
          </p>
        </form>
      </motion.div>
    </main>
  );
}

export default Login;
