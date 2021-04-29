import React from 'react';
import * as Bootstrap from "react-bootstrap";
import './Order.css';

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currCategory: 'coffee',
      menu: {
        coffee: ['Drip Coffee', 'Espresso', 'Capuccino',
        'Americano', 'Latte', 'Mocha', 'Frappuccino'],
        tea: ['Green Tea Latte', 'Chai Latte', 'Loose Leaf Tea'],
        noncaf: ['Strawberry Smoothie', 'Orange Juice'],
        food: ['Egg Salad Sandwich', 'Bagel']
      },
      cart: [],
    }
    this.selectCategory = this.selectCategory.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  selectCategory(category) {
    this.setState((state) => {
      return {
        ...state,
        currCategory: category,
      };
    });
  }
  addItem(item) {
    /*this.setState((state)=> {
      state.cart.push(item);
      let newState = {...state};
      return newState;
    });*/
    this.state.cart.push(item);
    this.setState((state) => state);
  }
  render() {
    let menuItems = this.state.menu[this.state.currCategory].map((item) =>
    <div className="itemPanel orderPanel" key={item} onClick={this.addItem.bind(this, item)}>
      {item}
    </div>
    );
    let cartItems = this.state.cart.map((item, idx) =>
      <p key={idx}>#{idx + 1}&nbsp;&nbsp;{item}</p>
    );
    return (
      <div id="orderSection">
        <div>
          <h4>Cart</h4>
          <div id="cartDiv">
            {cartItems}
          </div>
        </div>
        <div id="orderPOS">
          <div id="orderCategories">
            <div className="categoryPanel orderPanel" onClick={this.selectCategory.bind(this, 'coffee')}>Coffee</div>
            <div className="categoryPanel orderPanel" onClick={this.selectCategory.bind(this, 'tea')}>Tea</div>
            <div className="categoryPanel orderPanel" onClick={this.selectCategory.bind(this, 'noncaf')}>Non-caf</div>
            <div className="categoryPanel orderPanel" onClick={this.selectCategory.bind(this, 'food')}>Food</div>
          </div>
          <div class="orderItemDiv">
            {menuItems}
          </div>
        </div>
      </div>
    );
  }
}
  
  export default Order;