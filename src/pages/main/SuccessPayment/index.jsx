import React, { Component } from "react";
import "./index.css";
import { Link } from "react-router-dom";

class SuccessPayment extends Component {
  constructor() {
    super();
    this.state = {
      isLoad: false
    };
  }

  render() {
    setTimeout(() => {
      this.setState({
        isLoad: true
      });
    }, 3000);

    setTimeout(() => {
      this.props.history.push("/");
    }, 10000);
    return (
      <>
        <div
          className={`loader-wrapper ${this.state.isLoad == true ? "d-none" : ""}`}
          style={{ zIndex: "1" }}
        >
          <div className="loader"></div>
        </div>
        <div className="container-fluid success__bg">
          <section className="SuccessPayment">
            <div className="text-center active">
              <div className="success-message active">
                <svg viewBox="0 0 76 76" className="success-message__icon icon-checkmark active">
                  <circle cx="38" cy="38" r="36" />
                  <path
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="M17.7,40.9l10.9,10.9l28.7-28.7"
                  />
                </svg>
                <h1 className="success-message__title active">Payment Success</h1>
                <div className="success-message__content active">
                  <p>Your Payment Hasbeen Success </p>
                </div>
                <Link to="/" className="btn btn-outline-success">
                  Back To Home
                </Link>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default SuccessPayment;
