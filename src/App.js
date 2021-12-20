import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Page
import BasicReact from "./pages/basic/React";
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
import UpdateMovie from "./pages/admin/ManageMovie";
import UpdateSchedule from "./pages/admin/ManageSchedule";
import profile from "./pages/main/Profile";
import ResultTicket from "./pages/main/ResultTicket";

// Redux
import CounterClass from "./pages/basic/Counter/counter.class";
import CounterFunction from "./pages/basic/Counter/counter.function";
import { Provider } from "react-redux";
import { store, persistor } from "./stores/store";
import { PersistGate } from "redux-persist/integration/react";

//Router
import PrivateRoute from "./helpers/routes/PrivateRoute";
import PublicRoute from "./helpers/routes/PublicRoute";
import AdminRoute from "./helpers/routes/AdminRoute";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
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
<<<<<<< HEAD
              <PublicRoute path="/profile" exact component={profile} />
=======
              <PrivateRoute path="/profile" exact component={profile} />
>>>>>>> 491cf2c3e90cbf476e7cd7e4ffde2dddbe4afae8
              <PrivateRoute path="/basic-react" exact component={BasicReact} />
              <PrivateRoute path="/booking" exact component={Booking} />
              <PrivateRoute path="/checkout" exact component={Checkout} />
              <PrivateRoute path="/SuccessPayment" exact component={SuccessPayment} />
              <PrivateRoute path="/ticket-review/:id" exact component={ResultTicket} />

              {/* AdminRoute */}
              <AdminRoute path="/dashboard" exact component={Dashboard} />
              <AdminRoute path="/movies/create" exact component={UpdateMovie} />
              <AdminRoute path="/movies/update/:id" exact component={UpdateMovie} />
              <AdminRoute path="/schedule/create" exact component={UpdateSchedule} />
              <AdminRoute path="/schedule/update/:id" exact component={UpdateSchedule} />
              {/* AdminRouteEnd */}
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
