import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/homepage/Homepage"
import Welcome from "./components/welcome/Welcome";
import OrderSupport from "./components/ordersupport/OrderSupport";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/welcome' element={<Welcome />} />
          <Route path='/order' element={<OrderSupport />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
