import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPhones } from "../action";
import { Link } from "react-router-dom";

class PhonesPages extends Component {
  componentDidMount() {
    this.props.fetchPhones();
  }
  renderPhones = () => {
    return this.props.phones.map(phone => {
      return (
        <Link
          to={`/phones/${phone.id}`}
          key={phone.id}
          className="ui centered card"
        >
          <div className="image">
            <img src={`${phone.imageUrl}`} />
          </div>
          <div className="content">
            <a className="header">{phone.name}</a>
          </div>
        </Link>
      );
    });
  };
  render() {
    return <div>{this.renderPhones()}</div>;
  }
}
const mapStatetoProps = state => {
  console.log(state);
  return {
    phones: state.phones
  };
};

export default connect(mapStatetoProps, { fetchPhones })(PhonesPages);
