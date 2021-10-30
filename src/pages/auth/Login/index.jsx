import React, { Component } from "react";
import styles from "./auth.module.css";
import { Link } from "react-router-dom";
import { getSupportInfo } from "prettier";
import axios from "../../../utils/axios";
import { connect } from "react-redux";
import { login } from "../../../stores/actions/auth";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        email: "",
        password: ""
      },
      isError: false,
      msg: "",
      passwordType: "password"
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props
      .login(this.state.form)
      .then((res) => {
        // console.log(res.value.data);
        localStorage.setItem("token", res.value.data.data.token);
        this.props.history.push("/");
      })
      .catch((err) => {
        this.setState({
          isError: true,
          msg: err.response.data.msg
        });
        setTimeout(() => {
          this.setState({
            isError: false,
            msg: ""
          });
        }, 3000);
      });
  };
  handleChangeInput = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value
      }
    });
  };
  showButton = (event) => {
    if (this.state.passwordType == "password") {
      this.setState({
        passwordType: "text"
      });
    } else {
      this.setState({
        passwordType: "password"
      });
    }
  };
  render() {
    return (
      <>
        <div className={`container ${styles.container}`}>
          <main className="row p-0 m-0">
            <section className="hero col-md-7 p-0">
              <span className="hero_overlay">
                <div className="d-flex align-items-center flex-column bd-highlight mb-3">
                  <img
                    src="/assets/img/logo.png"
                    className="p-2 bd-highlight hero__overlay--logo"
                    alt=""
                  />
                  <h2 className="bd-highlight hero__desc">wait, watch, wow !</h2>
                </div>
              </span>
              <img
                src="/assets/img/hero.png"
                className="hero__background"
                style={{ objectFit: "cover" }}
                alt=""
              />
            </section>
            <section className="form col-md-5 align-self-center">
              <div className="p-5">
                <img
                  src="/assets/img/logo-mobile.png"
                  className="mb-5 d-none logo-mobile"
                  alt="Logo Tickez"
                />

                <h2 className="form--desc__h2 fw-bold">Sign In</h2>
                {this.state.isError && (
                  <div className="alert alert-danger alert__login">{this.state.msg}</div>
                )}
                {this.state.isError === false ? (
                  <p className="text-muted mb-4 d-none d-md-block">
                    Sign in with your data that you entered during your registration
                  </p>
                ) : (
                  ""
                )}
                <form action="" onSubmit={this.handleSubmit}>
                  <div className="form-group form__password">
                    <label htmlFor="" className="form-control-label" />
                    Email
                    <input
                      type="email"
                      onChange={this.handleChangeInput}
                      required
                      name="email"
                      className="form-control"
                      placeholder="Write your Email"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="" className="form-control-label">
                      {" "}
                      Password{" "}
                    </label>
                    <div className="form__password input-group">
                      <input
                        type={this.state.passwordType}
                        onChange={this.handleChangeInput}
                        required
                        // style="width: 100%"
                        name="password"
                        className="form-control w-100"
                        placeholder="Write your password"
                      />
                      <span>
                        <button
                          className="btn btn-light password__icon"
                          type="button"
                          onClick={this.showButton}
                        >
                          <img src="/assets/img/eye.png" height="20px" alt="" />
                        </button>
                      </span>
                    </div>
                  </div>
                  <button className="btn btn-primary mt-5 mb-3 p-3 btn__login">Sign In</button>
                  <p className="text-muted text-center m-0">
                    <strong className="forgot__password">
                      forgot your password ?{" "}
                      <Link to="/reset-password" className="text-primary">
                        Reset Now
                      </Link>
                    </strong>
                  </p>
                  <span className="line">
                    <h2 className="m-0">
                      <span>or</span>
                    </h2>
                  </span>
                  <div className="row justify-content-md-center">
                    <div className="col-md-6 col-6 ml-2">
                      <div className="p-0 m-0" style={{ border: "none", borderRadius: "30px" }}>
                        <button className="btn btn-light shadow w-100" style={{ height: "48px" }}>
                          <img src="assets/img/google.png" className="icon" alt="" />
                          <span className="icon__name text-muted">
                            <strong> Google</strong>
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="col-md-6 col-6 mr-2">
                      <div className="p-0 m-0" style={{ border: "none", borderRadius: "30px" }}>
                        <button className="btn btn-light shadow w-100" style={{ height: "48px" }}>
                          <img src="assets/img/facebook.png" className="icon" alt="" />
                          <span className="icon__name text-muted">
                            <strong> Facebook</strong>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </section>
          </main>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth
});
const mapDispatchToProps = { login };
export default connect(mapStateToProps, mapDispatchToProps)(Login);
