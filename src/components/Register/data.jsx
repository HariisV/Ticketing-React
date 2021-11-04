import React, { useState } from "react";

const ManageData = (props) => {
  const [isAgree, setIsAgree] = useState(true);
  const handleNextStep = () => {
    if (props.data.firstName == "") {
      props.toastError("First Name Tidak Boleh Kosong");
    } else if (props.data.lastName == "") {
      props.toastError("Last Name Tidak Boleh Kosong");
    } else if (
      props.data.phoneNumber == "" ||
      props.data.phoneNumber.length > 13 ||
      props.data.phoneNumber.length < 10
    ) {
      props.toastError("Nomor Telepon Tidak Valid");
    } else if (isAgree) {
      props.toastError("TOS Harus di centang");
    } else {
      props.handleSubmit();
    }
  };
  return (
    <>
      <h2 className="form--desc__h2 fw-bold d-sm-block d-md-none">Register</h2>
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="form-group form__password">
            <label htmlFor="" className="form-control-label" /> First Name
            <input
              type="text"
              className="form-control"
              placeholder="Your first Name"
              name="firstName"
              onChange={() => props.handleInput(event)}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group form__password">
            <label htmlFor="" className="form-control-label" /> Last Name
            <input
              type="text"
              className="form-control"
              placeholder="Your last name"
              name="lastName"
              onChange={() => props.handleInput(event)}
            />
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
            className="form-control form__register--select"
            name="phoneNumber"
            onChange={() => props.handleInput(event)}
            placeholder="123456789"
          />
        </div>
      </div>
      <div className="form-check mt-4">
        <input
          className="form-check-input "
          type="checkbox"
          id="flexCheckDefault"
          // checked
          name="isAgree"
          onClick={() => (isAgree == false ? setIsAgree(true) : setIsAgree(false))}
          // onChange={`${isAgree == true ? setIsAgree(false) : setIsAgree(true)}`}
        />
        <label className="form-check-label text-muted text-center " htmlFor="flexCheckDefault">
          I agree to terms & conditions
        </label>
      </div>
      <button className="btn btn-primary mt-4 mb-3 p-3 btn__login" onClick={handleNextStep}>
        Create Your Account
      </button>
    </>
  );
};
export default ManageData;
