import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BasicReact from "./pages/basic/React";
import Logins from "./pages/basic/Login";
import Login from "./pages/auth/Login";
import Home from "./pages/main/Home";
import Details from "./pages/main/MovieDetail";
import Booking from "./pages/main/MovieBooking";
import Checkout from "./pages/main/MovieCheckout";
import basicHome from "./pages/basic/Home";
import detailMovie from "./pages/basic/DetailMovie";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/basic-react" exact component={BasicReact} />
          <Route path="/basic/login" exact component={Logins} />
          <Route path="/basic/home" exact component={basicHome} />
          <Route path="/basic/detailMovie" exact component={detailMovie} />
          <Route path="/basic/detailMovie/:movieId" exact component={detailMovie} />
          <Route path="/login" exact component={Login} />
          <Route path="/" exact component={Home} />
          <Route path="/movie/:id" exact component={Details} />
          <Route path="/booking" exact component={Booking} />
          <Route path="/checkout" exact component={Checkout} />
        </Switch>
      </Router>
    );
  }
}

export default App;
