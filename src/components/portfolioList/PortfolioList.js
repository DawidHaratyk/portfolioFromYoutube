import React from "react";

function PortfolioList({ data }) {
  const portfolioList = data.map((item) => (
    <div className="portfolio__item" key={item.id}>
      <div className="portfolio__image-container">
        <img
          src={item.image}
          alt={item.title}
          className="portfolio__item-image"
        />
        <ul className="portfolio__item-links-list">
          <li className="portfolio__item-li">
            <a href={item.link1} className="portfolio__item-link">
              {item.icon1}
            </a>
          </li>
          <li className="portfolio__item-li">
            <a href={item.link2} className="portfolio__item-link">
              {item.icon2}
            </a>
          </li>
        </ul>
      </div>
      <h3 className="portfolio__item-headline">{item.title}</h3>
      <p className="portfolio__item-text">Placeholder paragraph</p>
    </div>
  ));
  return <div className="portfolio__items">{portfolioList}</div>;
}

export default PortfolioList;
