import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWomens } from "../action";
import { Link } from "react-router-dom";

class WomensPage extends Component {
  componentDidMount() {
    this.props.fetchWomens();
  }
  renderWomensClothes = () => {
    return this.props.womens.map(women => {
      return (
        <Link to={`/womens/${women.id}`} className="ui centered card">
          <div className="image">
            <img src={`${women.imageUrl}`} />
          </div>
          <div className="content">
            <a className="header">{women.name}</a>
          </div>
        </Link>
      );
    });
  };
  render() {
    console.log(this.props);
    return <div>{this.renderWomensClothes()}</div>;
  }
}
const mapStatetoProps = state => {
  return {
    womens: state.womens
  };
};

export default connect(mapStatetoProps, { fetchWomens })(WomensPage);
