import React, { Component } from "react";
import Navbar from "../../../components/Basic/Navbar";
import { Button, Modal } from "react-bootstrap";
import CardMovie from "../../../components/Basic/Card";
import axios from "../../../utils/axios";
class BasicReact extends Component {
  constructor() {
    super();
<<<<<<< HEAD
    //
=======
    // console.log("CONSTRUCTOR IS RUNNING !");
>>>>>>> 491cf2c3e90cbf476e7cd7e4ffde2dddbe4afae8
    this.state = {
      name: "Haris",
      data: [],
      search: "",
      show: false,
      form: {
        name: "",
        category: "",
        releaseDate: "",
        duration: "",
        director: "",
        cast: "",
        sypnosis: "",
        image: ""
      }
    };
  }
  componentDidMount() {
<<<<<<< HEAD
    //
=======
    // console.log("COMPONENT WILLMOUNT IS RUNNING "); //COMPONENT WILLMOUNTx
>>>>>>> 491cf2c3e90cbf476e7cd7e4ffde2dddbe4afae8
    this.setState({
      data: [
        {
          movieName: "Spiderman"
        },
        {
          movieName: "Batman"
        }
      ]
    });
  }
  handleClick2 = (data) => {
<<<<<<< HEAD
    //
  };
  changeText = (event) => {
    //
    //
=======
    // console.log(`HALO OM ${data}`);
  };
  changeText = (event) => {
    // console.log(event.target.value);
    // console.log(event);
>>>>>>> 491cf2c3e90cbf476e7cd7e4ffde2dddbe4afae8
    this.setState({
      search: event.target.value
    });
  };
  handleSearch = (event) => {
    if (event.key === "Enter") {
<<<<<<< HEAD
      //
=======
      // console.log("USER PRESS ENTER");
>>>>>>> 491cf2c3e90cbf476e7cd7e4ffde2dddbe4afae8
      this.setState({
        search: event.target.value
      });
    }
<<<<<<< HEAD
    //
=======
    // console.log(event.key);
>>>>>>> 491cf2c3e90cbf476e7cd7e4ffde2dddbe4afae8
  };

  handleShow = () => {
    this.setState({
      show: true
    });
  };

  handleClose = () => {
    this.setState({
      show: false
    });
  };
<<<<<<< HEAD
  handleUpdateMovie = (data) => {};
=======
  handleUpdateMovie = (data) => {
    console.log(data);
  };
>>>>>>> 491cf2c3e90cbf476e7cd7e4ffde2dddbe4afae8
  changeText = () => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value
      }
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
<<<<<<< HEAD

=======
    console.log(this.state.form);
>>>>>>> 491cf2c3e90cbf476e7cd7e4ffde2dddbe4afae8
    const formData = new FormData();
    formData.append("name", this.state.form.name);
    for (const data in this.state.form) {
      formData.append(data, this.state.form[data]);
    }
    for (const pair of formData.entries()) {
<<<<<<< HEAD
=======
      console.log(pair[0] + ", " + pair[1]);
>>>>>>> 491cf2c3e90cbf476e7cd7e4ffde2dddbe4afae8
    }
    // axios.post("movie", formData);
  };

<<<<<<< HEAD
  setUpdate = () => {};

  handleUpdate = () => {};

  handleDelete = () => {};
=======
  setUpdate = () => {
    console.log("setUpdate");
  };

  handleUpdate = () => {
    console.log("handleUpdate");
  };

  handleDelete = () => {
    console.log("DELETES");
  };
>>>>>>> 491cf2c3e90cbf476e7cd7e4ffde2dddbe4afae8
  changeFile = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.files[0]
      }
    });
  };
  render() {
<<<<<<< HEAD
    //
=======
    // console.log(this.state.data);
>>>>>>> 491cf2c3e90cbf476e7cd7e4ffde2dddbe4afae8
    return (
      <>
        {/* <h1>Hello World !</h1> */}
        {/* {this.state.data.map((item, index) => (
          <div key={index}>
            <h2>{item.movieName}</h2>
          </div>
        ))} */}
        <Navbar userLogin="haris" />
        <button onClick={() => this.handleClick2(1)}>Click Me</button>
        <hr />
        <input type="text" placeholder="search" onChange={(event) => this.changeText(event)} />
        <input type="text" placeholder="search" onKeyPress={this.handleSearch} />
        <br />
        <small>{this.state.search}</small>
        <hr />
        {this.state.data.length > 0 ? (
          this.state.data.map((item, index) => (
            <div key={item.movieId}>
              <h2>{item.movieName}</h2>
            </div>
          ))
        ) : (
          <h5>DATA NOT FOUND</h5>
        )}
        {/* BTRAP */}
        <button className="btn btn-primary">SS</button>
        <Button variant="primary"> PRIMARS</Button>
        <hr />
        <hr />
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="name"
          onChange={(event) => {
            this.changeText(event);
          }}
        />
        <input
          type="text"
          className="form-control mt-3"
          name="category"
          placeholder="category"
          onChange={(event) => {
            this.changeText(event);
          }}
        />
        <input
          type="date"
          className="form-control mt-3"
          name="releaseDate"
          placeholder="releaseDate"
          onChange={(event) => {
            this.changeText(event);
          }}
        />
        <input
          type="text"
          className="form-control mt-3"
          name="duration"
          placeholder="duration"
          onChange={(event) => {
            this.changeText(event);
          }}
        />
        <input
          type="text"
          className="form-control mt-3"
          name="director"
          placeholder="director"
          onChange={(event) => {
            this.changeText(event);
          }}
        />
        <input
          type="text"
          className="form-control mt-3"
          name="cast"
          placeholder="cast"
          onChange={(event) => {
            this.changeText(event);
          }}
        />
        <input
          type="text"
          className="form-control mt-3"
          name="sypnosis"
          placeholder="sypnosis"
          onChange={(event) => {
            this.changeText(event);
          }}
        />
        <input
          type="file"
          className="form-control mt-3"
          name="image"
          placeholder="sypnosis"
          onChange={(event) => {
            this.changeFile(event);
          }}
        />

        <button onClick={this.handleSubmit} className="btn btn-primary">
          submit
        </button>

        <hr />
        <hr />
        <Button variant="primary" onClick={this.handleShow}>
          Launch demo modal
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, youre reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <hr />
        {/* COMPONENT COMMUNICATION */}
        {/* <CardMovie handleUpdate={this.handleUpdateMovie} /> */}
      </>
    );
  }
}

export default BasicReact;
