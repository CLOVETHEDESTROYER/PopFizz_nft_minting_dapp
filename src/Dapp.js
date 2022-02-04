import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./Navigation"
import Countdown from "./Countdown"
import App from "./App"

function Dapp() {
    return (
        <Router>
            <Navigation />
            <Switch>
                <Route path='/' exact component={Dogs} />
                <Route path='/Countdown' exact component={Countdown} />
                <Route path='/App' component={App} />
            </Switch>
        </Router>
    );
}

export default Dapp;