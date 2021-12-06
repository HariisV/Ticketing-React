import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class ShowingCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: props.image,
      name: props.name,
      category: props.category,
      linkDetail: props.linkDetail,
      linkBooking: props.linkBooking
    };
  }
  render() {
    return (
      <>
        <div className="col">
          <div className="card shadow showing__list--wrapper card-body text-center">
            <div className="mx-auto d-block">
              <img src={this.state.image} className="showing__list--image" alt="" />
              <div className="showing__details d-none mt-2">
                <h4 className="h6 text-center upcoming__list--title">{this.state.name}</h4>
                <p className="text-center upcoming__list--category text-muted">
                  {this.state.category}
                </p>
                <Link
                  to={this.state.linkDetail}
                  className="btn btn-outline-primary showing__details--btn"
                >
                  Details
                </Link>
                <Link to={this.state.linkBooking} className="btn btn-primary showing__details--btn">
                  Book now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default ShowingCard;
