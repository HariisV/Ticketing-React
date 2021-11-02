import React from "react";

export default function email() {
  return (
    <form action="">
      <h2 className="form--desc__h2 fw-bold d-sm-block d-md-none">Register</h2>

      <div className="form-group form__password">
        <label htmlFor="" className="form-control-label" /> Email
        <input type="email" className="form-control" placeholder="Write your Email" />
      </div>
      <div className="form-group mt-3">
        <label htmlFor="" className="form-control-label">
          Password
        </label>
        <div className="form__password input-group">
          <input
            type="password"
            style={{ width: "100%" }}
            className="form-control"
            placeholder="Write your password"
          />
          <span>
            <a className="btn btn-light password__icon">
              <img src="/assets/img/eye.png" height="20px" alt="" />
            </a>
          </span>
        </div>
      </div>
      <div className="form-check mt-4">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          checked
        />
        <label className="form-check-label text-muted text-center" htmlFor="flexCheckDefault">
          I agree to terms & conditions
        </label>
      </div>
      <button className="btn btn-primary mt-4 mb-3 p-3 btn__login">Join for free now</button>
      <p className="text-muted text-center m-0">
        <strong>
          Do you already have an account ?{" "}
          <a href="" className="text-primary">
            Log in
          </a>
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
  );
}
