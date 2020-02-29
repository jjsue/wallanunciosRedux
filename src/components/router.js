import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import RegisterComp from './register';
import LoginComp from './login'
import AdsComp from './addlist'
import DetailComponent from './detail'
import CreateAd from './create-add';
export default class MyRouter extends Component{
    render(){
        return(
            <>
            <Router>    
                <nav className="bg-primary">
                    <ul className="nav nav-pills nav-fills navbar navbar-light bg-light">
                        <li className="nav-item btn">
                            <Link to = "/createad" className="nav-link">Crear Anuncio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to = "/ads" className="nav-link">Anuncios</Link>
                        </li>
                        <li className="nav-item">
                            <Link to = "/register" className="nav-link">Registrarse</Link>
                        </li>
                        <li className="nav-item">
                            <Link to = "/login" className="nav-link">Iniciar sesión</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/ads" component={AdsComp} />
                    <Route path="/ads/:adId" component={DetailComponent} />
                    <Route path="/register" component={RegisterComp} />
                    <Route path="/login" component={LoginComp} />
                    <Route path="/createad" component={CreateAd} />
                </Switch>
            </Router>
            </>
        )
    }
}