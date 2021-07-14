import React from "react";
const personalInformations = [
  {
    category: "Full Name",
    text: ":Lorem Ipsum",
  },
  {
    category: "Age",
    text: ":50",
  },
  {
    category: "Nationality",
    text: ":French",
  },
  {
    category: "Languages",
    text: ":French, Spanish, English",
  },
  {
    category: "Address",
    text: ":2 Beightbridge, BN7 G89, United kingdom",
  },
  {
    category: "Countries",
    text: ":France, Spain, Germany",
  },
];

const technologies = {
  firstColumn: [
    {
      name: "Javascript",
      percentages: "60%",
    },
    {
      name: "React Js",
      percentages: "70%",
    },
    {
      name: "Python",
      percentages: "90%",
    },
    {
      name: "Java",
      percentages: "80%",
    },
    {
      name: "UI/Ux Design",
      percentages: "76%",
    },
  ],
  secondColumn: [
    {
      name: "Typescript",
      percentages: "30%",
    },
    {
      name: "Node Js",
      percentages: "80%",
    },
    {
      name: "Lua",
      percentages: "40%",
    },
    {
      name: "Web Design",
      percentages: "25%",
    },
  ],
};

const servicesInfo = [
  {
    category: "Web design",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    icon: <i className="fas fa-network-wired services__icon"></i>,
  },
  {
    category: "Artificial Intelligence",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    icon: <i className="fas fa-brain services__icon"></i>,
  },
  {
    category: "Game Development",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    icon: <i className="fas fa-gamepad services__icon"></i>,
  },
];

export { personalInformations, technologies, servicesInfo };
