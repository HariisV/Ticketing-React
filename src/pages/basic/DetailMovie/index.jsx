import React, { Component } from "react";
import qs from "query-string";

export default class index extends Component {
  componentDidMount() {
    // No 1
    // const urlParams = qs.parse(this.props.location.search);
    // console.log(urlParams);
    // No 2
    // console.log(this.props.location.state);
    // No 3
    console.log(this.props.match.params);
  }
  render() {
    return (
      <>
        <h1>Card Components</h1>
      </>
    );
  }
}
