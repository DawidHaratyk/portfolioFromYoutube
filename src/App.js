import React from "react";
import { Switch, Route } from "react-router-dom";
import "./css/App.css";
import NavBar from "./components/navBar/NavBar";
import HomeView from "./components/homeView/HomeView";
import About from "./pages/about/About";
import Blogs from "./pages/blogs/Blogs";
import Contact from "./pages/contact/Contact";
import Portfolios from "./pages/portfolios/Portfolios";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <NavBar />
      </div>
      <Switch>
        <Route path="/" exact component={HomeView} />
        <Route path="/home" exact component={HomeView} />
        <Route path="/about" exact component={About} />
        <Route path="/portfolios" exact component={Portfolios} />
        <Route path="/blogs" exact component={Blogs} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
