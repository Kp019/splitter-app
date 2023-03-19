import React from "react";

const Cards = ({ data }) => {
  console.log(data);
  return (
    <div className=" mx-5 shadow p-3 mb-5 bg-white rounded d-flex flex-row justify-content-between">
      <div className="d-flex flex-column justify-content-center">
        <h1>Total Amount : {data.amount}</h1>
        <p>Split Count : {data.count}</p>
      </div>
      <div className="d-flex flex-column justify-content-center">
        <h3> Split Amount : {data.splitamount}</h3>
      </div>
    </div>
  );
};

export default Cards;
