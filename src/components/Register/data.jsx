import React from "react";

export default function data() {
  return (
    <form action="">
      <h2 className="form--desc__h2 fw-bold d-sm-block d-md-none">Register</h2>
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="form-group form__password">
            <label htmlFor="" className="form-control-label" /> First Name
            <input type="email" className="form-control" placeholder="Your first Name" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group form__password">
            <label htmlFor="" className="form-control-label" /> Last Name
            <input type="email" className="form-control" placeholder="Your last name" />
          </div>
        </div>
      </div>
      <div className="form-group ">
        <label htmlFor="Ph">Phone Number</label>
        <div className="input-group mb-3 ">
          <span className="input-group-text bg-light form__register--select">+62</span>
          <input
            id="ph"
            type="number"
            name="phoneNumber"
            // onChange={this.onchangeInput}
            className="form-control form__register--select"
            placeholder="123456789"
          />
        </div>
      </div>
      <div className="form-group mt-4">
        <label htmlFor="" className="form-control-label">
          City
        </label>
        <select
          className="form-select form-control form__register"
          // onChange={this.changeLocationBooking}
        >
          {/* {this.state.city.map((item, index) => (
              <option value={item.nama} key={index}>
                {item.nama}
              </option>
            ))} */}
          {/* {typeof this.state.city} */}
        </select>
      </div>
      <div className="form-check mt-4">
        <input
          className="form-check-input "
          type="checkbox"
          value=""
          id="flexCheckDefault"
          checked
        />
        <label className="form-check-label text-muted text-center " htmlFor="flexCheckDefault">
          I agree to terms & conditions
        </label>
      </div>
      <button className="btn btn-primary mt-4 mb-3 p-3 btn__login">Join for free now</button>
    </form>
  );
}
