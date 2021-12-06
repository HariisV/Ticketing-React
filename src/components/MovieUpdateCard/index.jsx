import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
const MovieUpdateCard = (props) => {
  return (
    <div className="col mx-4 mt-5">
      <div className="card shadow">
        <div className="card-body text-center mt-3">
          <img
            src={
              props.img
                ? `${process.env.REACT_APP_URL_BACKEND}uploads/movie/${props.img}`
                : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
            }
            className="upcoming__list--image"
            alt=""
          />
          <h4 className="h6 text-center upcoming__list--title">{props.name}</h4>
          <p className="text-center upcoming__list--category text-muted">{props.category}</p>
          <br />
          <Link
            to={`/movies/update/${props.id}`}
            className="btn btn-outline-primary upcoming__list--detail"
          >
            Update
          </Link>
          <button
            className="btn btn-outline-danger upcoming__list--detail mt-2"
            onClick={() => props.handleDelete(props.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(MovieUpdateCard);
