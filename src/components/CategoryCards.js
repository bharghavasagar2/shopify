import React from "react";

const CategoryCards = () => {
  return (
    <div className="ui card">
      <div className="image">
        <img src="https://images-na.ssl-images-amazon.com/images/I/81jkcAeu1jL._UY606_.jpg" />
      </div>
      <div className="content">
        <a className="header">Mens</a>
        <div className="meta">
          <span className="date">Joined in 2013</span>
        </div>
        <div className="description">
          Kristy is an art director living in New York.
        </div>
      </div>
      <div className="extra content">
        <a>
          <i className="user icon"></i>
          22 Friends
        </a>
      </div>
    </div>
  );
};

export default CategoryCards;
