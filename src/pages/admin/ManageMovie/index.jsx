import React, { useState, useEffect, useRef } from "react";
import Header from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import axios from "../../../utils/axios";
import MovieListCard from "../../../components/MovieUpdateCard";
import Pagination from "react-paginate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addmovie, updateMovie } from "../../../stores/actions/movie";
import { connect } from "react-redux";

const UpdateMovie = (props) => {
  const id = props.match.params.id;
  const [dataAllMovie, setAllMovie] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [page, setPage] = useState(1);
  const [image, setImage] = useState(null);
  const inputFile = useRef(null);
  let [FormDataMovie, setFormDataMovie] = useState({
    name: "",
    category: "",
    director: "",
    cast: "",
    releaseDate: "",
    duration: ""
  });

  useEffect(() => {
    getListMovie(page);
    getMovieById();
  }, [id, page]);

  // componentDidMount
  useEffect(() => {
    console.log("Didmount is running");
  }, []);

  // componentDidUpdate
  useEffect(() => {
    if (props.movie.msg !== "") {
      handleNotify(props.movie.msg);
    }
    if (props.movie.status === 200) {
      console.log(
        " ====================================================CARI MOVIE===================================================="
      );
      getListMovie(1);
    }
  }, [props.movie.msg]);

  // componentWillUnmount
  useEffect(() => {
    return () => {
      console.log("WillUnmount is running");
    };
  }, []);
  const getMovieById = () => {
    if (id) {
      axios
        .get(`/movie/${id}`)
        .then((res) => {
          setFormDataMovie(res.data.data[0]);
        })
        .catch((err) => {
          handleNotify("Movie Tidak Ditemukan");
          props.history.push("/movies/create");
        });
    }
  };
  const getListMovie = (page, limit) => {
    const pages = typeof page === "number" ? page : 1;
    const limits = typeof limit === "number" ? limit : 8;
    axios
      .get(`/movie?page=${pages}&limit=${limits}`)
      .then((res) => {
        setAllMovie(res.data.data);
        setPageInfo(res.data.pagination);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  const handleNotify = (data) =>
    (props.movie.status === 200 ? toast.success : toast.error)(data, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored"
    });

  const handleInput = (event) => {
    setFormDataMovie({
      ...FormDataMovie,
      [event.target.name]: event.target.value
    });
    // console.log("HAI");
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
      setFormDataMovie({
        ...FormDataMovie,
        [event.target.name]: event.target.files[0]
      });
    }
  };

  const handleSubmit = (event) => {
    const formData = new FormData();
    for (const data in FormDataMovie) {
      formData.append(data, FormDataMovie[data]);
    }
    for (const data of formData.entries()) {
      console.log(data[0] + ", " + data[1]);
    }
    props.addmovie(formData);
  };
  const handleUpdate = (event) => {
    const formData = new FormData();
    for (const data in FormDataMovie) {
      formData.append(data, FormDataMovie[data]);
    }
    for (const data of formData.entries()) {
      console.log(data[0] + ", " + data[1]);
    }
    props.updateMovie(formData, FormDataMovie.id);
  };

  const handleReset = () => {
    setFormDataMovie({});
    props.history.push("/movies/create");
  };
  return (
    <>
      <div className="container">
        <Header />

        <section className="heroo_details mt-5">
          <h4 className="mb-4 fw-bold">{id ? "Update Movie" : "Create Movie"}</h4>
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
                  <input
                    type="file"
                    onChange={onImageChange}
                    id="file"
                    accept="image/*"
                    ref={inputFile}
                    name="image"
                    style={{ display: "none" }}
                  />

                  <img
                    src={
                      image
                        ? image
                        : FormDataMovie.image
                        ? `${process.env.REACT_APP_URL_BACKEND}/uploads/movie/${FormDataMovie.image}`
                        : "/assets/img/noimage.png"
                    }
                    className={`${
                      FormDataMovie.image || image ? "update__movie--img" : "update__movie--noimg"
                    } img__management`}
                    alt=""
                    onClick={() => inputFile.current.click()}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-10 col-lg-9 col-xl-9 col-sm-12 heroo__margin">
              <div className="row">
                <div className="col-md-6">
                  <div className="personal_info mx-0">
                    <div className="form-group">
                      <label htmlFor="fn">Movie Name</label>
                      <input
                        name="name"
                        type="text"
                        className="form-control"
                        onChange={handleInput}
                        defaultValue={FormDataMovie.name}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="personal_info mx-0">
                    <div className="form-group">
                      <label htmlFor="fn">Category</label>
                      <input
                        name="category"
                        type="text"
                        className="form-control"
                        onChange={handleInput}
                        defaultValue={FormDataMovie.category}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="personal_info mx-0">
                    <div className="form-group">
                      <label htmlFor="fn">Director</label>
                      <input
                        name="director"
                        type="text"
                        className="form-control"
                        onChange={handleInput}
                        defaultValue={FormDataMovie.director}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="personal_info mx-0">
                    <div className="form-group">
                      <label htmlFor="fn">Casts</label>
                      <input
                        name="cast"
                        type="text"
                        className="form-control"
                        onChange={handleInput}
                        defaultValue={FormDataMovie.cast}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="personal_info mx-0">
                    <div className="form-group">
                      <label htmlFor="fn">Release Date</label>
                      <input
                        name="releaseDate"
                        type="date"
                        className="form-control"
                        onChange={handleInput}
                        // defaultValue={FormDataMovie.releaseDate}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="personal_info mx-0">
                    <div className="form-group">
                      <label htmlFor="fn">Duration Hour</label>
                      <input
                        name="duration"
                        type="text"
                        className="form-control"
                        onChange={handleInput}
                        defaultValue={FormDataMovie.duration}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h4 className="mb-4">Sypnosis</h4>

          <p className="heroo_details--sypnosis">
            <textarea
              name="sypnosis"
              value={FormDataMovie.sypnosis}
              className="form-control"
              onChange={handleInput}
              id=""
              cols="30"
              rows="5"
            ></textarea>
          </p>
          <div className="text-end">
            <button className="btn btn-outline-primary update__movie--btn" onClick={handleReset}>
              Reset
            </button>
            {id ? (
              <button
                className="btn btn-primary update__movie--btn"
                onClick={handleUpdate}
                type="submit"
              >
                Update
              </button>
            ) : (
              <button
                className="btn btn-primary update__movie--btn"
                onClick={handleSubmit}
                type="submit"
              >
                Create
              </button>
            )}
          </div>
        </section>
      </div>
      <section className="showtimes text-center">
        <div className="container timesticket text-start">
          <div className="updateMovie d-flex justify-content-between mt-5">
            <p className="mt-5 title__sort">Data Movie</p>
            <div className="personal_info mx-0 mt-5">
              <div className="d-flex">
                <div className="dropdown">
                  <a
                    className="btn btn-light dropdown-toggle dropdown__sort"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Sort
                  </a>

                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li>
                      <a className="dropdown-item" href="/booking.html">
                        Booking
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/payment.html">
                        Payment
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/details.html">
                        Details Page
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/login.html">
                        Login
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="form-group ml-5">
                  <input
                    id="fn"
                    type="text"
                    className="form-control movie__name--search"
                    placeholder="Search Movie Name..."
                  />
                </div>
              </div>
            </div>
          </div>
          <section id="List Movie">
            <div className="row">
              {dataAllMovie.map((element, index) => (
                <MovieListCard
                  key={index}
                  id={element.id}
                  name={element.name}
                  img={element.image}
                  category={element.category}
                />
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
        {/* PAGINATE */}
        <br />
      </section>
      <Footer />
    </>
  );
};

// NGAMBIL STATE DARI STORE
const mapStateToProps = (state) => {
  return { movie: state.movie };
};

// NGAMBIL FUNCTION DARI ACTION
const mapDispatchToProps = {
  addmovie,
  updateMovie
};
export default connect(mapStateToProps, mapDispatchToProps)(UpdateMovie);
