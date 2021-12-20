import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar/";
import Footer from "../../../components/Footer";
import ShowingCard from "../../../components/ShowingCard";
import UpcomingCard from "../../../components/UpcomingCard";
import axios from "../../../utils/axios";
import MontButton from "../../../components/monthButton";
require("dotenv").config();

class Home extends Component {
  constructor() {
    super();
    this.state = {
      dataShowing: [],
      dataUpcoming: [],
      activeMonth: `${new Date().getMonth() + 1}`
    };
  }
  componentDidMount() {
    this.getDataMovieShowing();
    this.getDataMovieUpcoming();
  }
  getDataMovieShowing = () => {
    axios.get("movie?page=1&limit=7&sort=id&sortType=ASC").then((res) => {
      this.setState({
        dataShowing: res.data.data
      });
    });
  };
  getDataMovieUpcoming = () => {
    axios
      .get("movie/upcoming")
      .then((res) => {
        this.setState({
          dataUpcoming: res.data.data
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  changeMonthMovie = (data) => {
    this.setState({
      activeMonth: data
    });
    const setData = {
      month: data
    };
    axios
      .post("movie/upcoming", setData)
      .then((res) => {
        this.setState({
          dataUpcoming: res.data.data
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

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
              {this.state.dataShowing.map((item, index) => (
                <ShowingCard
                  image={
                    item.image
                      ? `${process.env.REACT_APP_URL_BACKEND}uploads/movie/${item.image}`
                      : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
                  }
                  name={item.name}
                  category={item.category}
                  linkDetail={`/movie/${item.id}`}
                  linkBooking={`/movie/${item.id}`}
                  key={item.id}
                />
              ))}
            </section>
          </section>
          <section className="upcoming mt-5">
            <h4 className="d-inline text-primary fw-bold">Upcoming Movies</h4>
            <small className="text-primary fw-bold mt-3" style={{ float: "right" }}>
              view all
            </small>
            <section className="upcoming--category mt-4">
              <div className="upcoming__category--wrapper">
                <MontButton
                  changeMonth={this.changeMonthMovie}
                  activeMonth={this.state.activeMonth}
                />
              </div>
            </section>
            <section className="upcoming__list mt-4">
              <div className="showing__list">
                {this.state.dataUpcoming.map((element) => (
                  <UpcomingCard
                    image={
                      element.image
                        ? `${process.env.REACT_APP_URL_BACKEND}uploads/movie/${element.image}`
                        : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
                    }
                    name={element.name}
                    category={element.category}
                    linkDetail={`/movie/${element.id}`}
                    key={element.id}
                  />
                ))}
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
                  <button className="btn btn-primary email__form--btn"> Join now </button>
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
