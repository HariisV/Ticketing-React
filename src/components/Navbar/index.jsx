import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
class Navbar extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     newName: props.userLogin
  //   };
  // }
  // handleLogout = () => {
  //   this.props.history.push("/login");
  // };
  render() {
    return (
      <>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light mt-3">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                <img src="/assets/img/logo-sm.svg" alt="" />
              </Link>
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
                          <img src={"../../../assets/icon/search.svg"} alt="" />
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
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/booking.html">
                      Profile
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/payment.html">
                      Payment
                    </Link>
                  </li>

                  <li className="nav-item d-none-desktop">
                    <p className="text-center footer__end">© 2020 Tickitz. All Rights Reserved.</p>
                  </li>
                </ul>
                <div className="navbar__right">
                  <form className="d-flex">
                    <select className="form-select border-0">
                      <option selected>Location</option>
                      <option value="1">Jakarta</option>
                      <option value="2">Medan</option>
                      <option value="3">Pekan Baru</option>
                    </select>
                  </form>
                  <img src="/assets/icon/search.svg" className="mx-4" alt="" />
                  <Link to="/login" className="btn btn-primary px-4">
                    {" "}
                    Sign Up{" "}
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
  }
}

export default withRouter(Navbar);
