import React, { Component } from "react";
import qs from "query-string";

export default class index extends Component {
  componentDidMount() {
    // No 1
    // const urlParams = qs.parse(this.props.location.search);
<<<<<<< HEAD
    //
    // No 2
    //
    // No 3
=======
    // console.log(urlParams);
    // No 2
    // console.log(this.props.location.state);
    // No 3
    console.log(this.props.match.params);
>>>>>>> 491cf2c3e90cbf476e7cd7e4ffde2dddbe4afae8
  }
  render() {
    return (
      <>
        <h1>Card Components</h1>
      </>
    );
  }
}
