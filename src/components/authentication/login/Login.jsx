import React, { useState } from 'react';
import './login.css';
import { FaEnvelope, FaLock, FaGoogle } from 'react-icons/fa'; // Đảm bảo bạn đã cài react-icons

const Login1 = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    console.log('Login data:', formData);
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-left">
          <div className="login-header">
            <h1>Welcome Back!</h1>
            <p>Please login to access your account</p>
          </div>
          
          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-group">
              <div className="input-icon">
                <FaEnvelope />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
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

            <div className="login-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="/resetpassword" className="resetpassword">
                Forgot Password?
              </a>
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>

            <div className="divider">
              <span>or</span>
            </div>

            <button type="button" className="google-btn">
              <FaGoogle />
              <span>Continue with Google</span>
            </button>

            <p className="register-link">
              Don't have an account? <a href="/register">Register now</a>
            </p>
          </form>
        </div>
        
        <div className="login-right">
          <div className="login-image">
            {/* Có thể thêm ảnh hoặc animation ở đây */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login1;