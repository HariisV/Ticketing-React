import React from "react";

export default function index() {
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
              <label htmlFor="fn">First Name</label>
              <input id="fn" type="text" className="form-control" placeholder="First Name" />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="personal_info mx-0">
            <div className="form-group">
              <label htmlFor="fn">Last Name</label>
              <input id="fn" type="text" className="form-control" placeholder="Last Name" />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="personal_info mx-0">
            <div className="form-group">
              <label htmlFor="fn">Email</label>
              <input id="fn" type="text" className="form-control" placeholder="Email" />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="personal_info mx-0">
            <div className="form-group">
              <label htmlFor="Ph">Phone Number</label>
              <div className="input-group mb-3">
                <span className="input-group-text bg-light">+62</span>
                <input id="ph" type="number" className="form-control" placeholder="123456789" />
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
                <label htmlFor="" className="form-control-label">
                  {" "}
                  Password{" "}
                </label>
                <div className="input-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Write your password"
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
                <label htmlFor="" className="form-control-label">
                  {" "}
                  Confirm Password{" "}
                </label>
                <div className="input-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Write your password"
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
          <button className="btn btn-primary setting__account--update">Update Change</button>
        </div>
      </p>
    </section>
  );
}
