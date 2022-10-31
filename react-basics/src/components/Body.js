import React from "react";

const Body = ({ name, age, isActive }) => {
  return (
    <div className="container">
      <div className="wrapper">
        <h1>I AM BODY</h1>
        <p>{name}</p>
        <p>{age}</p>
      </div>
    </div>
  );
};

export default Body;
