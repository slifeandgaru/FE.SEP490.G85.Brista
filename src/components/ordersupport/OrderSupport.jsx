import React from 'react';
import './orderSupport.css';
// import FoodIcon from '../../assets/food-icon.svg';
// import PenIcon from '../../assets/pen-icon.svg';
// import UserIcon from '../../assets/user-icon.svg';
// import WalletIcon from '../../assets/wallet-icon.svg';
// import MenuIcon from '../../assets/menu-icon.svg';

import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const OrderSupport = () => {

    // const [name, setName] = useState("");
    const location = useLocation();
    const userName = location.state?.userName;
    const navigate = useNavigate();

    useEffect(() => {
        if (!sessionStorage.getItem("visitedWelcome")) {
            navigate("/welcome");
        }
    }, [navigate]);

    return (
        <div className="order-support-container">
            {/* Header Section */}
            <div className="order-header">
                <h1>QRista</h1>
                <img src="" alt="Food Icon" className="icon" />
                <p>You have ordered 5 dishes</p>
                <img src="" alt="Pen Icon" className="icon" />
                <span>{userName}</span>
            </div>

            {/* Main Content */}
            <div className="main-content">
                <h2>What support do you need</h2>
                <div className="support-options">
                    <div className="support-option">
                        <img src="" alt="User Icon" className="icon" />
                        <p>Call Staff</p>
                    </div>
                    <div className="support-option">
                        <img src="" alt="Wallet Icon" className="icon" />
                        <p>Call for Payment</p>
                    </div>
                </div>

                <div className="menu-ordering">
                    <img src="" alt="Menu Icon" className="icon" />
                    <p>Menu and Ordering</p>
                </div>
            </div>
        </div>
    );
};

export default OrderSupport;