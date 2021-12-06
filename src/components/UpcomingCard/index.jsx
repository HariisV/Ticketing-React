import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class UpcomingCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: props.image,
      name: props.name,
      category: props.category,
      linkDetail: props.linkDetail
    };
  }
  render() {
    return (
      <>
        <div className="col">
          <div className="card shadow showing__list--wrapper">
            <div className="card-body text-center">
              <img src={this.state.image} className="upcoming__list--image" alt="" />
              <h4 className="h6 text-center upcoming__list--title">{this.state.name}</h4>
              <p className="text-center upcoming__list--category text-muted">
                {this.state.category}
              </p>
              <br />
              <Link
                to={this.state.linkDetail}
                className="btn btn-outline-primary upcoming__list--detail"
              >
                Detail
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default UpcomingCard;
