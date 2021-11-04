import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import SettingAccount from "../../../components/SettingAccount";
import HistoryOrder from "../../../components/HistoryOrder";
import { connect } from "react-redux";
import { getTicketByIdUser, updatePassword, updateProfile } from "../../../stores/actions/profile";
import { login, getUserById } from "../../../stores/actions/auth";

const Profile = (props) => {
  const [isShowSetting, setShowSetting] = useState(false);
  const [profileData, setProfileData] = useState({});
  const [listTicket, setListTicket] = useState([]);
  const handleInput = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    props.getTicketByIdUser(props.auth.id);
  }, []);
  useEffect(() => {
    setProfileData({
      email: props.auth.email,
      firstName: props.auth.firstName,
      lastName: props.auth.lastName,
      phoneNumber: props.auth.phoneNumber,
      newPassword: "",
      confirmPassword: ""
    });
  }, [props.auth]);
  const handleNotify = (data, status) =>
    (status === "OK" ? toast.success : toast.error)(data, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored"
    });

  const handleSubmit = () => {
    if (profileData.newPassword) {
      if (profileData.newPassword.length < 6) {
        handleNotify("Password Minimal 6 Huruf", "ERR");
      } else if (profileData.newPassword !== profileData.confirmPassword) {
        handleNotify("Konfirmasi Password Salah", "ERR");
      } else {
        props.updatePassword(profileData).then((res) => {
          handleNotify("Sukses Mengganti Password !", "OK");
        });
      }
    }
    props.updateProfile(profileData).then((res) => {
      handleNotify("Sukses Memperbarui Data !", "OK");
      props.getUserById(res.value.data.data.id);
    });
  };
  return (
    <>
      <Header />
      <div style={{ backgroundColor: "#f5f6f8" }}>
        <div className="container">
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
                    <img
                      src={
                        props.auth.image
                          ? `/assets/img/${props.auth.image}`
                          : "/assets/img/avatar.png"
                      }
                      className="img__profile rounded-circle"
                      alt=""
                    />
                    <div className="text mt-4  mb-5">
                      <p className="p-0 m-0 profile__name">
                        {props.auth.firstName + " " + props.auth.lastName}
                      </p>
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
                  {isShowSetting ? (
                    <SettingAccount
                      handleInput={handleInput}
                      data={profileData}
                      handleSubmit={handleSubmit}
                    />
                  ) : (
                    <HistoryOrder data={props.ticket} />
                  )}
                </div>
              </section>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth.userLogin, ticket: state.profile.dataTicket };
};
const mapDispatchToProps = {
  getTicketByIdUser,
  updatePassword,
  updateProfile,
  getUserById
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Profile));
