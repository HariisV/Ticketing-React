import React from "react";
import Header from "../../../components/Navbar/navbar";
import Footer from "../../../components/Footer";
import ChartDashboard from "../../../components/ChartDashboard";

const Dashboard = () => {
  return (
    <div style={{ backgroundColor: "#f5f6f8" }}>
      <Header />
      <div className="container">
        <main className="row">
          <div className="col-md-9">
            <section className="Payment_Info">
              <h5 className="mt-5 selected__movie--title">Dashboard</h5>
              <div className="card card-body">
                <div
                  id="chartdiv"
                  style={{ width: "100%", height: "500px" }}
                  className="mt-4"
                ></div>
              </div>
            </section>
          </div>
          <div className="col-md-3">
            <h5 className="mt-5 selected__movie--title">Filter</h5>
            <div className="card card-body">
              <div className="personal_info  mx-0">
                <div className="form-group">
                  <select name="" id="" className="form-select select__dashboard--filter">
                    <option value="#">Select Movie</option>
                  </select>
                </div>
                <div className="form-group">
                  <select name="" id="" className="form-select select__dashboard--filter">
                    <option value="#">Select Premier</option>
                  </select>
                </div>
                <div className="form-group">
                  <select name="" id="" className="form-select select__dashboard--filter">
                    <option value="#">Select Location</option>
                  </select>
                </div>
                <div className="row">
                  <div className="col-6">
                    <button className="btn btn-primary w-100 mt-4 mb-3 shadow">Filter</button>
                  </div>
                  <div className="col-6">
                    <button className="btn btn-outline-primary w-100 mt-4 mb-3 shadow border__width">
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};
export default Dashboard;
