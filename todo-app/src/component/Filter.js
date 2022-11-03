import React from "react";

const Filter = ({ filterTask }) => {
  return (
    <>
      <input
        type="text"
        name="filter"
        placeholder="filter"
        onChange={(e) => filterTask(e)}
      />
      <input type="checkbox" name="check" onChange={(e) => filterTask(e)} />
    </>
  );
};

export default Filter;
