import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <div className="ui three column grid">
        <div className="column">
          <Link to="/mens" className="ui fluid card">
            <div className="image">
              <img src="https://images-na.ssl-images-amazon.com/images/I/81jkcAeu1jL._UY606_.jpg" />
            </div>
            <div className="content">
              <div className="header">Mens</div>
            </div>
          </Link>
        </div>
        <div className="column">
          <Link to="/womens" className="ui fluid card">
            <div className="image">
              <img src="https://img.tatacliq.com/images/i3/252Wx374H/MP000000004686519_252Wx374H_20190419030607.jpeg" />
            </div>
            <div className="content">
              <div className="header">Womens</div>
            </div>
          </Link>
        </div>
        <div className="column">
          <Link to="/phones" className="ui fluid card">
            <div className="image">
              <img src="https://cnet4.cbsistatic.com/img/cdjijzGVBHXSIgPmnEwh0wPsdRg=/980x551/2018/08/23/80bc6b93-3445-4b7a-ac0c-50d0761260a9/pile-of-phones-aug-2018.jpg" />
            </div>
            <div className="content">
              <div className="header">Mobiles</div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
