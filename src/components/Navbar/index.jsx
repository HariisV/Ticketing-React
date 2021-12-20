import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "../../utils/axios";
import { connect } from "react-redux";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      city: []
    };
  }

  componentDidMount() {
    this.getCity();
  }
  getCity = () => {
    axios
      .get("https://dev.farizdotid.com/api/daerahindonesia/provinsi")
      .then((res) => {
        this.setState({
          city: res.data.provinsi
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  handleLogout = () => {
    localStorage.clear();
    this.props.history.push("/login");
  };
  render() {
    const isLogin = localStorage.getItem("token");
    let isAdmin = localStorage.getItem("persist:root");
    if (isAdmin) {
      isAdmin = JSON.parse(isAdmin).auth;
      isAdmin = JSON.parse(isAdmin).userLogin.role;
      isAdmin = isAdmin == "admin" ? "admin" : false;
    } else {
      isAdmin = "unAuth";
    }
    console.log(isAdmin);
    return (
      <>
        <div className="container mt-3">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <a className="navbar-brand" href="/">
                <img src="/assets/img/logo-sm.svg" alt="" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span>
                  <img src="/assets/icon/toggle.svg" alt="" />
                </span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto">
                  <li className="nav-item d-none-desktop">
                    <div className="form-group">
                      <div className="input-group mb-3">
                        <span className="input-group-text bg-light navbar__input--btnsearch">
                          <img src="/assets/icon/search.svg" alt="" />
                        </span>
                        <input
                          id="ph"
                          type="number"
                          className="form-control navbar__input--search"
                          placeholder="Search..."
                        />
                      </div>
                    </div>
                  </li>
                  {isLogin &&
                    (isAdmin == "admin" ? (
                      <>
                        <li className="nav-item">
                          <Link className="nav-link active" aria-current="page" to="/dashboard">
                            Dashboard
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link className="nav-link" to="/movies/create">
                            Manage Movie
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/schedule/create">
                            Manage Schedule
                          </Link>
                        </li>
                      </>
                    ) : isAdmin == "unAuth" ? (
                      ""
                    ) : (
                      <>
                        <li className="nav-item">
                          <Link className="nav-link active" aria-current="page" to="/">
                            Home
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link className="nav-link" to="/profile">
                            Profile
                          </Link>
                        </li>
                      </>
                    ))}

                  <li className="nav-item d-none-desktop">
                    <p className="text-center footer__end">© 2020 Tickitz. All Rights Reserved.</p>
                  </li>
                </ul>
                <div className="navbar__right">
                  <form className="d-flex">
                    <select className="form-select border-0">
                      <option value="Jakarta">Location</option>
                      {this.state.city.map((item, index) => (
                        <option value={item.nama} key={index}>
                          {item.nama}
                        </option>
                      ))}
                    </select>
                  </form>
                  <img src="/assets/icon/search.svg" className="mx-4" alt="" />

                  {this.props.auth.id ? (
                    <div className="dropdown">
                      <a
                        className="btn  btn-sm"
                        href="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          src={
                            this.props.auth.image
                              ? `/assets/img/${this.props.auth.image}`
                              : "/assets/img/avatar.png"
                          }
                          className="avatar rounded-circle"
                          alt=""
                        />
                      </a>

                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li>
                          <Link className="dropdown-item" to="/profile">
                            Profile
                          </Link>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            to="/profile"
                            onClick={this.handleLogout}
                          >
                            Logout
                          </button>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <Link to="/register" className="btn btn-primary px-4">
                      Sign Up
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
  }
}
// NGAMBIL STATE DARI STORE
const mapStateToProps = (state) => {
  return { auth: state.auth.userLogin };
};
export default connect(mapStateToProps)(withRouter(Navbar));
