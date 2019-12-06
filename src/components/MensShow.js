import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class MensShow extends Component {
  render() {
    return <div>check indivudal mens clothes here</div>;
  }
}

const mapStateToProps = state => {
  console.log("state", state);
  return { state };
};

export default connect(mapStateToProps)(MensShow);
