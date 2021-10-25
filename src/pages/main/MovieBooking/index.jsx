import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar/navbar";
import Footer from "../../../components/Footer";
import styles from "./MovieBooking.module.css";
import axios from "../../../utils/axios";
import Seat from "../../../components/Seat";
class MovieBooking extends Component {
  constructor() {
    super();
    this.state = {
      dataMovie: "",
      dataSchedule: "",
      selectedSeat: [],
      soldSeat: []
    };
  }
  componentDidMount() {
    const data = this.props.location.state;

    this.checkingData(data);
    this.getMovie(data);
    this.getSchedule(data);
    this.getSoldSeat(data);
  }
  checkingData = (data) => {
    if (
      !data ||
      typeof data !== "object" ||
      !data.scheduleId ||
      !data.movieId ||
      !data.timeBooking ||
      !data.dateBooking
    ) {
      alert("Select Movie !");
      this.props.history.push("/");
    }
  };
  getSchedule = (data) => {
    axios
      .get(`/schedule/${data.scheduleId}`)
      .then((res) => {
        this.setState({
          dataSchedule: res.data.data[0]
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  getMovie = (data) => {
    axios
      .get(`/movie/${data.movieId}`)
      .then((res) => {
        this.setState({
          dataMovie: res.data.data[0]
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getSoldSeat = (data) => {
    axios
      .get(
        `/booking/seat?idSchedule=${data.scheduleId}&idMovie=${data.movieId}&dateSchedule=${data.dateBooking}&timeSchedule=${data.timeBooking}`
      )
      .then((res) => {
        const soldSeat = [];
        res.data.data.map((element) => {
          soldSeat.push(element.seat);
        });
        this.setState({
          soldSeat: soldSeat
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  selectedSeat = (data) => {
    if (this.state.selectedSeat.includes(data)) {
      const deletedSeat = this.state.selectedSeat.filter((e) => {
        return e !== data;
      });
      this.setState({
        selectedSeat: deletedSeat
      });
    } else {
      this.setState({
        selectedSeat: [...this.state.selectedSeat, data]
      });
    }
  };
  handleCheckout = () => {
    const data = this.props.location.state;
    const setData = {
      seat: this.state.selectedSeat,
      movieId: this.state.dataMovie.id,
      scheduleId: this.state.dataSchedule.id,
      dateBooking: data.dateBooking,
      timeBooking: data.timeBooking
    };
    this.props.history.push("/checkout", setData);
  };

  render() {
    const data = this.props.location.state;
    let dayBook = new Date(data.dateBooking);
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thusday", "Friday", "Saturday"];
    var dayBooking = `${days[dayBook.getDay()]}, ${dayBook.getDate()} ${dayBook.toLocaleString(
      "default",
      { month: "long" }
    )} ${dayBook.getFullYear()} 
    `;
    const listAbjad = ["A", "B", "C", "D", "E", "F", "G"];
    console.log(this.state);
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
                    <h5>{this.state.dataMovie.name}</h5>
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
                    <div className="container text-center">
                      <h6 className="mt-3 mb-4">Screen</h6>
                      <hr />
                      {listAbjad.map((element, index) => (
                        <div key={index}>
                          <Seat
                            abjad={element}
                            selectedSeat={this.selectedSeat}
                            sold={this.state.soldSeat}
                            selected={this.state.selectedSeat}
                          />
                        </div>
                      ))}
                    </div>
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
                  <Link to="/" className="btn btn-outline-primary selected__movie--anotherLink">
                    change movie
                  </Link>
                  <button
                    onClick={this.state.selectedSeat.length > 0 ? this.handleCheckout : null}
                    className={`btn btn-primary selected__movie--anotherLink ${
                      this.state.selectedSeat.length > 0 ? null : "ScheduleCard__nonaktifBtn"
                    } `}
                  >
                    checkout now
                  </button>
                </div>
              </section>
            </div>
            <div className="col-md-4">
              <h5 className="mt-5 selected__movie--title">Order Info</h5>
              <div className="card card-body">
                <div className="order__sponsor mx-0 ">
                  <div className="order__sponsor--header text-center">
                    <img src="/assets/img/sponsor1.png" className="order__sponsor--image" alt="" />
                    <p className="order__sponsor--title mb-4">{this.state.dataSchedule.premier}</p>
                  </div>
                  <div className="mt-4 order__sponsor--name d-flex justify-content-between">
                    <p className="order__sponsor--info order__sponsor--selectedname">
                      Movie selected
                    </p>
                    <p className="text-center order__sponsor--answer">
                      {this.state.dataMovie.name}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="order__sponsor--info">{dayBooking}</p>
                    <p className="order__sponsor--answer">{data.timeBooking}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="order__sponsor--info">One ticket price</p>
                    <p className="order__sponsor--answer">${this.state.dataSchedule.price}</p>
                  </div>
                  {this.state.selectedSeat.length > 0 ? (
                    <div className="d-flex justify-content-between">
                      <p className="order__sponsor--info">Seat choosed</p>
                      <p className="order__sponsor--answer">
                        {this.state.selectedSeat.map((element) => `${element}, `)}
                      </p>
                    </div>
                  ) : null}
                  <hr />
                  <div className="d-flex justify-content-between">
                    <p className="order__sponsor--info">Total Payment</p>
                    <p className="order__sponsor--price text-primary">
                      $ {this.state.selectedSeat.length * this.state.dataSchedule.price}
                    </p>
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
