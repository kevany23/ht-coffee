import React from 'react';
import './App.css';
import * as Bootstrap from "react-bootstrap";
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Order from './components/Order';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <h1>Welcome To HT Coffee</h1>
        <h2>Menu</h2>
        <Menu/>
        <h2>Order System</h2>
        <Order/>
      </div>
    );
  }
}

export default App;
