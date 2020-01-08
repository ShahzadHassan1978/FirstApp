import React from "react";
import "./Navbar.scss";
import logo from "../../logo.png";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import About from "../About/About";
import Home from "../Home/Home";
import TourList from "../TourList/index";

export default function Navbar() {
  return (
    <Router>
      <nav className="navbar">
        <img src={logo} alt="city tours logo" />
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/TourList" className="nav-link active">
              Tours
            </Link>
          </li>
        </ul>
      </nav>
     
        
          <Switch>
            <Route path="/About" component={About}/>
            <Route exact path="/" component={Home}/>
            <Route path="/TourList" component={TourList}/>
          </Switch>
        </Router>
      
    
  );
}