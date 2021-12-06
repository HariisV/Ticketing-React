import React, { useState, useEffect } from "react";
import Header from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import axios from "../../../utils/axios";
import Pagination from "react-paginate";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
require("dotenv").config();
import qs from "query-string";

const UpdateSchedule = (props) => {
  const urlParams = qs.parse(props.location.search);
  const [allMovie, setAllMovie] = useState([]);
  const [AllSchedule, setAllSchedule] = useState([]);
  const [city, setCity] = useState([]);
  const [isAddTime, setAddTime] = useState(false);
  const [pageInfo, setPageInfo] = useState({});
  const [page, setPage] = useState(1);
  const [time, setTime] = useState([]);
  const [filter, setFilter] = useState({
    sortType: urlParams.sortType ? urlParams.sortType : "ASC",
    movieId: urlParams.movieId ? urlParams.movieId : "",
    location: urlParams.location ? urlParams.location : ""
  });
  const [timeTemp, setTimeTemp] = useState(0);
  const [formInput, setFormInput] = useState({
    id: "",
    movieID: "",
    price: "",
    premier: "",
    location: "",
    dateStart: new Date().toISOString().slice(0, 10),
    dateEnd: new Date().toISOString().slice(0, 10),
    time: []
  });
  const [imagePreview, setImagePreview] = useState("/assets/img/image.png");
  const [isUpdate, setIsUpdate] = useState(false);
  useEffect(() => {
    getAllMovie();
    getCity();
    getAllSchedule(1);
  }, []);

  const getAllMovie = () => {
    axios
      .get("/movie?page=1&limit=5000")
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
  const getAllSchedule = (page) => {
    axios
      .get(
        filter.location == "" || filter.location == "sortType" || filter.movieId == ""
          ? `/schedule?page=${page}`
          : `/schedule?page=${page}&limit=6&sortType=${filter.sortType}&movieID=${filter.movieId}&location=${filter.location}`
      )
      .then((res) => {
        setPageInfo(res.data.pagination);
        setAllSchedule(res.data.data);
      })
      .catch((err) => {
        handleNotify(400, "Schedule Tidak Ditemukan");
      });
  };

  const showAlert = (id) => {
    confirmAlert({
      closeOnEscape: true,
      closeOnClickOutside: false,
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui">
            <h1>Are you sure?</h1>
            <p>You want to delete this file?</p>
            <button onClick={onClose}>No</button>
            <button
              onClick={() => {
                deleteSchedule(id);
                onClose();
              }}
            >
              Yes, Delete it!
            </button>
          </div>
        );
      }
    });
  };

  useEffect(() => {
    getAllSchedule(1);
    // SORT
  }, [page]);
  useEffect(() => {
    getAllSchedule(1);
  }, [filter]);
  const getMovieById = (id) => {
    if (id) {
      axios
        .get(`/movie/${id}`)
        .then((res) => {
          setImagePreview(
            `${process.env.REACT_APP_URL_BACKEND}/uploads/movie/${res.data.data[0].image}`
          );
          // setFormDataMovie(res.data.data[0]);
        })
        .catch((err) => {
          handleNotify("Movie Tidak Ditemukan");
          // props.history.push("/movies/create");
        });
    }
  };
  const handleNotify = (status, data) =>
    (status === 200 ? toast.success : toast.error)(data, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored"
    });
  const deleteSchedule = (id) => {
    axios
      .delete(`/schedule/${id}`)
      .then((res) => {
        handleNotify(200, "Schedule Berhasil Dihapus");
        getAllSchedule(1);
      })
      .catch((err) => {
        handleNotify(400, err.response.data.msg);
      });
  };
  const handleInput = (event) => {
    if (event.target.name == "movieID") {
      getMovieById(event.target.value);
    }
    setFormInput({
      ...formInput,
      [event.target.name]: event.target.value
    });
  };
  const handlePremier = (premier) => {
    setFormInput({
      ...formInput,
      premier: premier
    });
  };
  const handleTimeAdd = () => {
    setTime([...time, timeTemp]);
    setFormInput({
      ...formInput,
      time: time
    });
  };
  const handleReset = () => {
    setTimeTemp(0);
    setTime([]);
    setFormInput({
      movieID: "",
      price: 0,
      premier: "",
      location: "",
      dateStart: new Date().toISOString().slice(0, 10),
      dateEnd: new Date().toISOString().slice(0, 10),
      time: []
    });
    setImagePreview("/assets/img/image.png");
    setIsUpdate(false);
  };
  const handleSubmit = () => {
    const setData = { ...formInput, time: time.join(",") };
    axios
      .post("/schedule", setData)
      .then((res) => {
        handleNotify(200, res.data.msg);
        getAllSchedule(1);
        handleReset();
        // handleNotify(400, err.response.data.msg);
      })
      .catch((err) => {
        handleNotify(400, err.response.data.msg);
      });
  };

  const handleClickUpdate = (data) => {
    setFormInput({
      time: data.time
    });
    setTime(data.time);
    setFormInput({
      id: data.id,
      movieID: data.movieID,
      price: data.price,
      premier: data.premier,
      location: data.location,
      dateStart: new Date(data.dateStart).toISOString().slice(0, 10),
      dateEnd: new Date(data.dateEnd).toISOString().slice(0, 10),
      time: data.time.join(",")
    });
    getMovieById(data.movieID);
    setIsUpdate(true);
  };
  const handleUpdate = () => {
    axios
      .patch(`/schedule/${formInput.id}`, formInput)
      .then((res) => {
        handleNotify(200, "Success Update Datas");
        getAllSchedule(1);
        handleReset();
      })
      .catch((err) => {
        handleNotify(400, err.response.data.msg);
      });
  };
  const handleSelect = (event) => {
    setFilter({
      ...filter,
      [event.target.name]: event.target.value
    });
    props.history.push(
      `/schedule/create?page=${page}&limit=6&sortType=${filter.sortType}&movieID=${filter.movieId}&location=${filter.location}`
    );

    //
  };
  return (
    <>
      <div className="container">
        <Header />
        <section className="heroo_details heroo__kecilin--width mt-5">
          <p className="mt-5 title__sort">Form Create Schedule</p>
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
          {/* <p className="mt-5 title__sort">Form Update Schedule</p> */}
          <div className="row">
            <div className="col-md-2 col-lg-3 col-xl-2 col-sm-12">
              <div
                className="
                heroo__details--border
                d-flex
                justify-content-center
                heroo__update
              "
              >
                <div className="heroo__details--card">
                  <img
                    src={`${imagePreview}`}
                    className={`update__movie--img ${
                      imagePreview == "/assets/img/image.png" ? "update__movie--noimg" : ""
                    }`}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-md-10 col-lg-9 col-xl-9 col-sm-12 heroo__margin">
              <div className="row">
                <div className="col-md-6">
                  <div className="personal_info mx-0">
                    <div className="form-group">
                      <label htmlFor="fn">Movie Name </label>
                      <select
                        name="movieID"
                        className="form-select movie__name--search"
                        onChange={handleInput}
                        value={formInput.movieID}
                      >
                        <option disabled selected>
                          Selected Movie
                        </option>
                        {allMovie.map((element) => (
                          <option value={element.id} key={element.id}>
                            {element.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="personal_info mx-0">
                    <div className="form-group">
                      <label htmlFor="fn">City</label>
                      <select
                        name="location"
                        className="form-select movie__name--search"
                        onChange={handleInput}
                        value={formInput.location}
                      >
                        <option disabled selected>
                          Selected Location
                        </option>

                        {city.map((element) => (
                          <option value={element.nama} key={element.nama}>
                            {element.nama}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="personal_info mx-0">
                    <div className="form-group">
                      <label htmlFor="fn">Price</label>
                      <input
                        name="price"
                        type="number"
                        className="form-control movie__name--search"
                        placeholder="Price"
                        onChange={handleInput}
                        value={formInput.price}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="personal_info mx-0">
                        <div className="form-group">
                          <label htmlFor="fn">Date Start</label>
                          <input
                            id="fn"
                            type="date"
                            name="dateStart"
                            className="form-control movie__name--search"
                            onChange={handleInput}
                            value={formInput.dateStart}
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="personal_info mx-0">
                        <div className="form-group">
                          <label htmlFor="fn">Date End</label>
                          <input
                            id="fn"
                            name="dateEnd"
                            type="date"
                            className="form-control movie__name--search"
                            onChange={handleInput}
                            value={formInput.dateEnd}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="personal_info mx-0">
                    <label htmlFor="fn">Premier</label>
                    <div className="d-flex">
                      <div
                        style={{ cursor: "pointer" }}
                        className={`card card-body ${
                          formInput.premier == "ebuId" ? "selected__schedule--premier" : ""
                        }`}
                        onClick={() => handlePremier("ebuId")}
                      >
                        <img src="/assets/img/sponsor1.png" className="sponsor__list" alt="" />
                      </div>
                      <div
                        style={{ cursor: "pointer" }}
                        className={`card card-body ${
                          formInput.premier == "hiFlix" ? "selected__schedule--premier" : ""
                        }`}
                        onClick={() => handlePremier("hiFlix")}
                      >
                        <img src="/assets/img/sponsor3.png" alt="" className="sponsor__list" />
                      </div>
                      <div
                        style={{ cursor: "pointer" }}
                        className={`card card-body ${
                          formInput.premier == "CineOne21" ? "selected__schedule--premier" : ""
                        }`}
                        onClick={() => handlePremier("CineOne21")}
                      >
                        <img src="/assets/img/sponsor2.png" alt="" className="sponsor__list" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="personal_info mx-0">
                    <div className="form-group">
                      <label htmlFor="fn">Time</label>
                      <div className="row text-center">
                        <div
                          className={`input-group input-group-sm mb-3 p-3 ${
                            isAddTime ? "d-flex" : "d-none"
                          }`}
                        >
                          <input
                            type="time"
                            className="form-control"
                            placeholder="Time"
                            name="time"
                            onChange={(event) => setTimeTemp(event.target.value)}
                          />
                          <button
                            className={"btn btn-outline-secondary"}
                            type="button"
                            id="button-addon2"
                            onClick={handleTimeAdd}
                          >
                            Add
                          </button>
                        </div>
                        <div className="col-3 card-body">
                          <button
                            className="
                            btn btn-outline-primary
                            text-primary
                            tambah__time"
                            onClick={() => (isAddTime ? setAddTime(false) : setAddTime(true))}
                          >
                            +
                          </button>
                        </div>
                        {time.map((element, index) => (
                          <div className="col-3 card-body" key={index}>
                            {element}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-end">
            <button className="btn btn-outline-primary update__movie--btn" onClick={handleReset}>
              Reset
            </button>

            {isUpdate ? (
              <button className="btn btn-primary update__movie--btn" onClick={handleUpdate}>
                Update
              </button>
            ) : (
              <button className="btn btn-primary update__movie--btn" onClick={handleSubmit}>
                Create
              </button>
            )}
          </div>
        </section>
      </div>
      <section className="showtimes ">
        <div className="container timesticket ">
          <div className="updateMovie d-flex justify-content-between mt-5">
            <p className="mt-5 title__sort">Data Schedule</p>
            <div className="personal_info mx-0 mt-5">
              <div className="d-flex">
                <select
                  className=" dropdown-toggle dropdown__schedule border-0"
                  onChange={handleSelect}
                  name="sortType"
                >
                  <option selected disabled>
                    Sort
                  </option>
                  <option value="DESC">Harga Tertinggi</option>
                  <option value="ASC">Harga Terendah</option>
                </select>
                <select
                  className="dropdown__schedule border-0"
                  onChange={handleSelect}
                  name="location"
                >
                  <option selected disabled>
                    Location
                  </option>
                  {city.map((element, index) => (
                    <option value={element.nama} key={index}>
                      {element.nama}
                    </option>
                  ))}
                </select>
                <select
                  className="dropdown__schedule border-0"
                  onChange={handleSelect}
                  name="movieId"
                >
                  <option selected disabled>
                    Movie
                  </option>
                  {allMovie.map((element) => (
                    <option value={element.id} key={element.id}>
                      {element.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <section id="List Movie">
            <div className="row">
              {AllSchedule.map((element, index) => (
                <div className="col-md-4" key={index}>
                  <div className="card card-body timesticket__list">
                    <div className="row">
                      <div className="col-md-4">
                        <img
                          src={`${
                            element.premier == "ebuId"
                              ? "/assets/img/sponsor1.png"
                              : element.premier == "CineOne21"
                              ? "/assets/img/sponsor2.png"
                              : "/assets/img/sponsor3.png"
                          }`}
                          className="showtimes__sponsor--image"
                          alt=""
                        />
                      </div>
                      <div className="col-md-8">
                        <span className="shotimes__sponsor--name">{element.premier}</span>
                        <br />
                        <p className="p-0 m-0 shotimes__sponsor--address">{element.location}</p>
                      </div>
                      <hr className="timesticket__hr" />
                      <div className="row timesticket__details--time">
                        {element.time.map((element, index) => (
                          <div className="col-3" key={index}>
                            {element}
                          </div>
                        ))}
                      </div>
                      <div className="timesticket__price mt-4">
                        <small className="d-inline text-muted">Price</small>
                        <strong
                          className="timesticket__price--seat fw-bold"
                          style={{ float: "right" }}
                        >
                          ${element.price} / seat
                        </strong>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <button
                            className="btn btn-outline-primary w-100 mt-4 mb-3 shadow"
                            onClick={() => handleClickUpdate(element)}
                          >
                            Update
                          </button>
                        </div>
                        <div className="col-6">
                          <button
                            className="btn btn-outline-danger w-100 mt-4 mb-3 shadow"
                            onClick={() => showAlert(element.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className="showtimes__paginate mb-5 d-flex justify-content-center mt-5">
          <Pagination
            previousLabel={"Sebelumnya"}
            nextLabel={"Selanjutnya"}
            previousClassName={"nonaktif_previous"}
            nextClassName={"nonaktif_previous"}
            breakLabel={"..."}
            pageCount={pageInfo.totalPage}
            onPageChange={(event) => setPage(event.selected + 1)}
            containerClassName={"pagination"}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active btn-primary "}
            pageClassName={"pagination__button btn btn-outline-primary"}
          />
        </div>
        <br />
      </section>
      <Footer />
    </>
  );
};

export default UpdateSchedule;
