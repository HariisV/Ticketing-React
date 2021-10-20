import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar/navbar2";
import Footer from "../../../components/Footer";
import TicketCard from "../../../components/TicketCard";
class MovieDetail extends Component {
  render() {
    return (
      <>
        <div className="container">
          <Navbar />
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

        <section className="showtimes text-center mt-5">
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
              <TicketCard
                image="/assets/img/sponsor1.png"
                name="ebu.id"
                alamat="Whatever street No.12, South Purwokerto"
                time={[
                  "08:30 am",
                  "10:30 am",
                  "12:00 am",
                  "14:00 am",
                  "16:30 pm",
                  "19:00 pm",
                  "20:30 pm"
                ]}
                price="10.00"
                linkBooking="/booking"
              />
              <TicketCard
                image="/assets/img/sponsor2.png"
                name="cineOne21"
                alamat="Cineone No.12, South Purwokerto"
                time={[
                  "01:30 am",
                  "11:30 am",
                  "13:00 am",
                  "15:00 am",
                  "17:30 pm",
                  "13:00 pm",
                  "20:30 pm"
                ]}
                price="10.00"
                linkBooking="/booking"
              />
              <TicketCard
                image="/assets/img/sponsor3.png"
                name="hiFlix"
                alamat="Whatever street No.12, South Purwokerto"
                time={[
                  "08:30 am",
                  "10:30 am",
                  "12:00 am",
                  "14:00 am",
                  "16:30 pm",
                  "19:00 pm",
                  "20:30 pm"
                ]}
                price="10.00"
                linkBooking="/booking"
              />

              <TicketCard
                image="/assets/img/sponsor1.png"
                name="ebu.id"
                alamat="Whatever street No.12, South Purwokerto"
                time={[
                  "08:30 am",
                  "10:30 am",
                  "12:00 am",
                  "14:00 am",
                  "16:30 pm",
                  "19:00 pm",
                  "20:30 pm"
                ]}
                price="10.00"
                linkBooking="/booking"
              />
              <TicketCard
                image="/assets/img/sponsor2.png"
                name="cineOne21"
                alamat="Cineone No.12, South Purwokerto"
                time={[
                  "01:30 am",
                  "11:30 am",
                  "13:00 am",
                  "15:00 am",
                  "17:30 pm",
                  "13:00 pm",
                  "20:30 pm"
                ]}
                price="10.00"
                linkBooking="/booking"
              />
              <TicketCard
                image="/assets/img/sponsor3.png"
                name="hiFlix"
                alamat="Whatever street No.12, South Purwokerto"
                time={[
                  "08:30 am",
                  "10:30 am",
                  "12:00 am",
                  "14:00 am",
                  "16:30 pm",
                  "19:00 pm",
                  "20:30 pm"
                ]}
                price="10.00"
                linkBooking="/booking"
              />
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
