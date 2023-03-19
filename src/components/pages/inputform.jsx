import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Inputform = ({ card_data, set_cardData }) => {
  const navigate = useNavigate();
  function handleCountChange(e) {
    setcount(e.target.value);
  }
  function handleAmountChange(e) {
    setamount(e.target.value);
  }
  function handleSubmit() {
    set_cardData([
      ...card_data,
      {
        amount: amount,
        count: count,
        splitamount: amount / parseInt(count, 10),
      },
    ]);
    console.log(amount, count);
    navigate("/")
  }
  const [amount, setamount] = useState();
  const [count, setcount] = useState();
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Total Amount : </label>
          <input
            type="text"
            className="form-control"
            id="amount"
            value={amount}
            placeholder="Enter amount"
            onChange={handleAmountChange}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Group Count : </label>
          <input
            type="text"
            className="form-control"
            id="count"
            placeholder="Count"
            value={count}
            onChange={handleCountChange}
          />
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Inputform;
