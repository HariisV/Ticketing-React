import React from "react";
import axios from "../../utils/axios";
import { Link } from "react-router-dom";
const HistoryOrder = (props) => {
  const getDate = (data) => {
    let dayBook = new Date(data);
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thusday", "Friday", "Saturday"];
    return `${days[dayBook.getDay()]}, ${dayBook.getDate()} ${dayBook.toLocaleString("default", {
      month: "long"
    })} ${dayBook.getFullYear()}`;
  };
  // const getMovieById = (id) => {
  //   const pp = axios.get(`/movie/${id}`).then((res) => {
  //     return res.data.data[0].name;
  //   });
  //   return console.log(
  //     pp.then((err) => {
  //       return err;
  //     })
  //   );
  // };

  return (
    <>
      <section className="ticket px-4">
        {/* <img src={getScheduleById()} className="img__sponsor" alt="" /> */}
        {props.data.map(
          (element, index) => (
            console.log(element),
            (
              <div className="card card-body  tab__history--card mb-5 card__ticket" key={index}>
                <div className=" ngeflex__width">
                  <br />
                  <small className="tab__date">{getDate(element.dateBooking)}</small>
                </div>
                <p className="tab__title">{element.invoice}</p>
                <hr />
                <div className="row">
                  <div className="col-md-6">
                    {/* tab__btn--isUsed */}
                    <Link
                      to={`/ticket-review/${element.id}`}
                      className="btn btn-success  tab__btn--primary"
                    >
                      Ticked in active
                    </Link>
                  </div>
                  <div className="col-md-6">
                    <div className="btn-group tab__btn--float shotimes__sponsor--name">
                      <button
                        type="button"
                        className="btn dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Show Details
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Separated link
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )
          )
        )}
      </section>
    </>
  );
};

export default HistoryOrder;
