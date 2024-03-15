import React from "react";
import { 
    BrowserRouter as Router, 
    Switch,
    Route 
} from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
export const Routers = () => {
    return (
    <Router>
        <Switch>
            <Router path="/">
                <HomePage />
            </Router>
            <Router path="/Arama">
                <Search />
            </Router>
            <Router path="/Anasayfa">
                <HomePage />
            </Router>
            <Router path="/Hakkimizda">
                <AboutPage />
            </Router>
        </Switch>
    </Router>
    );
}