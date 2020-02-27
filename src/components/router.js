import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch, withRouter, Redirect } from "react-router-dom";
import RegisterComp from './register';
import LoginComp from './login'
import AdsComp from './addlist'
import DetailComponent from './detail'
export default class MyRouter extends Component{
  constructor(props){
    super(props);
  }
    render(){
        return(
            <>
            <Router>    
                <nav>
                    <ul>
                        <li>
                            <Link to = "/ads">Anuncios</Link>
                        </li>
                        <li>
                            <Link to = "/register">Registrarse</Link>
                        </li>
                        <li>
                            <Link to = "/login">Iniciar sesión</Link>
                        </li>
                    </ul>
                </nav>
                <hr/>
                <Switch>
                    <Route exact path="/ads" component={AdsComp} />
                    <Route path="/ads/:adId" component={DetailComponent} />
                    <Route path="/register" component={RegisterComp} />
                    <Route path="/login" component={LoginComp} />
                </Switch>
            </Router>
            </>
        )
    }
}