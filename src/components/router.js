import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch, withRouter, Redirect } from "react-router-dom";
import RegisterComp from './register';
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
                            <Link to = "/">Home</Link>
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
                    <Route path="/register" component={RegisterComp} />
                </Switch>
            </Router>
            </>
        )
    }
}