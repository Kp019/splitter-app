import React from "react";
import Cards from "./cards";
import Homepage from "./homepage";
import NavBar from "./navbar";

const Landing = ({ card_data }) => {
  return (
    <>
    
      <NavBar />
      <Homepage />
      {card_data.length==0?<p>No splitups</p>: card_data.map((data,index) => (
        <Cards data={data} key={index}/>
      ))}
    </>
  );
};

export default Landing;
