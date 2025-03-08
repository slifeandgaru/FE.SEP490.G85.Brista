import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/homepage/Homepage"
import Welcome from "./components/welcome/Welcome";
import OrderSupport from "./components/ordersupport/OrderSupport";
import Login from "./components/authentication/login/Login";
import Register from "./components/authentication/register/Register";
import ResetPassword from "./components/authentication/resetpassword/Resetpassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/welcome' element={<Welcome />} />
          <Route path='/order' element={<OrderSupport />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/resetpassword" element={<ResetPassword/>}/>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
