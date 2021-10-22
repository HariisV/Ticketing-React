import React, { Component } from "react";
import axios from "../../../utils/axios";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        email: "",
        password: ""
      },
      isError: false,
      msg: ""
    };
  }

  handleChangeForm = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value
      }
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("auth/login", this.state.form)
      .then((res) => {
        localStorage.setItem("token", res.data.data.token);
        this.props.history.push("/basic-react");
      })
      .catch((err) => {
        this.setState({
          isError: true,
          msg: err.response.data.msg
        });
      });
  };

  render() {
    return (
      <>
        <h1>Login Pages</h1>
        <hr />
        {this.state.isError && <div className="alert alert-danger">{this.state.msg}</div>}
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            placeholder="Input Email"
            name="email"
            onChange={this.handleChangeForm}
          />
          <br />
          <input
            type="password"
            placeholder="Input Password"
            name="password"
            onChange={this.handleChangeForm}
          />
          <br />
          <button className="btn btn-outline-primary" type="reset">
            reset
          </button>
          <button className="btn btn-primary" type="submit">
            submit
          </button>
        </form>
      </>
    );
  }
}
