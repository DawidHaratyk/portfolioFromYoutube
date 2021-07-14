import {
  port1,
  port2,
  port3,
  port4,
  port5,
  port6,
  port7,
} from "../../images/index";

const buttonItems = [
  { name: "All", selected: false },
  { name: "Animation", selected: false },
  { name: "Python", selected: false },
  { name: "Javascript", selected: false },
  { name: "React Js", selected: false },
  { name: "Test Port", selected: false },
];

const portfolioList = [
  {
    id: 1,
    category: "Animation",
    link1: "www.youtube.com",
    link2: "www.github.com",
    icon1: "G",
    icon2: "Y",
    image: port1,
    title: "Autodesk Maya",
  },
  {
    id: 2,
    category: "Python",
    link1: "www.youtube.com",
    link2: "www.github.com",
    icon1: "G",
    icon2: "Y",
    image: port2,
    title: "Python Web Scrapping",
  },
  {
    id: 3,
    category: "Animation",
    link1: "www.youtube.com",
    link2: "www.github.com",
    icon1: "G",
    icon2: "Y",
    image: port3,
    title: "Autodesk Maya",
  },
  {
    id: 4,
    category: "Javascript",
    link1: "www.youtube.com",
    link2: "www.github.com",
    icon1: "G",
    icon2: "Y",
    image: port4,
    title: "Vanilla Javascript Website",
  },
  {
    id: 5,
    category: "React Js",
    link1: "www.youtube.com",
    link2: "www.github.com",
    icon1: "G",
    icon2: "Y",
    image: port5,
    title: "Getting Started With React",
  },
  {
    id: 6,
    category: "React Js",
    link1: "www.youtube.com",
    link2: "www.github.com",
    icon1: "G",
    icon2: "Y",
    image: port6,
    title: "Vanilla Javascript Website",
  },
  {
    id: 7,
    category: "Test Port",
    link1: "www.youtube.com",
    link2: "www.github.com",
    icon1: "G",
    icon2: "Y",
    image: port7,
    title: "Vanilla Javascript Website",
  },
];

export { buttonItems, portfolioList };
