import React, { useState, useEffect } from "react";
import styles from "./register.module.css";
import RegisterEmail from "../../../components/Register/email";
import RegisterData from "../../../components/Register/data";
import RegisterConfirm from "../../../components/Register/confirm";
import RegisterSuccess from "../../../components/Register/success";
import { registerUser } from "../../../stores/actions/register";
import { connect } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterPage = (props) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: ""
  });
  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = () => {
    registerUser(formData);
    setStep(3);
  };
  const toastError = (data) => {
    toast.error(data, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored"
    });
  };
  // console.log(props.location.search);
  return (
    <>
      <div className={`container ${styles.container}`}>
        <div>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
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
                    <div
                      className={`stepper__list ${
                        step == 1 && props.location.search !== "?page=success"
                          ? "stepper__list--active"
                          : ""
                      }`}
                    >
                      Fill Your Complete Email
                    </div>
                    <div className="stepper__list--line"></div>
                    <div className={`stepper__list ${step == 2 ? "stepper__list--active" : ""}`}>
                      Who Are You ?
                    </div>
                    <div className="stepper__list--line"></div>
                    <div className={`stepper__list ${step == 3 ? "stepper__list--active" : ""}`}>
                      Verify Your Email
                    </div>
                    <div className="stepper__list--line"></div>
                    <div
                      className={`stepper__list ${
                        step == 4 || props.location.search == "?page=success"
                          ? "stepper__list--active"
                          : ""
                      }`}
                    >
                      Done
                    </div>
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
              <p className="fw-bold h5 mb-5 d-none d-md-block">Fill your additional details</p>
              {/* <RegisterConfirm data={formData} /> */}
              {/* <RegisterSuccess /> */}
              {props.location.search == "?page=success" ? (
                <RegisterSuccess />
              ) : step == 1 ? (
                <RegisterEmail
                  data={formData}
                  toastError={toastError}
                  handleInput={handleInput}
                  handleNextStep={setStep}
                />
              ) : step == 2 ? (
                <RegisterData
                  data={formData}
                  toastError={toastError}
                  handleInput={handleInput}
                  handleSubmit={handleSubmit}
                />
              ) : step == 3 ? (
                <RegisterConfirm data={formData} />
              ) : step == 4 ? (
                <RegisterSuccess />
              ) : (
                <RegisterEmail />
              )}
            </div>
          </section>
        </main>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return { registerUser: state.register };
};
const mapDispatchToProps = {
  registerUser
};
export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
