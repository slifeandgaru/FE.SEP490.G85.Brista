import React, { useState } from 'react';
import './register.css';
import { FaUser, FaEnvelope, FaLock, FaPhone, FaGoogle } from 'react-icons/fa';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register data:', formData);
  };

  return (
    <div className="register-container">
      <div className="register-wrapper">
        <div className="register-left">
          <div className="register-header">
            <h1>Create Account</h1>
            <p>Join us and start your journey today</p>
          </div>
          
          <form onSubmit={handleSubmit} className="register-form">
            <div className="input-group">
              <div className="input-icon">
                <FaUser />
              </div>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <div className="input-icon">
                <FaEnvelope />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <div className="input-icon">
                <FaPhone />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <div className="input-icon">
                <FaLock />
              </div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <div className="input-icon">
                <FaLock />
              </div>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <div className="terms-checkbox">
              <label>
                <input type="checkbox" required />
                <span>I agree to the <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a></span>
              </label>
            </div>

            <button type="submit" className="register-btn">
              Create Account
            </button>

            <div className="divider">
              <span>or</span>
            </div>

            <button type="button" className="google-btn">
              <FaGoogle />
              <span>Sign up with Google</span>
            </button>

            <p className="login-link">
              Already have an account? <a href="/login">Login here</a>
            </p>
          </form>
        </div>
        
        <div className="register-right">
          <div className="register-image">
            {/* Có thể thêm ảnh hoặc animation ở đây */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
