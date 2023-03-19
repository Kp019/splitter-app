import React from "react";

import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container d-flex flex-row justify-content-between">
        <div className="d-flex flex-column justify-content-center mt-5">
          <h1>Bill Split-App</h1>
          <p>split your bills in an easy way</p>
        </div>
        <div className="d-flex flex-column justify-content-center">
          <button
            className="btn btn-primary px-3 py-2"
            onClick={() => navigate("add-split")}
          >
            Add Split
          </button>
        </div>
      </div>
      <hr className="mx-5" />
    </>
  );
};

export default Homepage;
