import React from 'react';
import * as Bootstrap from "react-bootstrap";

class Navbar extends React.Component {
  render() {
    return (
      <div style={{width: "100%"}}>
        <Bootstrap.Navbar bg="light" expand="lg" id="app-navbar">
          <Bootstrap.Navbar.Brand href="#home">HT Coffee</Bootstrap.Navbar.Brand>
          <Bootstrap.Nav.Link>Menu</Bootstrap.Nav.Link>
          <Bootstrap.Nav.Link>About</Bootstrap.Nav.Link>
        </Bootstrap.Navbar>
      </div>
    );
  }
}

export default Navbar;
