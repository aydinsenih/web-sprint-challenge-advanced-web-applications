import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Login} />
                    <PrivateRoute path="/bubblepage" component={BubblePage} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
