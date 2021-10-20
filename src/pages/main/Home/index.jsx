import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar/navbar1";
import Footer from "../../../components/Footer";
import ShowingCard from "../../../components/ShowingCard";
import UpcomingCard from "../../../components/UpcomingCard";

class Home extends Component {
  render() {
    return (
      <>
        <div className="container">
          <Navbar />
          <section className="heroo mt-5">
            <div className="row">
              <div className="col-md-7 align-self-center">
                <p className="text-muted hero__text--desc">Nearest Cinema, Newest Movie</p>
                <h2 className="text-primary hero__text--title">Find out Now !</h2>
              </div>
              <div className="col-md-5 text-center">
                <img src="/assets/img/hero-home.png" className="hero__home" alt="" />
              </div>
            </div>
          </section>
          <section className="showing">
            <h4 className="d-inline text-primary fw-bold">Now Showing</h4>
            <small className="text-primary fw-bold" style={{ float: "right" }}>
              view all
            </small>
            <hr className="showing__hr" />
            <section className="showing__list mt-5">
              <ShowingCard
                image="/assets/img/movie1.png"
                name="Spiderman 2"
                category="Action, Adventure, Sci-Fi"
                linkDetail="/details"
                linkBooking="/details"
              />
              <ShowingCard
                image="/assets/img/movie2.png"
                name="The Lion"
                category="Animated, Adventure, Animal"
                linkDetail="/details"
                linkBooking="/details"
              />
              <ShowingCard
                image="/assets/img/movie3.png"
                name="John Wick"
                category="Action, Adventure, Sci-Fi"
                linkDetail="/details"
                linkBooking="/details"
              />
              <ShowingCard
                image="/assets/img/movie4.png"
                name="Spiderman 5"
                category="Action, Adventure, Sci-Fi"
                linkDetail="/details"
                linkBooking="/details"
              />
              <ShowingCard
                image="/assets/img/movie5.png"
                name="The Bocil Lion"
                category="Action, Adventure, Sci-Fi"
                linkDetail="/details"
                linkBooking="/details"
              />
            </section>
          </section>
          <section className="upcoming mt-5">
            <h4 className="d-inline text-primary fw-bold">Upcoming Movies</h4>
            <small className="text-primary fw-bold mt-3" style={{ float: "right" }}>
              view all
            </small>
            <section className="upcoming--category mt-4">
              <div className="upcoming__category--wrapper">
                <Link to="/" className="btn btn-primary active">
                  Oktober
                </Link>
                <Link to="/" className="btn btn-outline-primary">
                  November
                </Link>
                <Link to="/" className="btn btn-outline-primary">
                  Desember
                </Link>
                <Link to="/" className="btn btn-outline-primary">
                  January
                </Link>
                <Link to="/" className="btn btn-outline-primary">
                  February
                </Link>
                <Link to="/" className="btn btn-outline-primary">
                  March
                </Link>
                <Link to="/" className="btn btn-outline-primary">
                  April
                </Link>
                <Link to="/" className="btn btn-outline-primary">
                  May
                </Link>
                <Link to="/" className="btn btn-outline-primary">
                  Juny
                </Link>
                <Link to="/" className="btn btn-outline-primary">
                  July
                </Link>
              </div>
            </section>
            <section className="upcoming__list mt-4">
              <div className="showing__list">
                <UpcomingCard
                  image="/assets/img/movie1.png"
                  name="Spiderman 2"
                  category="Action, Adventure, Sci-Fi"
                  linkDetail="/details"
                />
                <UpcomingCard
                  image="/assets/img/movie2.png"
                  name="The Lion"
                  category="Animated, Sci-Fi, Animal"
                  linkDetail="/details"
                />
                <UpcomingCard
                  image="/assets/img/movie3.png"
                  name="John Wick"
                  category="Action, Adventure, Sci-Fi"
                  linkDetail="/details"
                />
                <UpcomingCard
                  image="/assets/img/movie4.png"
                  name="Spiderman 5"
                  category="Action, Adventure, Sci-Fi"
                  linkDetail="/details"
                />
                <UpcomingCard
                  image="/assets/img/movie5.png"
                  name="The Bocil Lion"
                  category="Action, Adventure, Sci-Fi"
                  linkDetail="/details"
                />
              </div>
            </section>
          </section>
          <section className="email text-center shadow">
            <p className="m-0 email__desc">Be the vanguard of the</p>
            <h5 className="email__title text-primary fw-bold">Moviegoers</h5>
            <div className="d-flex justify-content-center mt-5">
              <div className="input-group email__form" style={{ width: "306px" }}>
                <input
                  type="email"
                  className="form-control email__input"
                  placeholder="Write your Email"
                />
                <span>
                  <Link className="btn btn-primary email__form--btn"> Join now </Link>
                </span>
              </div>
            </div>

            <p className="mt-5 text-muted mb-5">
              By joining you as a Tickitz member, <br />
              we will always send you the latest updates via email .
            </p>
          </section>
          <Footer />
        </div>
      </>
    );
  }
}

export default Home;
