import React, { useState, useEffect } from "react";
import Headline from "../../components/headline/Headline";
import PortfolioBtn from "../../components/portfolioBtn/PortfolioBtn";
import PortfolioList from "../../components/portfolioList/PortfolioList";
import { buttonItems, portfolioList } from "./data";

function Portfolios() {
  const [currentTechnologies, setCurrentTechnologies] = useState(portfolioList);
  const [buttonList, setButtonList] = useState(buttonItems);

  console.log(buttonItems);

  function handleSelectCategory(e, data, activeButton) {
    data.forEach((button) => {
      button.selected = false;
    });
    activeButton.selected = true;
    if (e.target.textContent === "All") {
      setCurrentTechnologies(portfolioList);
      return;
    }
    const selectedTechnologies = portfolioList.filter(
      (item) => item.category === e.target.textContent
    );
    setCurrentTechnologies(selectedTechnologies);
  }

  useEffect(() => {
    const newArray = buttonList.map((item) => {
      if (item.name === "All") {
        return { name: item.name, selected: true };
      } else {
        return { name: item.name, selected: false };
      }
    });
    setButtonList(newArray);
  }, []);

  return (
    <div className="portfolio">
      <Headline text="Portfolios" />
      <PortfolioBtn data={buttonList} click={handleSelectCategory} />
      <PortfolioList data={currentTechnologies} />
    </div>
  );
}

export default Portfolios;
