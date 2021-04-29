import React from 'react';
import * as Bootstrap from "react-bootstrap";
import './Menu.css';

class Menu extends React.Component {
  render() {
    return (
      <div id="menu">
        <div className="menu-section">
          <h3>Coffee</h3>
          <ul className="menu-list">
            <li>Drip Coffee</li>
            <li>Espresso</li>
            <li>Capuccino</li>
            <li>Americano</li>
            <li>Latte</li>
            <li>Mocha</li>
            <li>Frappuccino</li>
          </ul>
        </div>
        <div className="menu-section">
          <h3>Tea</h3>
          <ul className="menu-list">
            <li>Green Tea Latte</li>
            <li>Chai Latte</li>
            <li>Loose Leaf Tea</li>
          </ul>
        </div>
        <div className="menu-section">
          <h3>Non-caffeinated</h3>
          <ul className="menu-list">
            <li>Strawberry Smoothie</li>
            <li>Orange Juice</li>
          </ul>
        </div>
        <div>
          <h3>Food</h3>
          <ul className="menu-list">
            <li>Egg Salad Sandwich</li>
            <li>Bagel</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;
