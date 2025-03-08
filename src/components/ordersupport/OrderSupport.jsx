import * as React from 'react';
import './orderSupport.css';
import Grid from "@mui/material/Grid";

import { AddIcCall, AccountBalanceWallet, ShoppingBasket } from "@mui/icons-material";

// import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';


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
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <div className="support-option">
                            <AddIcCall style={{ fontSize: 50, color: "red" }} />
                            <p>Gọi nhân viên</p>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="support-option">
                            <AccountBalanceWallet style={{ fontSize: 50, color: "red" }} />
                            <p>Gọi thanh toán</p>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className="support-option">
                            <ShoppingBasket style={{ fontSize: 50, color: "red" }} />
                            <p>Thực đơn & Gọi món</p>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default OrderSupport;