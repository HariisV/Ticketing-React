import React from "react";

const SettingAccount = (props) => {
  const dataLogin = props.data;
  return (
    <section className="setting_account ticket px-4">
      <p className="mt-4">
        Details Information
        <hr />
      </p>

      <div className="row">
        <div className="col-md-6">
          <div className="personal_info mx-0">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                className="form-control"
                placeholder="First Name"
                onChange={props.handleInput}
                value={dataLogin.firstName}
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="personal_info mx-0">
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                className="form-control"
                placeholder="Last Name"
                onChange={props.handleInput}
                value={dataLogin.lastName}
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="personal_info mx-0">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="text"
                className="form-control"
                placeholder="Email"
                onChange={props.handleInput}
                value={dataLogin.email}
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="personal_info mx-0">
            <div className="form-group">
              <label htmlFor="Ph">Phone Number</label>
              <div className="input-group mb-3">
                <span className="input-group-text bg-light">+62</span>
                <input
                  id="ph"
                  name="ph"
                  type="number"
                  className="form-control"
                  placeholder="123456789"
                  onChange={props.handleInput}
                  value={dataLogin.phoneNumber}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-3">
        Account and Privacy
        <hr />
        <div className="row">
          <div className="col-md-6">
            <div className="personal_info mx-0">
              <div className="form-group">
                <label htmlFor="password" className="form-control-label">
                  Password
                </label>
                <div className="input-group">
                  <input
                    id="password"
                    name="newPassword"
                    type="password"
                    className="form-control"
                    placeholder="Write your password"
                    onChange={props.handleInput}
                  />
                  <span>
                    <a className="btn btn-light setting__account--iconeye">
                      <img src="/assets/img/eye.png" height="20px" alt="" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="personal_info mx-0">
              <div className="form-group">
                <label htmlFor="confirmPassword" className="form-control-label">
                  Confirm Password
                </label>
                <div className="input-group">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    className="form-control"
                    placeholder="Confirm Your New Password"
                    onChange={props.handleInput}
                  />
                  <span>
                    <a className="btn btn-light setting__account--iconeye">
                      <img src="/assets/img/eye.png" height="20px" alt="" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <button className="btn btn-primary setting__account--update" onClick={props.handleSubmit}>
            Update Change
          </button>
        </div>
      </p>
    </section>
  );
};

export default SettingAccount;
