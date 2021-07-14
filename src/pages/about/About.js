import React from "react";
import { about } from "../../images/index";
import { personalInformations, technologies, servicesInfo } from "./data";
import Headline from "../../components/headline/Headline";
import PercentagesLine from "../../components/percentagesLine/PercentagesLine";

function About() {
  const personalDetails = personalInformations.map((item) => (
    <div className="about__datail" key={item.category}>
      <p className="about__text">{item.category}</p>
      <p className="about__text">{item.text}</p>
    </div>
  ));

  const technologiesFirstList = technologies.firstColumn.map((item) => (
    <div className="skills__item" key={item.name}>
      <p className="skills__tech">{item.name}</p>
      <div className="skills__percentages-container">
        <p className="skills__percentages">{item.percentages}</p>
        <PercentagesLine percentages={item.percentages} />
      </div>
    </div>
  ));

  const technologiesSecondList = technologies.secondColumn.map((item) => (
    <div className="skills__item" key={item.name}>
      <p className="skills__tech">{item.name}</p>
      <div className="skills__percentages-container">
        <p className="skills__percentages">{item.percentages}</p>
        <PercentagesLine percentages={item.percentages} />
      </div>
    </div>
  ));

  const servicesList = servicesInfo.map((item) => (
    <div className="services__item" key={item.category}>
      {item.icon}
      <h5 className="services__small-headline">{item.category}</h5>
      <span className="services__underline"></span>
      <p className="services__text">{item.text}</p>
    </div>
  ));

  return (
    <section className="about">
      <div className="about__me">
        <Headline text="About me" />
        <div className="about__content">
          <div className="about__image-container">
            <img src={about} alt="me" className="about__image" />
          </div>
          <div className="about__info">
            <h4 className="about__small-headline">
              I am <span className="about__span">Lorem Ipsum</span>
            </h4>
            <p className="about__paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis,
              laborum aspernatur laudantium totam atque sint exercitationem
              temporibus provident esse!
            </p>
            <div className="about__details">{personalDetails}</div>
            <button className="about__btn">Download Cv</button>
          </div>
        </div>
      </div>
      <div className="skills">
        <Headline text="My Skills" />
        <div className="skills__items-container">
          <div className="skills__items">{technologiesFirstList}</div>
          <div className="skills__items">{technologiesSecondList}</div>
        </div>
      </div>
      <div className="services">
        <Headline text="Services" />
        <div className="services__items">{servicesList}</div>
      </div>
    </section>
  );
}

export default About;
