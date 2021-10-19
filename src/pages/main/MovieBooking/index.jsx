import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar/navbar2";
import Footer from "../../../components/Footer";
import styles from "./MovieBooking.module.css";
class MovieBooking extends Component {
  render() {
    return (
      <div className={`${styles.bodys}`} style={{ padding: "0", margin: "0" }}>
        <Navbar />
        <div className="container">
          <main className="row">
            <div className="col-md-8">
              <section className="selected__movie--selection">
                <h5 className="mt-5 selected__movie--title">Movie Selected</h5>
                <div className="card card-body p-1">
                  <div className="d-flex selected__movie mx-3">
                    <h5>Spider-Man: Homecoming</h5>
                    <Link to="/" className="btn btn-outline-primary">
                      Change movie
                    </Link>
                  </div>
                </div>
              </section>
              <section id="listSeaet">
                <h5 className="mt-4 selected__movie--title">Chose Your Seat</h5>
                <div className="card card-body p-1">
                  <div className="text-center selected__seat">
                    <img src="/assets/img/seat.png" className="image__seat" alt="" />
                    <div className="desktop__selected--seat selected__seat--key  mt-3">
                      <h5 className="text-start mb-3">Seating key</h5>
                      <div className="d-flex text-center">
                        <p className="selected__seat--wrapper">
                          <div className="selected__seat--available"></div>
                          Available
                        </p>
                        <p className="selected__seat--wrapper">
                          <div className="selected__seat--selected"></div>
                          selected
                        </p>
                        <p className="selected__seat--wrapper">
                          <div className="selected__seat--love"></div>
                          Love nest
                        </p>
                        <p className="selected__seat--wrapper">
                          <div className="selected__seat--sold"></div>
                          Sold
                        </p>
                      </div>
                    </div>
                    <div className="mobile__selected--seat  mt-3 mx-2">
                      <h5 className="text-start mb-3 ml-3">Seating key</h5>
                      <div className="mobile__list--items">
                        <img src="/assets/icon/bawah.svg" alt="" />
                        A-G
                        <span>
                          <img src="/assets/icon/kanan.svg" alt="" />
                          1-14
                        </span>
                      </div>
                      <div className="mobile__list--item d-flex mt-4">
                        <div className="selected__seat--available"></div>
                        Available
                        <span>
                          <div className="selected__seat--selected"></div>
                          selected
                        </span>
                      </div>
                      <div className="mobile__list--item d-flex mt-3">
                        <div className="selected__seat--love"></div>
                        Love nest
                        <span>
                          <div className="selected__seat--sold"></div>
                          Sold
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-4 selected__movie--btn">
                  <Link to="/" className="btn btn-outline-primary">
                    change your movie
                  </Link>
                  <Link to="/checkout" className="btn btn-primary">
                    checkout now
                  </Link>
                </div>
              </section>
            </div>
            <div className="col-md-4">
              <h5 className="mt-5 selected__movie--title">Order Info</h5>
              <div className="card card-body">
                <div className="order__sponsor mx-0 ">
                  <div className="order__sponsor--header text-center">
                    <img src="/assets/img/sponsor2.png" className="order__sponsor--image" alt="" />
                    <p className="order__sponsor--title mb-4">CineOne21 Cinema</p>
                  </div>
                  <div className="mt-4 order__sponsor--name d-flex justify-content-between">
                    <p className="order__sponsor--info order__sponsor--selectedname">
                      Movie selected
                    </p>
                    <p className="text-center order__sponsor--answer">Spider-Man: Homecoming</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="order__sponsor--info">Tuesday, 07 July 2020</p>
                    <p className="order__sponsor--answer">02:00pm</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="order__sponsor--info">One ticket price</p>
                    <p className="order__sponsor--answer">$10</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="order__sponsor--info">Seat choosed</p>
                    <p className="order__sponsor--answer">C4, C5, C6</p>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <p className="order__sponsor--info">Total Payment</p>
                    <p className="order__sponsor--price text-primary">$30</p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default MovieBooking;
