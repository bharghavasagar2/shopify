import React, { Component } from "react";
import { connect } from "react-redux";
import { removeCart } from "../action";
import "./cart.css";

class Cart extends Component {
  renderCartItems() {
    return this.props.cartItems.map(cartItem => {
      return (
        <div key={cartItem.id} className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <h1 className="header">{cartItem.name}</h1>
              <img src={`${cartItem.imageUrl}`} />
            </div>
            <div className="five wide column item">
              <h1> Price: {cartItem.price}</h1>
              <button
                onClick={() => this.props.removeCart(cartItem)}
                className="ui button negative"
              >
                Remove from cart
              </button>
              <button
                style={{ marginTop: "40px" }}
                className="ui button primary"
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    console.log("this.props", this.props);
    return (
      <div>
        <div style={{ textAlign: "right" }}>
          <h1> Total price: {this.props.cartPrice}</h1>
        </div>
        <h2 style={{ textAlign: "center" }}>
          Total Items in you cart: {this.props.totalItems}
        </h2>

        {this.renderCartItems()}
      </div>
    );
  }
}
const mapStateToProps = ({ cartItems }) => {
  return {
    cartItems: cartItems,
    totalItems: cartItems.length,
    cartPrice: cartItems.reduce((acc, cartItem) => cartItem.price + acc, 0)
  };
};

export default connect(mapStateToProps, { removeCart })(Cart);
