import React, {Component, useEffect} from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import '../../App.css';

class Atable extends Component{

    getItem(id){
        localStorage.setItem('id',id);
    }

    render(){
        
        return(      
        <tr ClassName="container-flid d-flex">                                
            {/* <td className="float-center" height="120px" width ="120px"><a href="#"><img alt="imagen" src={`data:image/${this.props};base64,` + this.props} alt="5" height="100px" width ="100px"></img></a></td> */}
            <td className="float-center" height="120px" width ="120px"><a href="#"></a></td>
            <td><i>Titulo: </i>{this.props.title}<br></br> <i>Precio: </i> L.{new Intl.NumberFormat([],{maximumSignificantDigits: 2}).format(this.props.price)}<br></br><br></br> <i>Fecha de Publicación: </i>{ moment(this.props.date).format('YYYY-MM-DD')}</td>
            <td><i>Departamento: </i> {this.props.depto}<br></br><i>Municipio: </i> {this.props.mun}</td>
           
            <td>
                <span className="custom-checkbox">
                    {/* <input type="checkbox" id="checkbox1" name="options[]" value="1"></input> */}
                    <label for="checkbox1"></label>
                </span>
            <Link onClick={this.getItem(this.props.pub)} to="announcement-info" class="card-link">Ver mas</Link>
            </td>


        </tr>
);
    }
}

export default Atable;