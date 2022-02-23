import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Contacto from "./components/Contacto";
import About from "./components/About";
import News from "./components/News";
import Home from "./components/Home";
import Age_empires from "./components/Api-Age-Empires";

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <Link to={"/"} className="navbar-brand">
              Home
            </Link>
            <Link to={"/news"} className="navbar-brand">
              News
            </Link>
            <Link to={"/about"} className="navbar-brand">
              About
            </Link>
            <Link to={"/contacto"} className="navbar-brand">
              Contact
            </Link>
            <Link to={"/empires"} className="navbar-brand">
              Age of Empire
            </Link>
          </div>
        </nav>
        <Routes>
          <Route path="/empires" element={<Age_empires />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
