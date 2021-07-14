import React from "react";

function HomeView() {
  return (
    <div className="home">
      <h1 className="home__headline">
        Hi, I am <span className="home__span">Lorem Ipsum</span>{" "}
      </h1>
      <p className="home__paragraph">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
        voluptates rerum sapiente, fugiat qui asperiores libero voluptas minima?
        Ut, temporibus ratione! Ea quo cupiditate quaerat ab, velit deserunt
        porro quasi?
      </p>
      <div className="home__icons-container">
        <a href="" className="home__link">
          <i className="fab fa-facebook home__icon"></i>
        </a>
        <a href="" className="home__link">
          <i className="fab fa-github home__icon"></i>
        </a>
        <a href="" className="home__link">
          <i className="fab fa-youtube home__icon"></i>
        </a>
      </div>
    </div>
  );
}

export default HomeView;
