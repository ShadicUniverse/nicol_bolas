import React, { Component } from "react";
import {
  Route, Routes,
  NavLink,
  HashRouter
} from "react-router-dom";
import Image from "./Image";
import Info from "./Info";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div>
              <h1>Nicol Bolas</h1>
              <ul className="header">
                <li><NavLink to="/">Image</NavLink></li>
                <li><NavLink to="/info">Info</NavLink></li>
              </ul>
              <div className="content">
              <Routes>
                <Route path="/" element={<Image />}/>
                <Route path="/info" element={<Info />}/>
              </Routes>
              </div>
            </div>
        </HashRouter>
    );
  }
}
 
export default Main;