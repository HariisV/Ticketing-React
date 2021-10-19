import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar/navbar2";
import Footer from "../../../components/Footer";
class MovieDetail extends Component {
  render() {
    return (
      <>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light mt-3">
            <div className="container-fluid">
              <Link className="navbar-brand" href="/">
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
                    <Link className="nav-link active" aria-current="page" href="/">
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" href="/booking.html">
                      Profile
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/payment.html">
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
                  <img src="/assets/img/avatar.png" className="avatar rounded-circle" alt="" />
                </div>
              </div>
            </div>
          </nav>
          <section className="heroo_details mt-5">
            <div className="row">
              <div className="col-md-3 col-lg-4 col-xl-3 col-sm-12">
                <div className="heroo__details--border d-flex justify-content-center">
                  <div className="heroo__details--card">
                    <img src="/assets/img/movie2.png" className="heroo__details--image" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-lg-7 col-xl-8 col-sm-12 heroo__margin">
                <h3 className="heroo__details--title">Spider-man: Homecoming</h3>
                <p className="heroo_details--category">Adventurer, Action, Sci-Fi</p>

                <table className="table mt-3 table__detail--movie">
                  <tr>
                    <td>
                      Release Date
                      <h5>June 28, 2017</h5>
                    </td>
                    <td>
                      Directed By
                      <h5>Jon Wats</h5>
                    </td>
                  </tr>
                  <tr style={{ borderTop: "none" }}>
                    <td>
                      Duration
                      <h5>2 Hours 13 Minutes</h5>
                    </td>
                    <td>
                      Casts
                      <h5>Tom Holland, Michael Keaten,Robert Downey Jr,...</h5>
                    </td>
                  </tr>
                </table>
                <hr />
                <h4 className="mb-4">Sypnosis</h4>
                <p className="heroo_details--sypnosis">
                  Thrilled by his experience with the Avengers, Peter returns home, where he lives
                  with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter
                  tries to fall back into his normal daily routine - distracted by thoughts of
                  proving himself to be more than just your friendly neighborhood Spider-Man - but
                  when the Vulture emerges as a new villain, everything that Peter holds most
                  important will be threatened.
                </p>
              </div>
            </div>
          </section>
        </div>

        <section className="showtimes text-center">
          <br />
          <h4 className="mt-5">Showtimes and Tickets</h4>
          <div className="d-flex justify-content-center showtimes__input mb-5">
            <div className="input-group showtimes__input--wrapper">
              <span className="input-group-text bginput__blue">
                <img src="/assets/icon/date.svg" alt="" />
              </span>
              <input type="date" className="form-control bginput__blue" />
            </div>
            <div className="input-group">
              <span className="input-group-text bginput__blue">
                <img src="/assets/icon/location.svg" alt="" />
              </span>
              <select className="form-select bginput__blue" aria-label="Default select example">
                <option selected>Purwokerto</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="container timesticket text-start">
            <div className="row">
              <div className="col-md-4">
                <div className="card card-body timesticket__list">
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        src="/assets/img/sponsor1.png"
                        className="showtimes__sponsor--image"
                        alt=""
                      />
                    </div>
                    <div className="col-md-8">
                      <span className="shotimes__sponsor--name">ebu.id</span>
                      <br />
                      <p className="p-0 m-0 shotimes__sponsor--address">
                        Whatever street No.12, South Purwokerto
                      </p>
                    </div>
                    <hr className="timesticket__hr" />
                    <div className="row timesticket__details--time">
                      <div className="col-3 timesticket__details--selected">08:30am</div>
                      <div className="col-3">08:30am</div>
                      <div className="col-3">08:30am</div>
                      <div className="col-3">08:30am</div>
                      <div className="col-3">08:30am</div>
                      <div className="col-3">08:30am</div>
                      <div className="col-3">08:30am</div>
                    </div>
                    <div className="timesticket__price mt-4">
                      <small className="d-inline text-muted">Price</small>
                      <strong
                        className="timesticket__price--seat fw-bold"
                        style={{ float: "right" }}
                      >
                        $10.00 / seat
                      </strong>
                    </div>
                    <Link to="/booking" className="btn btn-primary w-100 mt-4 mb-3 shadow">
                      Book now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-body timesticket__list">
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        src="/assets/img/sponsor2.png"
                        className="showtimes__sponsor--image"
                        alt=""
                      />
                    </div>
                    <div className="col-md-8">
                      <span className="shotimes__sponsor--name">CineOne21</span>
                      <br />
                      <p className="p-0 m-0 shotimes__sponsor--address">
                        Whatever street No.12, South Purwokerto
                      </p>
                    </div>
                    <hr className="timesticket__hr" />
                    <div className="row timesticket__details--time">
                      <div className="col-3 timesticket__details--selected">08:30am</div>
                      <div className="col-3">08:30am</div>
                      <div className="col-3">08:30am</div>
                      <div className="col-3">08:30am</div>
                      <div className="col-3">08:30am</div>
                      <div className="col-3">08:30am</div>
                      <div className="col-3">08:30am</div>
                    </div>
                    <div className="timesticket__price mt-4">
                      <small className="d-inline text-muted">Price</small>
                      <strong
                        className="timesticket__price--seat fw-bold"
                        style={{ float: "right" }}
                      >
                        $10.00 / seat
                      </strong>
                    </div>
                    <Link to="/booking" className="btn btn-primary w-100 mt-4 mb-3 shadow">
                      Book now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-body timesticket__list">
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        src="/assets/img/sponsor3.png"
                        className="showtimes__sponsor--image"
                        alt=""
                      />
                    </div>
                    <div className="col-md-8">
                      <span className="shotimes__sponsor--name">hiFlix</span>
                      <br />
                      <p className="p-0 m-0 shotimes__sponsor--address">
                        Whatever street No.12, South Purwokerto
                      </p>
                    </div>
                    <hr className="timesticket__hr" />
                    <div className="row timesticket__details--time">
                      <div className="col-3 timesticket__details--selected">08:30am</div>
                      <div className="col-3">08:30am</div>
                      <div className="col-3">08:30am</div>
                      <div className="col-3">08:30am</div>
                      <div className="col-3">08:30am</div>
                      <div className="col-3">08:30am</div>
                      <div className="col-3">08:30am</div>
                    </div>
                    <div className="timesticket__price mt-4">
                      <small className="d-inline text-muted">Price</small>
                      <strong
                        className="timesticket__price--seat fw-bold"
                        style={{ float: "right" }}
                      >
                        $10.00 / seat
                      </strong>
                    </div>
                    <Link to="/booking" className="btn btn-primary w-100 mt-4 mb-3 shadow">
                      Book now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-body timesticket__list">
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        src="/assets/img/sponsor1.png"
                        className="showtimes__sponsor--image"
                        alt=""
                      />
                    </div>
                    <div className="col-md-8">
                      <span className="shotimes__sponsor--name">ebu.id</span>
                      <br />
                      <p className="p-0 m-0 shotimes__sponsor--address">
                        Whatever street No.12, South Purwokerto
                      </p>
                    </div>
                    <hr className="timesticket__hr" />
                    <div className="row timesticket__details--time">
                      <div className="col-3 timesticket__details--selected">08:30am</div>
                      <div className="col-3">08:30am</div>
                      <div className="col-3">08:30am</div>
                      <div className="col-3">08:30am</div>
                      <div className="col-3">08:30am</div>
                      <div className="col-3">08:30am</div>
                      <div className="col-3">08:30am</div>
                    </div>
                    <div className="timesticket__price mt-4">
                      <small className="d-inline text-muted">Price</small>
                      <strong
                        className="timesticket__price--seat fw-bold"
                        style={{ float: "right" }}
                      >
                        $10.00 / seat
                      </strong>
                    </div>
                    <Link to="/booking" className="btn btn-primary w-100 mt-4 mb-3 shadow">
                      Book now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-body timesticket__list">
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        src="/assets/img/sponsor2.png"
                        className="showtimes__sponsor--image"
                        alt=""
                      />
                    </div>
                    <div className="col-md-8">
                      <span className="shotimes__sponsor--name">CineOne21</span>
                      <br />
                      <p className="p-0 m-0 shotimes__sponsor--address">
                        Whatever street No.12, South Purwokerto
                      </p>
                    </div>
                    <hr className="timesticket__hr" />
                    <div className="row timesticket__details--time">
                      <div className="col-3 timesticket__details--selected">08:30am</div>
                      <div className="col-3">08:30am</div>
                      <div className="col-3">08:30am</div>
                      <div className="col-3">08:30am</div>
                      <div className="col-3">08:30am</div>
                      <div className="col-3">08:30am</div>
                      <div className="col-3">08:30am</div>
                    </div>
                    <div className="timesticket__price mt-4">
                      <small className="d-inline text-muted">Price</small>
                      <strong
                        className="timesticket__price--seat fw-bold"
                        style={{ float: "right" }}
                      >
                        $10.00 / seat
                      </strong>
                    </div>
                    <Link to="/booking" className="btn btn-primary w-100 mt-4 mb-3 shadow">
                      Book now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-body timesticket__list">
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        src="/assets/img/sponsor3.png"
                        className="showtimes__sponsor--image"
                        alt=""
                      />
                    </div>
                    <div className="col-md-8">
                      <span className="shotimes__sponsor--name">hiFlix</span>
                      <br />
                      <p className="p-0 m-0 shotimes__sponsor--address">
                        Whatever street No.12, South Purwokerto
                      </p>
                    </div>
                    <hr className="timesticket__hr" />
                    <div className="row timesticket__details--time">
                      <div className="col-3 timesticket__details--selected">08:30am</div>
                      <div className="col-3">08:30am</div>
                      <div className="col-3">08:30am</div>
                      <div className="col-3">08:30am</div>
                      <div className="col-3">08:30am</div>
                      <div className="col-3">08:30am</div>
                      <div className="col-3">08:30am</div>
                    </div>
                    <div className="timesticket__price mt-4">
                      <small className="d-inline text-muted">Price</small>
                      <strong
                        className="timesticket__price--seat fw-bold"
                        style={{ float: "right" }}
                      >
                        $10.00 / seat
                      </strong>
                    </div>
                    <Link to="/booking" className="btn btn-primary w-100 mt-4 mb-3 shadow">
                      Book now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="showtimes__paginate mb-5">
            <div className="d-flex justify-content-center">
              <div className="paginate active">
                <Link className="btn btn-primary"> 1 </Link>
              </div>
              <div className="paginate">
                <Link className="btn btn-outline-primary shadow"> 2 </Link>
              </div>
              <div className="paginate">
                <Link className="btn btn-outline-primary shadow"> 3 </Link>
              </div>
              <div className="paginate">
                <Link className="btn btn-outline-primary shadow"> 4 </Link>
              </div>
              <div className="paginate">
                <Link className="btn btn-outline-primary shadow"> 5 </Link>
              </div>
            </div>
          </div>
          <br />
        </section>
        <Footer />
      </>
    );
  }
}

export default MovieDetail;
