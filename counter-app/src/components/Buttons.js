import React from "react";

const Buttons = ({ incrementFunc, decrementFunc, number }) => {
  const styles = {
    blockStyle: {
      display: "flex",
      width: "300px",
      justifyContent: "space-between",
    },
    buttonStyle: {
      padding: "10px 10px",
    },
  };
  return (
    <>
      <div style={styles.blockStyle}>
        <button style={styles.buttonStyle} onClick={decrementFunc}>
          Minus
        </button>
        <button style={styles.buttonStyle} onClick={incrementFunc}>
          Plus
        </button>
      </div>
      {/* {number >= 10 ? <p>Above 10</p> : <p>Below 10</p>} */}
      {/* { number >= 10 && <p>Above 10</p>} */}
      {number == 3 ? (
        <p>hello 3</p>
      ) : number == 10 ? (
        <p>hello 10</p>
      ) : (
        <p>Going higher</p>
      )}
    </>
  );
};

export default Buttons;
