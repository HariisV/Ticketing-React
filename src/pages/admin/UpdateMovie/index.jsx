import React, { useState, useEffect } from "react";
import Header from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import axios from "../../../utils/axios";
import MovieListCard from "../../../components/MovieUpdateCard";
import Pagination from "react-paginate";

const getMovie = () => {};

const UpdateMovie = (props) => {
  const id = props.match.params.id;
  const [dataMovie, setMovie] = useState({});
  const [dataAllMovie, setAllMovie] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [page, setPage] = useState(1);

  useEffect(() => {
    getMovieById();
    getListMovie(page);
    getMovieById();
    getListMovie();
  }, [id, page]);

  const getMovieById = () => {
    axios
      .get(`/movie/${id}`)
      .then((res) => {
        setMovie(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err.response);
      });
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

  const handlePagination = (event) => {
    console.log("////////////////");
    setPage(event.selected + 1);
  };

  console.log(page);
  return (
    <>
      <div className="container">
        <Header />
        <section className="heroo_details mt-5">
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
                    src={
                      dataMovie.image
                        ? `${process.env.REACT_APP_URL_BACKEND}uploads/movie/${dataMovie.image}`
                        : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
                    }
                    className="update__movie--img"
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
                      <label htmlFor="fn">Movie Name</label>
                      <input id="fn" type="text" className="form-control" value={dataMovie.name} />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="personal_info mx-0">
                    <div className="form-group">
                      <label htmlFor="fn">Category</label>
                      <input
                        id="fn"
                        type="text"
                        className="form-control"
                        value={dataMovie.category}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="personal_info mx-0">
                    <div className="form-group">
                      <label htmlFor="fn">Director</label>
                      <input
                        id="fn"
                        type="text"
                        className="form-control"
                        value={dataMovie.director}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="personal_info mx-0">
                    <div className="form-group">
                      <label htmlFor="fn">Casts</label>
                      <input id="fn" type="text" className="form-control" value={dataMovie.cast} />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="personal_info mx-0">
                    <div className="form-group">
                      <label htmlFor="fn">Release Date</label>
                      <input
                        id="fn"
                        type="date"
                        className="form-control"
                        value={dataMovie.releaseDate}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="personal_info mx-0">
                    <div className="form-group">
                      <label htmlFor="fn">Duration Hour</label>
                      <input
                        id="fn"
                        type="text"
                        className="form-control"
                        value={dataMovie.duration}
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
              name=""
              value={dataMovie.sypnosis}
              className="form-control"
              id=""
              cols="30"
              rows="7"
            ></textarea>
          </p>
          <div className="text-end">
            <button className="btn btn-outline-primary update__movie--btn">Reset</button>
            <button className="btn btn-primary update__movie--btn">Submit</button>
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
                  muatUlangData={getMovieById}
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
            onPageChange={handlePagination}
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

export default UpdateMovie;
