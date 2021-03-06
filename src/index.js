import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { Provider } from "react-redux";
import "./styles/reset.css";
import Navbar from "./Navigation.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Countdown from "./Countdown";
import About from "./About";

const Routing = () => {
    return(
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/"  element={<App/>} />
                <Route path="/Countdown" element={<Countdown/>} />
            </Routes>
            {/*<Footer/>*/}
        </Router>
    )
}



ReactDOM.render(
  <Provider store={store}>
      <Routing />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
