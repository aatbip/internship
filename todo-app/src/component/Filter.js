import React from "react";

const Filter = ({ filterData }) => {
  return (
    <>
      <input type="text" name="filter" placeholder="filter" onChange={(e) => filterData(e)}/>
      <input type="checkbox" name="check" onChange={(e) => filterData(e)} />
    </>
  );
};

export default Filter;
