import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "../../utils/axios";
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
      .get("/user/city")
      .then((res) => {
        this.setState({
          city: res.data.data
        });
      })
      .catch((err) => {
        console.log("TIDAK AD KOTA");
      });
  };
  render() {
    return (
      <>
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
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/booking.html">
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/payment.html">
                    Payment
                  </a>
                </li>

                <li className="nav-item d-none-desktop">
                  <p className="text-center footer__end">© 2020 Tickitz. All Rights Reserved.</p>
                </li>
              </ul>
              <div className="navbar__right">
                <form className="d-flex">
                  <select className="form-select border-0">
                    <option value="Jakarta">Location</option>
                    {this.state.city.map((item, index) => (
                      <option value={item.name} key={index}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </form>
                <img src="/assets/icon/search.svg" className="mx-4" alt="" />
                <img src="/assets/img/avatar.png" className="avatar rounded-circle" alt="" />
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default withRouter(Navbar);
