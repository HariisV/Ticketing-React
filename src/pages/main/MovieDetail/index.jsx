import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar/";
import Footer from "../../../components/Footer";
import TicketCard from "../../../components/TicketCard";
import axios from "../../../utils/axios";
import Pagination from "react-paginate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import qs from "query-string";

require("dotenv").config();

class MovieDetail extends Component {
  constructor() {
    super();
    var thisDate = new Date().toISOString();

    this.state = {
      data: [],
      dateBooking: `${thisDate.slice(0, 10)}`,
      schedule: [],
      IdScheduleSelected: "",
      timeSelected: "",
      location: "Aceh",
      city: [],
      pageInfo: {},
      page: 1,
      showPaginate: false
    };
  }
  componentDidMount() {
    this.getMovieById(this.props.match.params.id);
    this.getCity(this.state.location);
    this.getScheduleFilter(this.state.dateBooking, this.state.location, this.state.page);
    this.handleUrlParams();
  }

  getMovieById = (id) => {
    axios
      .get(`movie/${id}`)
      .then((res) => {
        this.setState({
          data: res.data.data[0]
        });
      })
      .catch((err) => {
        this.props.history.push("/");
      });
  };
  getScheduleFilter = (date, location, page) => {
    const setData = {
      date: date,
      page: page,
      location: location,
      movieId: this.props.match.params.id
    };
    axios
      .post("/schedule/filter", setData)
      .then((res) => {
        this.setState({
          schedule: res.data.data,
          pageInfo: res.data.pagination,
          showPaginate: true
        });
      })
      .catch((err) => {
        toast.error(err.response.data.msg, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored"
        });
      });
  };
  getCity = () => {
    axios
      .get("https://dev.farizdotid.com/api/daerahindonesia/provinsi")
      .then((res) => {
        this.setState({
          city: res.data.provinsi
        });
      })
      .catch((err) => {});
  };

  changeDateBooking = (event) => {
    this.setState({
      dateBooking: event.target.value
    });
    this.getScheduleFilter(event.target.value, this.state.location, this.state.page);
    this.props.history.push(
      `?page=${this.state.page}&dateBooking=${event.target.value}&location=${this.state.location}`
    );
  };
  changeLocationBooking = (event) => {
    this.setState({
      page: 1,
      location: event.target.value
    });

    this.getScheduleFilter(this.state.dateBooking, event.target.value, 1);
    this.props.history.push(
      `?page=1&dateBooking=${this.state.dateBooking}&location=${event.target.value}`
    );
  };
  handleClickState = (time, scheduleId) => {
    this.setState({
      timeSelected: time,
      IdScheduleSelected: scheduleId
    });
  };
  handleBooking = () => {
    const setData = {
      movieId: this.state.data.id,
      scheduleId: this.state.IdScheduleSelected,
      dateBooking: this.state.dateBooking,
      timeBooking: this.state.timeSelected
    };
    this.props.history.push("/booking", setData);
  };
  handlePagination = (event) => {
    this.setState(
      {
        page: event.selected + 1
      },
      () => {
        this.props.history.push(
          `?page=${event.selected + 1}&dateBooking=${this.state.dateBooking}&location=${
            this.state.location
          }`
        );
        this.getScheduleFilter(this.state.dateBooking, this.state.location, event.selected + 1);
      }
    );
  };
  handleUrlParams = () => {
    const urlParams = qs.parse(this.props.location.search);
    if (urlParams.page) {
      this.setState({
        page: urlParams.page,
        location: urlParams.location,
        date: urlParams.dateBooking
      });
      this.getScheduleFilter(urlParams.dateBooking, urlParams.location, urlParams.page);
    }
  };
  render() {
    const { data, pageInfo } = this.state;
    var dateReleasee = new Date(data.releaseDate);
    const dateRelease = `${
      dateReleasee.toLocaleString("default", { month: "short" }) +
      " " +
      dateReleasee.getDate() +
      ", " +
      dateReleasee.getFullYear()
    }`;
    const urlParams = qs.parse(this.props.location.search);
    console.log(this.state.page);

    return (
      <>
        <div className="container">
          <Navbar />
          <section className="heroo_details mt-5">
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
            <div className="row">
              <div className="col-md-3 col-lg-4 col-xl-3 col-sm-12">
                <div className="heroo__details--border d-flex justify-content-center">
                  <div className="heroo__details--card">
                    <img
                      src={
                        data.image
                          ? `${process.env.REACT_APP_URL_BACKEND}uploads/movie/${data.image}`
                          : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
                      }
                      className="heroo__details--image"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-lg-7 col-xl-8 col-sm-12 heroo__margin">
                <h3 className="heroo__details--title">{data.name}</h3>
                <p className="heroo_details--category">{data.category}</p>

                <table className="table mt-3 table__detail--movie">
                  <tr>
                    <td>
                      Release Date
                      <h5>{dateRelease}</h5>
                    </td>
                    <td>
                      Directed By
                      <h5>{data.director}</h5>
                    </td>
                  </tr>
                  <tr style={{ borderTop: "none" }}>
                    <td>
                      Duration
                      <h5>{data.duration}</h5>
                    </td>
                    <td>
                      Casts
                      <h5>{data.cast} ...</h5>
                    </td>
                  </tr>
                </table>
                <hr />
                <h4 className="mb-4">Sypnosis</h4>
                <p className="heroo_details--sypnosis">{data.sypnosis}</p>
              </div>
            </div>
          </section>
        </div>

        <section className="showtimes text-center mt-5">
          <br />
          <h4 className="mt-5">Showtimes and Tickets</h4>
          <div className="d-flex justify-content-center showtimes__input mb-5">
            <div className="input-group showtimes__input--wrapper">
              <span className="input-group-text bginput__blue">
                <img src="/assets/icon/date.svg" alt="" />
              </span>
              <input
                type="date"
                className="form-control bginput__blue"
                value={this.state.dateBooking}
                onChange={this.changeDateBooking}
              />
            </div>
            <div className="input-group">
              <span className="input-group-text bginput__blue">
                <img src="/assets/icon/location.svg" alt="" />
              </span>
              <select
                className="form-select bginput__blue"
                value={this.state.location}
                onChange={this.changeLocationBooking}
              >
                <option value="Aceh">Aceh</option>
                <option value="Medan">Medan</option>
                {this.state.city.map((item, index) => (
                  <option value={item.nama} key={index}>
                    {item.nama}
                  </option>
                ))}
                {/* {typeof this.state.city} */}
              </select>
            </div>
          </div>
          <div className="container timesticket text-start">
            <div className="row">
              {this.state.schedule.map((item) => (
                <TicketCard
                  image={`/assets/img/${item.premier}.png`}
                  id={item.id}
                  selectedSchedule={this.state.IdScheduleSelected}
                  selectedTime={this.state.timeSelected}
                  name={item.premier}
                  alamat="Whatever street No.12, South Purwokerto"
                  time={item.time}
                  price={item.price}
                  key={item.id}
                  handleUpdate={this.handleClickState.bind()}
                  handleBooking={this.handleBooking.bind()}
                />
              ))}
            </div>
          </div>
          <div className={`showtimes__paginate mb-5 ${this.state.showPaginate ? "" : "d-none"}`}>
            <div className="d-flex justify-content-center">
              <Pagination
                previousLabel={"Sebelumnya"}
                nextLabel={"Selanjutnya"}
                previousClassName={"nonaktif_previous"}
                nextClassName={"nonaktif_previous"}
                breakLabel={"..."}
                pageCount={pageInfo.totalPage}
                onPageChange={(event) => this.handlePagination(event)}
                // initialPage={this.state.page - 1}
                forcePage={this.state.page - 1}
                // urlParams.page ? urlParams.page - 1 : this.state.page
                containerClassName={"pagination"}
                disabledClassName={"pagination__link--disabled"}
                activeClassName={"pagination__link--active btn-primary "}
                pageClassName={"pagination__button btn btn-outline-primary"}
              />
            </div>
          </div>
          <br />
        </section>
        <Footer />
      </>
    );
  }
}

export default MovieDetail;
