import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import logo from '../../logo.svg';
import '../../App.css';

class Navigation extends Component{
    render(){
        return(          
            <nav className="navbar navbar-dark bg-dark container-fluid row">    
            <div className="col-lg-4 d-flex justify-content-start" >
                LOGOTIPO
                    <img  className="App-logo"></img>
                </div>

                <div className="col-lg-4" >
                    <form className="d-flex">
                        <input className="form-control" type="search" placeholder="Buscar Anuncio..." aria-label="Search"></input>
                        <button className="btn btn-outline-info" type="submit">Buscar</button>
                    </form>
                </div>
                        
                <div className="col-lg-4 " >
                    <Link to="/login" className="btn btn-primary mb-3 App-button-blue float-end" type="submit">Iniciar Sesión</Link> <Link to="/signup" className="btn btn-primary mb-3 App-button  float-end" type="submit">Registrarse</Link>
                </div>
            </nav>
        );
    }
}

export default Navigation;

