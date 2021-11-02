import React, { useState, useEffect } from "react";
import Header from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import SettingAccount from "../../../components/SettingAccount";
import HistoryOrder from "../../../components/HistoryOrder";
const Profile = () => {
  const [isShowSetting, setShowSetting] = useState(false);

  return (
    <>
      <div className="container">
        <Header />
        <main className="row">
          <div className="col-md-0 col-lg-3 personal__margin  d-md-none d-lg-block">
            <h5 className="mt-5 selected__movie--title title__hide d-none d-md-block">
              Personal Info
            </h5>
            <div className="card card-body">
              <div className="personal_info mx-3 mt-3">
                <div className="d-flex justify-content-between">
                  <p className="align-self-center mt-3">INFO</p>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn "
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      ...
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Separated link
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="text-center">
                  <img src="/assets/img/avatar.png" className="img__profile" alt="" />
                  <div className="text mt-4  mb-5">
                    <p className="p-0 m-0 profile__name">Jonas El Rodriguez</p>
                    <small>Moviegoers</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-9">
            <section className="order_history ">
              <h5 className="mt-5 selected__movie--title">Payment Info</h5>
              <div className="card card-body p-1">
                <ul className="nav nav-tabs d-none d-md-flex d-lg-flex d-xl-flex">
                  <li className="nav-item">
                    <button
                      className={`nav-link tab__bar--text ${!isShowSetting ? "active" : ""}`}
                      onClick={() => setShowSetting(false)}
                    >
                      Order History
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link tab__bar--text ${isShowSetting ? "active" : ""} `}
                      onClick={() => setShowSetting(true)}
                    >
                      Account Setting
                    </button>
                  </li>
                </ul>
                {isShowSetting ? <SettingAccount /> : <HistoryOrder />}
              </div>
            </section>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};
export default Profile;
