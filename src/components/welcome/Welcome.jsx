import React, { useState } from 'react';
import './welcome.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../assets/QRista_logo.png";

const Welcome = () => {
  const [customerName, setCustomerName] = useState('');

  const navigate = useNavigate();

  const handleStart = () => {
    sessionStorage.setItem("visitedWelcome", "true");
    navigate("/order", { state: { customerName: customerName } });
};

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <div className="logo-container">
          {/* Replace with your actual logo */}
          <img src={logo} alt="QRista Logo" className="logo" />
        </div>

        <h1 className="welcome-text">QRista kính chào quý khách</h1>

        <form onSubmit={handleSubmit} className="welcome-form">
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="Vui lòng nhập tên của bạn"
            className="name-input"
          />

          <Link to="/register" className="register-link">
            Đăng ký / Đăng nhập
          </Link>

          <button type="submit" className="confirm-button" onClick={handleStart}>
            Tiếp tục
          </button>
        </form>
      </div>
    </div>
  );
};

export default Welcome;