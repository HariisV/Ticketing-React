import React from "react";
import { Link } from "react-router-dom";

const ManageEmail = (props) => {
  const isEmail = (val) => {
    let regEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEmail.test(val)) {
      return false;
    } else {
      return true;
    }
  };

  const handleNextStep = () => {
    if (props.data.email == "") {
      props.toastError("Email Tidak Boleh Kosong");
    } else if (props.data.password == "") {
      props.toastError("Password Minimal 6 Huruf");
    } else if (!isEmail(props.data.email)) {
      props.toastError("Email Tidak Valid");
    } else {
      props.handleNextStep(2);
    }
  };
  return (
    <>
      <h2 className="form--desc__h2 fw-bold d-sm-block d-md-none">Register</h2>

      <div className="form-group form__password">
        <label htmlFor="" className="form-control-label" /> Email
        <input
          type="email"
          className="form-control"
          placeholder="Write your Email"
          name="email"
          onChange={() => props.handleInput(event)}
          required
        />
      </div>
      <div className="form-group mt-3 mb-3">
        <label htmlFor="" className="form-control-label">
          Password
        </label>
        <div className="form__password input-group">
          <input
            type="password"
            style={{ width: "100%" }}
            className="form-control"
            placeholder="Write your password"
            name="password"
            onChange={() => props.handleInput(event)}
          />
          <span>
            <a className="btn btn-light password__icon">
              <img src="/assets/img/eye.png" height="20px" alt="" />
            </a>
          </span>
        </div>
      </div>

      <button className="btn btn-primary mt-5 mb-3 p-3 btn__login" onClick={handleNextStep}>
        Join for free now
      </button>

      <span className="line">
        <h2 className="m-0">
          <span>or</span>
        </h2>
      </span>
      <p className="text-muted text-center m-0">
        <strong>
          Do you already have an account ?
          <Link to="/login" className="text-primary">
            Log in
          </Link>
        </strong>
      </p>
    </>
  );
};
export default ManageEmail;
