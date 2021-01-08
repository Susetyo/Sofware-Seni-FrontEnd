import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./components/Main";

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Main />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
