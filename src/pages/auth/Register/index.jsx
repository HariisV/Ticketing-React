import React from "react";
import styles from "./register.module.css";

export default function index() {
  return (
    <>
      <div className={`container ${styles.container}`}>
        <main className="row p-0 m-0">
          <section className="hero col-md-7 p-0">
            <span className="register__overlay">
              <div className="bd-highlight mb-3 mx-5 mt-5">
                <div className="register__overlay--logo">
                  <img src="/assets/img/logo.png" className="register__overlay--img" alt="" />
                </div>
                <div className="text-white mt-5">
                  <h5 className="register__overlay--title">Lets build your account</h5>
                  <p className="register__overlay--desc mt-4 mb-4">
                    To be a loyal moviegoer and access all of features, <br />
                    your details are required.
                  </p>
                  <div className="stepper">
                    <div className="stepper__list stepper__list--active">
                      Fill Your Complete Email
                    </div>
                    <div className="stepper__list--line"></div>
                    <div className="stepper__list">Activate your account</div>
                    <div className="stepper__list--line"></div>
                    <div className="stepper__list">Verify Your Email</div>
                    <div className="stepper__list--line"></div>
                    <div className="stepper__list">Done</div>
                  </div>
                </div>
              </div>
            </span>
            <img
              src="/assets/img/hero.png"
              className="hero__background"
              style={{ objectFit: " cover" }}
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
              <p className="fw-bold h5 mb-5 d-none d-md-block">Fill your additional details</p>
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
                  <label
                    className="form-check-label text-muted text-center"
                    htmlFor="flexCheckDefault"
                  >
                    I agree to terms & conditions
                  </label>
                </div>
                <button className="btn btn-primary mt-4 mb-3 p-3 btn__login">
                  Join for free now
                </button>
                <p className="text-muted text-center m-0">
                  <strong>
                    Do you already have an account?{" "}
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
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
