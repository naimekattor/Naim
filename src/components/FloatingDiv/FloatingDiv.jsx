import React from "react";
import "./FloatingDiv.css";
const FloatingDiv = ({ Crown, txt1, txt2 }) => {
  return (
    <div className="floatingdiv">
      <img src={Crown} alt="" />
      <span>
        {txt1} <br />
        {txt2}
      </span>
    </div>
  );
};

export default FloatingDiv;
