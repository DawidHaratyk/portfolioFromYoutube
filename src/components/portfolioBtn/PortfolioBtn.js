import React from "react";

function PortfolioBtn({ data, click }) {
  console.log("render portfoliobtn");
  const buttonsList = data.map((item) => (
    <button
      className={`portfolio__btn ${item.selected ? "active" : ""}`}
      key={item.name}
      onClick={(e) => click(e, data, item)}
    >
      {item.name}
    </button>
  ));
  return <div className="portfolio__btns-list">{buttonsList}</div>;
}

export default PortfolioBtn;
