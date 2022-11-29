import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <>
      <li onClick={() => navigate("/booking")}>bookings</li>
      <li onClick={() => navigate("/booking/payment/77474774")}>payment</li>
      <li onClick={() => navigate("/contact")}>contact</li>
    </>
  );
};

export default Homepage;
