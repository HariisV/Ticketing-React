import React, { useState, useEffect, useRef } from "react";
import Header from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import axios from "../../../utils/axios";
import MovieListCard from "../../../components/MovieUpdateCard";
import Pagination from "react-paginate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addmovie, updateMovie, deleteMovie } from "../../../stores/actions/movie";
import { connect } from "react-redux";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import qs from "query-string";

const UpdateMovie = (props) => {
  const id = props.match.params.id;
  const [dataAllMovie, setAllMovie] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [page, setPage] = useState(1);
  const [image, setImage] = useState(null);
  const inputFile = useRef(null);
  const urlParams = qs.parse(props.location.search);

  const [Search, setSearch] = useState({
    name: urlParams.search ? urlParams.search : "",
    sort: urlParams.sort ? urlParams.sort : "",
    sortType: urlParams.sortType ? urlParams.sortType : "",
    nameButton:
      urlParams.sort && urlParams.sortType ? urlParams.sorts + " " + urlParams.sortType : ""
  });
  let [FormDataMovie, setFormDataMovie] = useState({
    name: "",
    category: "",
    director: "",
    cast: "",
    releaseDate: "",
    duration: "",
    sypnosis: ""
  });

  useEffect(() => {
    getListMovie(page);
    getMovieById();
    // SORT
  }, [id, page]);

  useEffect(() => {
    getListMovie(1, 8, Search.sort, Search.sortType, urlParams.search);
  }, [urlParams.search, urlParams.sortType, urlParams.sort]);

  // componentDidMount

  // componentDidUpdate
  useEffect(() => {
    if (props.movie.msg !== "") {
      handleNotify(props.movie.msg);
    }
    if (props.movie.status === 200) {
      getListMovie(1);
      handleReset();
    }
  }, [props.movie.msg]);

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
  const getListMovie = (page, limit, sort, sortType, name) => {
    const pages = typeof page === "number" ? page : 1;
    const limits = typeof limit === "number" ? limit : 8;
    const sorts = sort ? sort : "releaseDate";
    const sortTypes = sortType ? sortType : "DESC";
    const names = name ? name : "";
    axios
      .get(`/movie?page=${pages}&limit=${limits}&sort=${sorts}&sortType=${sortTypes}&name=${names}`)
      .then((res) => {
        setAllMovie(res.data.data);
        setPageInfo(res.data.pagination);
      })
      .catch((err) => {
        handleNotify(err.response.data.msg);
        //
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
    }
    props.addmovie(formData);
  };
  const handleUpdate = (event) => {
    const formData = new FormData();
    for (const data in FormDataMovie) {
      formData.append(data, FormDataMovie[data]);
    }
    for (const data of formData.entries()) {
    }
    props.updateMovie(formData, FormDataMovie.id);
  };

  const handleReset = () => {
    setFormDataMovie({
      name: "",
      category: "",
      director: "",
      cast: "",
      releaseDate: "",
      duration: "",
      sypnosis: ""
    });
    props.history.push("/movies/create");
  };
  const handleConfirmDelete = (id) => {
    props.deleteMovie(id);
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
                handleConfirmDelete(id);
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

  const handleInputSearch = (event, type) => {
    if (event.key == "Enter") {
      props.history.push(
        `/movies/create?search=${Search.name}&sort=${Search.sort}&sortType=${Search.sortType}`
      );
    } else {
      setSearch({
        ...Search,
        [event.target.name]: event.target.value
      });
    }
    console.log(event.target.value);
  };
  const ThisDate = `${(FormDataMovie.releaseDate
    ? FormDataMovie.releaseDate
    : new Date().toISOString()
  ).slice(0, 10)}`;
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
                        placeholder="Movie Name"
                        type="text"
                        className="form-control"
                        onChange={handleInput}
                        value={FormDataMovie.name}
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
                        placeholder="Category"
                        onChange={handleInput}
                        value={FormDataMovie.category}
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
                        placeholder="Director By"
                        type="text"
                        className="form-control"
                        onChange={handleInput}
                        value={FormDataMovie.director}
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
                        value={FormDataMovie.cast}
                        placeholder="Cast"
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
                        value={ThisDate}
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
                        value={FormDataMovie.duration}
                        placeholder="1 Hours 30 Minute"
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
              cols="30"
              rows="5"
              placeholder="Sypnosis Of Movie"
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
                <div className="dropdown form-group movie__name--search dropdown__sort">
                  <button
                    className="btn btn-light dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {Search.nameButton ? Search.nameButton : "Sort Name"}
                  </button>

                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() =>
                          setSearch({
                            ...Search,
                            sort: "name",
                            sortType: "ASC",
                            nameButton: "Nama Movie A-Z"
                          })
                        }
                      >
                        Nama Movie A-Z
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() =>
                          setSearch({
                            ...Search,
                            sort: "name",
                            sortType: "DESC",
                            nameButton: "Nama Movie Z-A"
                          })
                        }
                      >
                        Nama Movie Z-A
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() =>
                          setSearch({
                            ...Search,
                            sort: "releaseDate",
                            sortType: "ASC",
                            nameButton: "Release Ter Lama"
                          })
                        }
                      >
                        Release Lama
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() =>
                          setSearch({
                            ...Search,
                            sort: "releaseDate",
                            sortType: "DESC",
                            nameButton: "Release Terbaru"
                          })
                        }
                      >
                        Release Terbaru
                      </button>
                    </li>
                  </ul>
                </div>

                <div className="form-group">
                  <input
                    id="fn"
                    type="text"
                    name="name"
                    onKeyPress={handleInputSearch}
                    className="form-control movie__name--search"
                    defaultValue={Search.name}
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
                  handleDelete={showAlert}
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
  updateMovie,
  deleteMovie
};
export default connect(mapStateToProps, mapDispatchToProps)(UpdateMovie);
