import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class TicketCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: props.image,
      name: props.name,
      alamat: props.alamat,
      time: props.time,
      price: props.price,
      linkBooking: props.linkBooking
    };
  }
  render() {
    // console.log(typeof this.state.time);
    return (
      <>
        <div className="col-md-4">
          <div className="card card-body timesticket__list">
            <div className="row">
              <div className="col-md-4">
                <img src={this.state.image} className="showtimes__sponsor--image" alt="" />
              </div>
              <div className="col-md-8">
                <span className="shotimes__sponsor--name">{this.state.name}</span>
                <br />
                <p className="p-0 m-0 shotimes__sponsor--address">{this.state.alamat}</p>
              </div>
              <hr className="timesticket__hr" />
              <div className="row timesticket__details--time">
                {this.state.time.map((item, index) => (
                  <div className="col-3" key={index}>
                    {item}
                  </div>
                ))}
              </div>
              <div className="timesticket__price mt-4">
                <small className="d-inline text-muted">Price</small>
                <strong className="timesticket__price--seat fw-bold" style={{ float: "right" }}>
                  $ {this.state.price} / seat
                </strong>
              </div>
              <Link to={this.state.linkBooking} className="btn btn-primary w-100 mt-4 mb-3 shadow">
                Book now
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default TicketCard;
