import React from "react";

const DisplayNumber = ({ number }) => {
  const styles = {
    containerStyle: {
      width: "300px",
      height: "200px",
      backgroundColor: "blue",
      color: "white",
      textAlign: "center",
      position: "relative",
    },
    pTagStyle: {
      position: "absolute",
      top: "50%",
      left: "50%",
    },
  };

  return (
    <div style={styles.containerStyle}>
      <p style={styles.pTagStyle}>{number}</p>
    </div>
  );
};

export default DisplayNumber;
