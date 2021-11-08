import React, {Component} from 'react';
import '../../App.css';

class Filters extends Component{
    render(){
        return(
            <form>
                <br></br>
                <button className="btn btn-outline-info " satyle="" type="submit">Filtrar</button>
                <br></br>
                <br></br>
                <label className="d-flex align-items-start">LUGAR</label>
                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                  <option selected>Departamento</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                </select>
                
                <br></br>

                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                  <option selected>Municipio</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                </select>

                <br></br>
                <br></br>
                <label className="d-flex align-items-start">CATEGORIA</label>
                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                  <option selected>Categoria</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                </select>
                
                <br></br>
                <br></br>
                <label className="d-flex align-items-start">PRECIO</label>
                <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                  <option selected>De Mayor Precio a Menor Precio</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                </select>
                
                <br></br>
                <br></br>
                <label className="d-flex align-items-start" >MAS RECIENTE</label>
                <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                  <option selected>Mas reciente</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                </select>
      
                <br></br>
                <br></br>
                <label className="d-flex align-items-start">CALIFICACION</label>
                <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                  <option selected>Calificacion Mas Alta</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                </select>
              </form>

        );
    }
}


export default Filters;