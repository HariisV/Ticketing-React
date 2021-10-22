import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newName: props.userLogin
    };
  }
  handleLogout = () => {
    this.props.history.push("/login");
  };
  render() {
    return (
      <>
        <h1>Navbar Components</h1>
        <Link to="/basic-detail">Detail</Link> | <button onClick={this.handleLogout}>Logout</button>
      </>
    );
  }
}

export default withRouter(Navbar);
