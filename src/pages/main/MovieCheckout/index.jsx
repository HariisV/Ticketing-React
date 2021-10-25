import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar/navbar";
import Footer from "../../../components/Footer";
import styles from "./MovieCheckout.module.css";
import axios from "../../../utils/axios";

class MovieCheckout extends Component {
  constructor() {
    super();
    this.state = {
      dataMovie: {},
      dataSchedule: {},
      fullName: "",
      email: "",
      phoneNumber: "",
      isActive: false
    };
  }
  componentDidMount() {
    const data = this.props.location.state;

    this.checkingData(data);
    this.getMovie(data);
    this.getSchedule(data);
  }

  checkingData = (data) => {
    if (
      !data ||
      typeof data !== "object" ||
      !data.dateBooking ||
      !data.movieId ||
      !data.timeBooking ||
      !data.scheduleId ||
      !data.seat
    ) {
      alert("Select Movie !");
      this.props.history.push("/");
    }
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
  onchangeInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
    if (this.state.fullName && this.state.email && this.state.phoneNumber) {
      this.setState({
        isActive: true
      });
    }
  };

  handleProcessPayment = () => {
    const dataprops = this.props.location.state;
    const data = this.state;
    const setData = {
      fullName: data.fullName,
      Email: data.email,
      phoneNumber: data.phoneNumber,
      movieId: data.dataMovie.id,
      scheduleId: data.dataSchedule.id,
      dateBooking: dataprops.dateBooking,
      timeBooking: dataprops.timeBooking,
      paymentMethod: "Midtrans",
      seat: dataprops.seat
    };
    axios
      .post("booking", setData)
      .then((res) => {
        const saveMidtransData = res.data.data;
        console.log(saveMidtransData.paymentUrl);
        window.open(saveMidtransData.paymentUrl, "_blank");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  render() {
    const data = this.props.location.state;
    let dayBook = new Date(data.dateBooking);
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thusday", "Friday", "Saturday"];
    var dayBooking = `${days[dayBook.getDay()]}, ${dayBook.getDate()} ${dayBook.toLocaleString(
      "default",
      { month: "long" }
    )} ${dayBook.getFullYear()}`;
    return (
      <div style={{ padding: 0, margin: 0 }} className={`${styles.body}`}>
        <Navbar />
        <div className="payment__mobile card">
          <div className="card-body list-group-item list__details--totalpayment">
            <p>
              Total payment <span> ${data.seat.length * this.state.dataSchedule.price}</span>
            </p>
          </div>
        </div>
        <div className="container">
          <main className="row">
            <div className="col-md-8">
              <section className="Payment_Info">
                <h5 className="mt-5 selected__movie--title">Payment Info</h5>
                <div className="card card-body p-1">
                  <ul className="list-group list-group-flush p-3 list__details">
                    <li className="list-group-item">
                      <p>
                        Date & Time <span> {dayBooking}</span>
                      </p>
                    </li>
                    <li className="list-group-item">
                      <p>
                        Movie Title <span> {this.state.dataMovie.name}</span>
                      </p>
                    </li>
                    <li className="list-group-item">
                      <p>
                        Cinema name <span> {this.state.dataSchedule.premier}</span>
                      </p>
                    </li>
                    <li className="list-group-item">
                      <p>
                        Number of tickets <span> {data.seat.length} Pieces</span>
                      </p>
                    </li>
                    <li className="list-group-item list__details--totalpayment">
                      <p>
                        Total payment{" "}
                        <span> $ {data.seat.length * this.state.dataSchedule.price}</span>
                      </p>
                    </li>
                  </ul>
                </div>
              </section>
              <section id="PaymentMethod">
                {/* <h5 className="mt-5 selected__movie--title">Choose a Payment Method</h5> */}
                {/* <div className="card-body p-1 payment__method payment__method1">
                  <button className="btn">
                    <img src="/assets/img/payment1.png" alt="" />
                  </button>
                  <button className="btn">
                    <img src="/assets/img/payment2.png" alt="" />
                  </button>
                  <button className="btn">
                    <img src="/assets/img/payment3.png" alt="" />
                  </button>
                  <button className="btn btn__limit">
                    <img src="/assets/img/payment4.png" alt="" />
                  </button>
                </div>
                <div className="card-body p-1 payment__method payment__method2 mr-5">
                  <button className="btn">
                    <img src="/assets/img/payment5.png" alt="" />
                  </button>
                  <button className="btn">
                    <img src="/assets/img/payment6.png" alt="" />
                  </button>
                  <button className="btn">
                    <img src="/assets/img/payment7.png" alt="" />
                  </button>
                  <button className="btn btn__limit">
                    <img src="/assets/img/payment8.png" alt="" />
                  </button>

                  <br />
                </div>
                <div className="line__payment bg-light">
                  <div className="mx-5">
                    <span className="line">
                      <h2 className="m-0">
                        <span>or</span>
                      </h2>
                    </span>
                  </div>
                  <p className="text-center">
                    Pay via cash. <a href="">See how it work</a>
                  </p>
                </div> */}
                <div className="d-flex justify-content-between mt-4 selected__movie--btn">
                  <Link
                    to="/booking"
                    className="btn btn-outline-primary selected__movie--anotherLink"
                  >
                    Previous step
                  </Link>
                  <button
                    className={`btn btn-primary selected__movie--anotherLink ${
                      this.state.isActive ? null : "ScheduleCard__nonaktifBtn"
                    }`}
                    onClick={this.state.isActive ? this.handleProcessPayment : null}
                  >
                    Pay your order
                  </button>
                </div>
              </section>
            </div>
            <div className="col-md-4">
              <h5 className="mt-5 selected__movie--title">Personal Info</h5>
              <div className="card card-body">
                <div className="personal_info mx-0">
                  <div className="form-group">
                    <label htmlFor="fn">Full Name</label>
                    <input
                      id="fn"
                      onChange={this.onchangeInput}
                      type="text"
                      name="fullName"
                      className="form-control"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="em">Email</label>
                    <input
                      id="em"
                      onChange={this.onchangeInput}
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Ph">Phone Number</label>
                    <div className="input-group mb-3">
                      <span className="input-group-text bg-light">+62</span>
                      <input
                        id="ph"
                        type="number"
                        name="phoneNumber"
                        onChange={this.onchangeInput}
                        className="form-control"
                        placeholder="123456789"
                      />
                    </div>
                  </div>
                  <div className="alert alert-warning personal_info--alert mt-4" role="alert">
                    <img src="/assets/icon/warning.svg" alt="" />
                    <span> Fill your data correctly. </span>
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

export default MovieCheckout;
