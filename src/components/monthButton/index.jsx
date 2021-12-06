import React, { Component } from "react";

class monthButton extends Component {
  render() {
    const d = new Date();
    let sekali = 0;
    const angkaBulan = [];
    for (let i = d.getMonth() + 1; i <= 12; i++) {
      angkaBulan.push(i);
      if (i >= 12) {
        if (sekali == 0) {
          i = 0;
          sekali = 1;
        }
      }
      if (sekali == 1) {
        if (i == d.getMonth()) {
          break;
        }
      }
    }
    const monthNames = [
      "January",
      "February",
      "Maret",
      "April",
      "May",
      "June",
      "July",
      "Agutus",
      "September",
      "October",
      "November",
      "December"
    ];
    return (
      <>
        {angkaBulan.map((item, index) => (
          <button
            key={index}
            onClick={() => this.props.changeMonth(item)}
            className={`btn btn-outline-primary ${
              this.props.activeMonth == item ? "btn__active--Month" : null
            }`}
          >
            {monthNames[item - 1]}
          </button>
        ))}
      </>
    );
  }
}

export default monthButton;
