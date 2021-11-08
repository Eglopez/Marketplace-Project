import React, { Component } from 'react';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import '../../App.css';
import axios from 'axios'
import userProfile from '../../user-profile.svg';


class NavigationUser extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark container-fluid row">
                <div className="col-lg-4 d-flex justify-content-start" >
                    <Link to="/home" class="text-decoration-none text-white">Lo Compro HN</Link>
                    {/* <a type="submit">Lo Compro HN</a> */}
                    <img className="App-logo"></img>
                </div>

                <div className="col-lg-4" >
                    <form className="d-flex">
                        <input className="form-control" type="search" placeholder="Buscar Anuncio..." aria-label="Search"></input>
                        <button className="btn btn-outline-info" type="submit">Buscar</button>
                    </form>
                </div>

                <div className="col-lg-4">

                    <div className="dropdown float-end" >
                        <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <Avatar size={40} round="20px" alt="img" ></Avatar>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16" color=" #4ACAD9">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                            </svg>
                        </a>
                        <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                            <li><a className="dropdown-item" href="#">Configuracion</a></li>
                            <li><Link to="/user-profile" className="dropdown-item" href="#">Perfil</Link></li>
                            <li><hr className="dropdown-divider"></hr></li>
                            <li><Link to="/" className="dropdown-item">Cerrar Sesión</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>


        );
    }
}

export default NavigationUser;