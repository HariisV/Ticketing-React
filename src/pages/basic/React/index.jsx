import React, { Component } from "react";
import Navbar from "../../../components/Navbar";
import { Button, Modal } from "react-bootstrap";
class BasicReact extends Component {
  constructor() {
    super();
    // console.log("CONSTRUCTOR IS RUNNING !");
    this.state = {
      name: "Haris",
      data: [],
      search: "",
      show: false
    };
  }
  componentDidMount() {
    // console.log("COMPONENT WILLMOUNT IS RUNNING "); //COMPONENT WILLMOUNTx
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
    // console.log(`HALO OM ${data}`);
  };
  changeText = (event) => {
    // console.log(event.target.value);
    // console.log(event);
    this.setState({
      search: event.target.value
    });
  };
  handleSearch = (event) => {
    if (event.key === "Enter") {
      // console.log("USER PRESS ENTER");
      this.setState({
        search: event.target.value
      });
    }
    // console.log(event.key);
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

  render() {
    // console.log(this.state.data);
    return (
      <>
        <h1>Hello World !</h1>
        {this.state.data.map((item, index) => (
          <div key={index}>
            <h2>{item.movieName}</h2>
          </div>
        ))}
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
      </>
    );
  }
}

export default BasicReact;
