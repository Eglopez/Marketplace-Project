import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import logo from '../../logo.svg';
import '../../App.css';

class HomeNavbar extends Component{
    render(){
        return(          
        <nav className="navbar navbar-dark bg-dark container-fluid">
        
        <div Style="align-items: center" >
                <img src={logo} className="App-logo"></img>
            </div>

            <div Style="align-items: center">
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Buscar Anuncio..." aria-label="Search"></input>
                    <button className="btn btn-outline-info" type="submit">Buscar</button>
                </form>
            </div>
                    
            <div Style="align-items: flex-end">
            
            </div>
            
            </nav>

        );
    }
}

export default HomeNavbar;

