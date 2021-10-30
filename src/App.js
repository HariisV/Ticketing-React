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
import SuccessPayment from "./pages/main/SuccessPayment";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/admin/Dashboard";
import UpdateMovie from "./pages/admin/UpdateMovie";
// Redux
import CounterClass from "./pages/basic/Counter/counter.class";
import CounterFunction from "./pages/basic/Counter/counter.function";
import { Provider } from "react-redux";
// import store from "./stores/store";
import store from "./stores/store";

//Router
import PrivateRoute from "./helpers/routes/PrivateRoute";
import PublicRoute from "./helpers/routes/PublicRoute";
import AdminRoute from "./helpers/routes/PublicRoute";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            {/* PublicRoute */}
            <PublicRoute path="/" exact component={Home} />
            <PublicRoute path="/basic/detailMovie" exact component={detailMovie} />
            <PublicRoute path="/basic/detailMovie/:movieId" exact component={detailMovie} />
            <PublicRoute path="/movie/:id" exact component={Details} />
            <PublicRoute path="/basic-counter-class" exact component={CounterClass} />
            <PublicRoute path="/basic-counter-function" exact component={CounterFunction} />
            <PublicRoute path="/basic/home" exact component={basicHome} />
            <PublicRoute path="/login" restricted={true} exact component={Login} />
            <PublicRoute path="/register" restricted={true} exact component={Register} />
            {/* PrivateRoute */}
            <PrivateRoute path="/basic-react" exact component={BasicReact} />
            <PrivateRoute path="/booking" exact component={Booking} />
            <PrivateRoute path="/checkout" exact component={Checkout} />
            <PrivateRoute path="/SuccessPayment" exact component={SuccessPayment} />

            {/* AdminRoute */}
            <AdminRoute path="/dashboard" exact component={Dashboard} />
            <AdminRoute path="/movie/update/:id" exact component={UpdateMovie} />
            {/* AdminRouteEnd */}
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
