import React from "react";
import styles from "./register.module.css";
import RegisterEmail from "../../../components/Register/email";
import RegisterData from "../../../components/Register/data";

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
                    <div className="stepper__list">Who Are You ?</div>
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
              <p className="fw-bold h5 mb-5 d-none d-md-block">Fill your additional details</p>
              {/* <RegisterEmail /> */}
              <RegisterData />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
