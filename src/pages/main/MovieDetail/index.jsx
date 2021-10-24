import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar/navbar";
import Footer from "../../../components/Footer";
import TicketCard from "../../../components/TicketCard";
import axios from "../../../utils/axios";
class MovieDetail extends Component {
  constructor() {
    super();
    var d = new Date();
    this.state = {
      data: [],
      dateBooking: `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`,
      schedule: [],
      IdScheduleSelected: "",
      timeSelected: ""
    };
  }

  componentDidMount() {
    this.getMovieById(this.props.match.params.id);
    this.getScheduleFilter();
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
  getScheduleFilter = () => {
    axios
      .get("/schedule?page=1&limit=6&location=Jakarta")
      .then((res) => {
        this.setState({
          schedule: res.data.data
        });
        // console.log(res.data.data);
      })
      .catch((err) => {
        this.props.history.push("/");
      });
  };

  changeDateBooking = () => {
    this.setState({
      dateBooking: event.target.value
    });
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
  render() {
    const data = this.state.data;
    var dateReleasee = new Date(data.releaseDate);
    const dateRelease = `${
      dateReleasee.toLocaleString("default", { month: "short" }) +
      " " +
      dateReleasee.getDate() +
      ", " +
      dateReleasee.getFullYear()
    }`;
    return (
      <>
        <div className="container">
          <Navbar />
          <section className="heroo_details mt-5">
            <div className="row">
              <div className="col-md-3 col-lg-4 col-xl-3 col-sm-12">
                <div className="heroo__details--border d-flex justify-content-center">
                  <div className="heroo__details--card">
                    <img
                      src={
                        data.image
                          ? `http://localhost:3001/uploads/movie/${data.image}`
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
              <select className="form-select bginput__blue" aria-label="Default select example">
                <option selected>Purwokerto</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="container timesticket text-start">
            <div className="row">
              {this.state.schedule.map((item) => (
                <TicketCard
                  image="/assets/img/sponsor1.png"
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
          <div className="showtimes__paginate mb-5">
            <div className="d-flex justify-content-center">
              {/* <div className="paginate active">
                <Link className="btn btn-primary"> 1 </Link>
              </div>
              <div className="paginate">
                <Link className="btn btn-outline-primary shadow"> 2 </Link>
              </div>
              <div className="paginate">
                <Link className="btn btn-outline-primary shadow"> 3 </Link>
              </div>
              <div className="paginate">
                <Link className="btn btn-outline-primary shadow"> 4 </Link>
              </div>
              <div className="paginate">
                <Link className="btn btn-outline-primary shadow"> 5 </Link>
              </div> */}
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
