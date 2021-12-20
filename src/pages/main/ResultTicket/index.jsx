import React, { useState, useEffect } from "react";
import Header from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import axios from "../../../utils/axios";

const ViewTicket = (props) => {
  const [booking, setBooking] = useState({
    movieId: "",
    scheduleId: "",
    seat: []
  });
  const [movie, setMovie] = useState({});
  const [schedule, setSchedule] = useState({});
  useEffect(() => {
    getBookingById(props.match.params.id);
  }, []);
  const getSchedulById = (id) => {
    axios
      .get(`/schedule/${id}`)
      .then((res) => {
        setSchedule(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  const getMovieById = (id) => {
    axios
      .get(`/movie/${id}`)
      .then((res) => {
        setMovie(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getBookingById = (id) => {
    axios
      .get(`/booking?idBooking=${id}`)
      .then((res) => {
        setBooking(res.data.data);
        getMovieById(booking.movieId);
        getSchedulById(booking.scheduleId);
        console.log(booking);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let dayBook = new Date(booking.dateBooking);
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thusday", "Friday", "Saturday"];
  let dayBooking = `${dayBook.getDate()} ${dayBook.toLocaleString("default", {
    month: "short"
  })} 
  `;

  return (
    <div>
      <Header />
      <section className="Mobile__result  d-lg-none mt-5">
        <div className="card card-body">
          <div className="text-center mobile__result--container">
            <img src="/assets/img/success.svg" className="mobile__result--success " alt="" />
            <h3>Thank You !</h3>
            <small>Your transaction was successful</small>
            <br />
            <img src="/assets/img/qr-code.png" className="result__qrcode mb-3" alt="" />
          </div>
          <div className="row text-center">
            <div className="col-6 mt-3">
              <small>Movie</small>
              <p>{movie.name}</p>
            </div>
            <div className="col-6 mt-3">
              <small>Category</small>
              <p>PG-13</p>
            </div>
            <div className="col-6 mt-3">
              <small>Date</small>
              <p>{dayBooking}</p>
            </div>
            <div className="col-6 mt-3">
              <small>Time</small>
              <p>{booking.timeBooking ? booking.timeBooking.slice(0, 5) : ""}</p>
            </div>
            <div className="col-6 mt-3">
              <small>Count</small>
              <p>{booking.seat.length}</p>
            </div>
            <div className="col-6 mt-3">
              <small>Seat</small>
              <p>
                {booking.seat.map((e, i) => (
                  <small key={i}>{e},</small>
                ))}
              </p>
            </div>
            <div className="card card-body mt-3 mx-5 fw-bold">Total : ${booking.totalPayment}</div>
          </div>
        </div>
      </section>
      <section className="Result Ticket mt-5 d-none d-lg-block">
        <div className="card p-5 mx-5">
          <h5 className="selected__movie--title text-center mb-5">Proof of Payment</h5>
          <div className="card-header bg-primary ticket__header">
            <div id="img" className="mx-3">
              <div className="row">
                <div className="col-md-6">
                  <img src="/assets/img/logo.svg" width="120px" alt="" />
                </div>
                <div className="pembatas col-md-0">
                  <p className="admit__one mt-2">Admit one</p>

                  <img src="/assets/img/bola.svg" className="ticket__bola" alt="" />
                </div>
                <div className="col-md-3 text-center">
                  <img src="/assets/img/logo.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-body ticket__result--isi">
            <div className="row">
              <div className="col-md-9">
                <small className="">Movie</small>
                <h5 className="fw-bold mb-4 mr-5">{movie.name}</h5>
                <div className="row ">
                  <div className="col-md-4">
                    <small>Date</small>
                    <p>{dayBooking}</p>
                  </div>
                  <div className="col-md-4">
                    <small>Time</small>
                    <p>{booking.timeBooking ? booking.timeBooking.slice(0, 5) : ""}</p>
                  </div>
                  <div className="col-md-4">
                    <small>Category</small>
                    <p>PG-15</p>
                  </div>
                  <div className="col-md-4">
                    <small>Count</small>
                    <p>{booking.seat.length} pieces</p>
                  </div>
                  <div className="col-md-4">
                    <small>Seat</small>
                    <p>
                      {booking.seat.map((e, i) => (
                        <small key={i}>{e},</small>
                      ))}
                    </p>
                  </div>
                  <div className="col-md-4">
                    <small>Price</small>
                    <p className="h5 fw-bold">$ {booking.totalPayment}</p>
                  </div>
                </div>
              </div>

              <div className="col-md-2 text-center">
                <img
                  src="/assets/img/qr-code.png"
                  className="result__qrcode result__qrcode--desktop"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className=" text-center mt-5">
            <button className="btn btn-outline-primary result__btn">Download</button>
            <button className="btn btn-outline-success result__btn">Print</button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default ViewTicket;
