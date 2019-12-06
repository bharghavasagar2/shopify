import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMens, addCart } from "../action";
import { Link } from "react-router-dom";

class MensPage extends Component {
  componentDidMount() {
    this.props.fetchMens();
  }
  renderMensClothes = () => {
    return this.props.mens.map(men => {
      return (
        <div key={men.id} className="ui centered card">
          <Link to={`/mens/${men.id}`} className="image">
            <img src={`${men.imageUrl}`} />
          </Link>
          <div className="content">
            <div className="header">{men.name}</div>
          </div>
          <button
            onClick={() => this.props.addCart(men)}
            className="ui button primary"
          >
            Add
          </button>
        </div>
      );
    });
  };
  render() {
    console.log(this.props);
    return <div>{this.renderMensClothes()}</div>;
  }
}
const mapStateToProps = state => {
  return {
    mens: state.mens
  };
};

export default connect(mapStateToProps, { fetchMens, addCart })(MensPage);
