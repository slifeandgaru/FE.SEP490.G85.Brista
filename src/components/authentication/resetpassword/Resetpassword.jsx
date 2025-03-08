import React, { useState } from 'react';
import './resetpassword.css';
import { FaEnvelope, FaLock, FaKey } from 'react-icons/fa';

const ResetPassword = () => {
  const [step, setStep] = useState(1); // 1: email, 2: verification code, 3: new password
  const [formData, setFormData] = useState({
    email: '',
    verificationCode: '',
    newPassword: '',
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
    // Handle form submission based on current step
    if (step === 1) {
      // Send verification code to email
      setStep(2);
    } else if (step === 2) {
      // Verify code
      setStep(3);
    } else {
      // Reset password
      console.log('Reset password:', formData);
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div className="reset-header">
              <h1>Reset Password</h1>
              <p>Enter your email to receive a verification code</p>
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
            <button type="submit" className="reset-btn">
              Send Verification Code
            </button>
          </>
        );

      case 2:
        return (
          <>
            <div className="reset-header">
              <h1>Enter Code</h1>
              <p>Enter the verification code sent to your email</p>
            </div>
            <div className="input-group">
              <div className="input-icon">
                <FaKey />
              </div>
              <input
                type="text"
                name="verificationCode"
                placeholder="Verification Code"
                value={formData.verificationCode}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="reset-btn">
              Verify Code
            </button>
          </>
        );

      case 3:
        return (
          <>
            <div className="reset-header">
              <h1>New Password</h1>
              <p>Create your new password</p>
            </div>
            <div className="input-group">
              <div className="input-icon">
                <FaLock />
              </div>
              <input
                type="password"
                name="newPassword"
                placeholder="New Password"
                value={formData.newPassword}
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
                placeholder="Confirm New Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="reset-btn">
              Reset Password
            </button>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="reset-container">
      <div className="reset-wrapper">
        <div className="reset-left">
          <form onSubmit={handleSubmit} className="reset-form">
            <div className="progress-bar">
              <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>1</div>
              <div className={`progress-line ${step >= 2 ? 'active' : ''}`}></div>
              <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>2</div>
              <div className={`progress-line ${step >= 3 ? 'active' : ''}`}></div>
              <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>3</div>
            </div>
            
            {renderStepContent()}
            
            <p className="login-link">
              Remember your password? <a href="/login">Login here</a>
            </p>
          </form>
        </div>
        
        <div className="reset-right">
          <div className="reset-image">
            {/* Có thể thêm ảnh hoặc animation ở đây */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
