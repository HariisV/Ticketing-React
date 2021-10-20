import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BasicReact from "./pages/basic/React";
import Login from "./pages/auth/Login";
import Home from "./pages/main/Home";
import Details from "./pages/main/MovieDetail";
import Booking from "./pages/main/MovieBooking";
import Checkout from "./pages/main/MovieCheckout";
import ShowingCard from "./components/ShowingCard";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/basic-react" exact component={BasicReact} />
          <Route path="/login" exact component={Login} />
          <Route path="/" exact component={Home} />
          <Route path="/details" exact component={Details} />
          <Route path="/booking" exact component={Booking} />
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/ShowingCard" exact component={ShowingCard} />
        </Switch>
      </Router>
    );
  }
}

export default App;
