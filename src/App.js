import "./App.css";
import React, { useState } from "react";
import "./index.css";
import Inputform from "./components/pages/inputform";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Landing from "./components/pages/Landing";

function App() {
  const [cardData, setcardData] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing card_data={cardData} />} />
        <Route path="add-split" element={<Inputform card_data={cardData} set_cardData={setcardData}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
