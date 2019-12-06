import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secondary  menu">
      <Link to="/" className="active item">
        <i className="shopping bag icon"></i>
      </Link>
      <Link to="/cart" className="item">
        <i className="shopping cart icon"></i>
      </Link>
      <Link to="/signin" className="item">
        SignIn
      </Link>
      <a className="item">New User Register</a>
      <div className="right menu">
        <div className="item">
          <div className="ui icon input">
            <input type="text" placeholder="Search..." />
            <i className="search link icon"></i>
          </div>
        </div>
        <a className="ui item">Logout</a>
      </div>
    </div>
  );
};

export default Header;
