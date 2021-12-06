import React, { useState, useEffect } from "react";
import Header from "../../../components/Navbar/";
import Footer from "../../../components/Footer";
import { connect } from "react-redux";
import { getMovie } from "../../../stores/actions/dashboard";
// Chart
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ChartDashboard from "../../../components/ChartDashboard";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import axios from "../../../utils/axios";
am4core.useTheme(am4themes_animated);

const Dashboard = () => {
  const [formFilter, setFormFilter] = useState({});
  const [chartValue, setChartValue] = useState([]);
  useEffect(() => {
    getMovie();
  }, []);
  const handleNotify = (status, data) =>
    (status == 200 ? toast.success : toast.error)(data, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored"
    });
  let chart = am4core.create("chartdiv", am4charts.XYChart);
  // chart.scrollbarX = new am4core.Scrollbar();
  let datasss = [];
  chartValue.forEach((element) => {
    datasss.push({
      country: element.month,
      visits: element.total
    });
  });
  chart.data = datasss;
  let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "country";
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.minGridDistance = 30;
  categoryAxis.renderer.labels.template.horizontalCenter = "right";
  categoryAxis.renderer.labels.template.verticalCenter = "middle";
  categoryAxis.renderer.labels.template.rotation = 270;
  categoryAxis.tooltip.disabled = true;
  categoryAxis.renderer.minHeight = 110;

  let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.renderer.minWidth = 50;

  // Create series
  let series = chart.series.push(new am4charts.ColumnSeries());
  series.sequencedInterpolation = true;
  series.dataFields.valueY = "visits";
  series.dataFields.categoryX = "country";
  series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
  series.columns.template.strokeWidth = 0;

  series.tooltip.pointerOrientation = "vertical";

  series.columns.template.column.cornerRadiusTopLeft = 10;
  series.columns.template.column.cornerRadiusTopRight = 10;
  series.columns.template.column.fillOpacity = 0.8;

  // on hover, make corner radiuses bigger
  let hoverState = series.columns.template.column.states.create("hover");
  hoverState.properties.cornerRadiusTopLeft = 0;
  hoverState.properties.cornerRadiusTopRight = 0;
  hoverState.properties.fillOpacity = 1;

  series.columns.template.adapter.add("fill", function (fill, target) {
    return chart.colors.getIndex(target.dataItem.index);
  });
  chart.cursor = new am4charts.XYCursor();

  // Cursor
  useEffect(() => {
    getAllMovie();
    getCity();
  }, []);
  const [allMovie, setAllMovie] = useState([]);
  const [city, setCity] = useState([]);
  const [filter, setFilter] = useState({
    movieId: "111",
    location: "Aceh",
    premier: "ebuId"
  });
  const getDashboard = () => {
    axios
      .get(
        `/dashboard/chart?movieId=${filter.movieId}&location=${filter.location}&premier=${filter.premier}`
      )
      .then((res) => {
        setChartValue(res.data.data);
      })
      .catch((err) => {
        handleNotify(200, err.response.data.msg);
      });
  };
  const handleSelect = (event) => {
    setFilter({
      ...filter,
      [event.target.name]: event.target.value
    });
  };

  const getAllMovie = () => {
    axios
      .get("/movie?page=1&limit=6000")
      .then((res) => {
        setAllMovie(res.data.data);
      })
      .catch((err) => {});
  };
  const getCity = () => {
    axios
      .get("https://dev.farizdotid.com/api/daerahindonesia/provinsi")
      .then((res) => {
        setCity(res.data.provinsi);
      })
      .catch((err) => {});
  };
  return (
    <>
      <Header />
      <div style={{ backgroundColor: "#f5f6f8" }}>
        <div className="container">
          <main className="row">
            <div className="col-md-9">
              <section className="Payment_Info">
                <div>
                  <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                  />
                </div>
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
                    <select
                      name="movieId"
                      id=""
                      className="form-select select__dashboard--filter"
                      onChange={handleSelect}
                    >
                      {allMovie.map((element, index) => (
                        <option value={element.id} key={index}>
                          {element.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <select
                      name="premier"
                      id=""
                      className="form-select select__dashboard--filter"
                      onChange={handleSelect}
                    >
                      <option value="ebuId">EbuId</option>
                      <option value="hiFlix">hiFlix</option>
                      <option value="CineOne21">CineOne21</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <select
                      name="location"
                      id=""
                      className="form-select select__dashboard--filter"
                      onChange={handleSelect}
                    >
                      {city.map((element, index) => (
                        <option value={element.nama} key={index}>
                          {element.nama}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <button
                        className="btn btn-primary w-100 mt-4 mb-3 shadow"
                        onClick={getDashboard}
                      >
                        Filter
                      </button>
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
    </>
  );
};
const mapStateToProps = (state) => {
  return { Dashboard: state.Movie };
};
const mapDispatchToProps = {
  getMovie
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
