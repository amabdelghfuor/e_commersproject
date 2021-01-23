import React from 'react';
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";
import Cart from "./Pages/Cart/Cart";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";


export default function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route  path="/Content/:id" component={Details}/>
               <Route path="/Cart" component={Cart}/>
            </Switch>
            <Footer/>
        </Router>
    )
}