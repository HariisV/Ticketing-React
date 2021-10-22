import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar/navbar";
import Footer from "../../../components/Footer";
import styles from "./MovieCheckout.module.css";
class MovieCheckout extends Component {
  render() {
    return (
      <div style={{ padding: 0, margin: 0 }} className={`${styles.body}`}>
        <Navbar />
        <div className="payment__mobile card">
          <div className="card-body list-group-item list__details--totalpayment">
            <p>
              Total payment <span> $30,00</span>
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
                        Date & Time <span> 20 Oktober 2021</span>
                      </p>
                    </li>
                    <li className="list-group-item">
                      <p>
                        Movie Title <span> Spider-Man: Homecoming</span>
                      </p>
                    </li>
                    <li className="list-group-item">
                      <p>
                        Cinema name <span> CineOne21 Cinema</span>
                      </p>
                    </li>
                    <li className="list-group-item">
                      <p>
                        Number of tickets <span> 3 pieces</span>
                      </p>
                    </li>
                    <li className="list-group-item list__details--totalpayment">
                      <p>
                        Total payment <span> $30,00</span>
                      </p>
                    </li>
                  </ul>
                </div>
              </section>
              <section id="PaymentMethod">
                <h5 className="mt-5 selected__movie--title">Choose a Payment Method</h5>
                <div className="card-body p-1 payment__method payment__method1">
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
                </div>
                <div className="d-flex justify-content-between mt-4 selected__movie--btn">
                  <Link to="/booking" className="btn btn-outline-primary">
                    Previous step
                  </Link>
                  <Link to="/" className="btn btn-primary">
                    Pay your order
                  </Link>
                </div>
              </section>
            </div>
            <div className="col-md-4">
              <h5 className="mt-5 selected__movie--title">Personal Info</h5>
              <div className="card card-body">
                <div className="personal_info mx-0">
                  <div className="form-group">
                    <label htmlFor="fn">Full Name</label>
                    <input id="fn" type="text" className="form-control" placeholder="Full Name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="em">Email</label>
                    <input id="em" type="email" className="form-control" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Ph">Phone Number</label>
                    <div className="input-group mb-3">
                      <span className="input-group-text bg-light">+62</span>
                      <input
                        id="ph"
                        type="number"
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
