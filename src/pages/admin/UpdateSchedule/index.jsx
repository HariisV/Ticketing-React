import React, { useState, useEffect } from "react";
import Header from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import axios from "../../../utils/axios";

const UpdateSchedule = () => {
  const [allMovie, setAllMovie] = useState([]);
  const [city, setCity] = useState([]);
  const [isAddTime, setAddTime] = useState(false);

  useEffect(() => {
    getAllMovie();
    getCity();
  }, []);

  const getAllMovie = () => {
    axios
      .get("/movie?page=1&limit=5000")
      .then((res) => {
        setAllMovie(res.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  const getCity = () => {
    axios
      .get("https://dev.farizdotid.com/api/daerahindonesia/provinsi")
      .then((res) => {
        setCity(res.data.provinsi);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    //   console.log();
    <>
      <div className="container">
        <Header />
        <section className="heroo_details heroo__kecilin--width mt-5">
          <p className="mt-5 title__sort">Form Create Schedule</p>
          {/* <p className="mt-5 title__sort">Form Update Schedule</p> */}
          <div className="row">
            <div className="col-md-2 col-lg-3 col-xl-2 col-sm-12">
              <div
                className="
                heroo__details--border
                d-flex
                justify-content-center
                heroo__update
              "
              >
                <div className="heroo__details--card">
                  <img src="/assets/img/movie2.png" className="update__movie--img" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-10 col-lg-9 col-xl-9 col-sm-12 heroo__margin">
              <div className="row">
                <div className="col-md-6">
                  <div className="personal_info mx-0">
                    <div className="form-group">
                      <label htmlFor="fn">Movie Name</label>
                      <select name="movie_name" className="form-select movie__name--search">
                        {allMovie.map((element) => (
                          <option value={element.id} key={element.id}>
                            {element.id} | {element.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="personal_info mx-0">
                    <div className="form-group">
                      <label htmlFor="fn">City</label>
                      <select name="movie_name" className="form-select movie__name--search">
                        {city.map((element) => (
                          <option value={element.nama} key={element.nama}>
                            {element.nama}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="personal_info mx-0">
                    <div className="form-group">
                      <label htmlFor="fn">Price</label>
                      <input
                        type="number"
                        className="form-control movie__name--search"
                        placeholder="Price"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="personal_info mx-0">
                        <div className="form-group">
                          <label htmlFor="fn">Date Start</label>
                          <input
                            id="fn"
                            type="date"
                            className="form-control movie__name--search"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="personal_info mx-0">
                        <div className="form-group">
                          <label htmlFor="fn">Date End</label>
                          <input
                            id="fn"
                            type="date"
                            className="form-control movie__name--search"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="personal_info mx-0">
                    <label htmlFor="fn">Premier</label>
                    <div className="d-flex">
                      <div className="card-body">
                        <img src="/assets/img/sponsor1.png" className="sponsor__list" alt="" />
                      </div>
                      <div className="card-body">
                        <img src="/assets/img/sponsor3.png" alt="" className="sponsor__list" />
                      </div>
                      <div className="card-body">
                        <img src="/assets/img/sponsor2.png" alt="" className="sponsor__list" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="personal_info mx-0">
                    <div className="form-group">
                      <label htmlFor="fn">Time</label>
                      <div className="row text-center">
                        <div
                          className={`input-group input-group-sm mb-3 p-3 ${
                            isAddTime ? "d-flex" : "d-none"
                          }`}
                        >
                          <input type="text" className="form-control" placeholder="Time" />
                          <button
                            className={"btn btn-outline-secondary"}
                            type="button"
                            id="button-addon2"
                          >
                            Add
                          </button>
                        </div>
                        <div className="col-3 card-body">
                          <button
                            className="
                            btn btn-outline-primary
                            text-primary
                            tambah__time"
                            onClick={() => (isAddTime ? setAddTime(false) : setAddTime(true))}
                          >
                            +
                          </button>
                        </div>
                        <div className="col-3 card-body">08:30am</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-end">
            <button className="btn btn-outline-primary update__movie--btn">Reset</button>
            <button className="btn btn-primary update__movie--btn">Submit</button>
          </div>
        </section>
      </div>
      <section className="showtimes text-center">
        <div className="container timesticket text-start">
          <div className="updateMovie d-flex justify-content-between mt-5">
            <p className="mt-5 title__sort">Data Schedule</p>
            <div className="personal_info mx-0 mt-5">
              <div className="d-flex">
                <div className="dropdown">
                  <a
                    className="btn btn-light dropdown-toggle dropdown__schedule"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Sort
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li>
                      <a className="dropdown-item" href="/booking.html">
                        Booking
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/payment.html">
                        Payment
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/details.html">
                        Details Page
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/login.html">
                        Login
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="dropdown">
                  <a
                    className="btn btn-light dropdown-toggle dropdown__schedule"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Location
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li>
                      <a className="dropdown-item" href="/booking.html">
                        Booking
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/payment.html">
                        Payment
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/details.html">
                        Details Page
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/login.html">
                        Login
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="dropdown">
                  <a
                    className="btn btn-light dropdown-toggle dropdown__schedule"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Movie
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li>
                      <a className="dropdown-item" href="/booking.html">
                        Booking
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/payment.html">
                        Payment
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/details.html">
                        Details Page
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/login.html">
                        Login
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <section id="List Movie">
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
                    <div className="row">
                      <div className="col-6">
                        <button className="btn btn-outline-primary w-100 mt-4 mb-3 shadow">
                          Update
                        </button>
                      </div>
                      <div className="col-6">
                        <button className="btn btn-outline-danger w-100 mt-4 mb-3 shadow">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="showtimes__paginate mb-5">
          <div className="d-flex justify-content-center">
            <div className="paginate active">
              <a className="btn btn-primary"> 1 </a>
            </div>
            <div className="paginate">
              <a className="btn btn-outline-primary shadow"> 2 </a>
            </div>
            <div className="paginate">
              <a className="btn btn-outline-primary shadow"> 3 </a>
            </div>
            <div className="paginate">
              <a className="btn btn-outline-primary shadow"> 4 </a>
            </div>
            <div className="paginate">
              <a className="btn btn-outline-primary shadow"> 5 </a>
            </div>
          </div>
        </div>
        <br />
      </section>
      <Footer />
    </>
  );
};

export default UpdateSchedule;
