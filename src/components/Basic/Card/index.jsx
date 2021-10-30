import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
require("dotenv").config();

export default class index extends Component {
  handleSetUpdate = () => {
    this.props.handleUpdate(1);
  };
  render() {
    const { id, name, category, image } = this.props.data;
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={
              image
                ? `${process.env.REACT_APP_URL_BACKEND}uploads/movie/${image}`
                : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
            }
          />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{category}.</Card.Text>
            <Button variant="primary" onClick={() => this.props.handleDetail(id)}>
              Detail
            </Button>
            <Button variant="secondary" onClick={this.handleSetUpdate}>
              Update
            </Button>

            <Button variant="danger">Delete</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}
