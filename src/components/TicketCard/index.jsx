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
      IdSchedule: props.id
    };
  }

  HandleTimeSelected(time, scheduleId) {
    this.props.handleUpdate(time, scheduleId);
  }

  render() {
    console.log(this.props.selectedTime);
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
              <div className="row timesticket__details--time text-center">
                {this.state.time.map((item, index) => (
                  <div className="col-3" key={index}>
                    <button
                      className={`btn p-0 m-0 ${
                        this.props.id == this.props.selectedSchedule
                          ? this.props.selectedTime == item
                            ? "btn-primary"
                            : null
                          : null
                      }`}
                      onClick={() => this.HandleTimeSelected(item, this.state.IdSchedule)}
                    >
                      {item}
                    </button>
                  </div>
                ))}
              </div>
              <div className="timesticket__price mt-4">
                <small className="d-inline text-muted">Price</small>
                <strong className="timesticket__price--seat fw-bold" style={{ float: "right" }}>
                  $ {this.state.price} / seat
                </strong>
              </div>
              <button
                onClick={
                  this.props.id == this.props.selectedSchedule ? this.props.handleBooking : null
                }
                className={`btn btn-primary ${
                  this.props.id == this.props.selectedSchedule
                    ? "null"
                    : "ScheduleCard__nonaktifBtn"
                } w-100 mt-4 mb-3 shadow`}
              >
                Book now
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default TicketCard;
