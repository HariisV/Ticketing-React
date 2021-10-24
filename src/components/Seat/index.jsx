import React, { Component } from "react";
import "./index.css";
class Seat extends Component {
  constructor() {
    super();
    this.state = {
      leftSideSeat: [1, 2, 3, 4, 5, 6, 7],
      rightSideSeat: [8, 9, 10, 11, 12, 13, 14]
    };
  }

  componentDidMount() {
    this.seatAlphabetSeat();
  }

  seatAlphabetSeat = () => {
    const { abjad, selectedSeat } = this.props;
    const leftSideSeat = this.state.leftSideSeat.map((item) => `${abjad}${item}`);
    const rightSideSeat = this.state.rightSideSeat.map((item) => `${abjad}${item}`);
    this.setState({
      leftSideSeat,
      rightSideSeat
    });
  };
  render() {
    const { selectedSeat, abjad, selected, sold } = this.props;
    return (
      <div className="seat">
        <div className="row seat__row">
          <div className="col seat__col seat__col--text">{abjad}</div>
          {this.state.leftSideSeat.map((element, index) => (
            <div className="col seat__col" key={index}>
              <div
                className={`seat__list  ${
                  sold.includes(element)
                    ? "seat__list--sold"
                    : selected.includes(element)
                    ? "seat__list--selected"
                    : "seat__list--available"
                }`}
                onClick={() => selectedSeat(element)}
              ></div>
            </div>
          ))}
          <div className="col seat__col"></div>
          {this.state.rightSideSeat.map((element, index) => (
            <div className="col seat__col" key={index}>
              <div
                className={`seat__list  ${
                  sold.includes(element)
                    ? "seat__list--sold"
                    : selected.includes(element)
                    ? "seat__list--selected"
                    : "seat__list--available"
                }`}
                onClick={() => {
                  sold.includes(element) ? null : selectedSeat(element);
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Seat;
