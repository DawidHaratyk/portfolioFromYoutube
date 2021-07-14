import React from "react";

function Headline({ text }) {
  return (
    <div className="headline">
      <h3 className="headline__text">{text}</h3>
      <span className="headline__line"></span>
      <span className="headline__shadow">{text}</span>
    </div>
  );
}

export default Headline;
