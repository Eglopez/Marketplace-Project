import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import '../../App.css';


const SignUpForm = () => {
    
    const [user,setUser] = useState({"name":"", "password":"", "email":"", "phone":"", "dep":"","mun":"","dir":""});
    const [departments, setDepartments] = useState([]);
    const history = useHistory();
    const [municipies,setMunicipies] = useState([])
    
    useEffect(() => {
        axios({
        url: 'http://localhost:3000/api/address/departments',
        method: 'GET',
        }).then(res => {
            setDepartments(res.data)
        }).catch(err => {
            console.error(err);
        })

    }, [])
    
    const handleUser = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value}); 
    }

    const handleMunicipalities = (e) => {
        handleUser(e)
        muni(e.target.value)
    }

    const muni = (id) => {
        console.log(user.dep) 
        axios({
        url: `http://localhost:3000/api/address/mun-per-department/${id}`,
        method: 'GET',
        responseType:'json',
        headers:{'Accept': 'application/json','Content-Type': 'application/json;charset=UTF-8'}
    }).then(res => {
       
        setMunicipies(res.data)
        console.log(res.data);
        
    }).catch(err => {
        console.error(err);
    });}
    

    const submitUser = (e) => {
        e.preventDefault();
        console.log(user);
        let user_data = {
            name: user.name,
            password: user.password,
            email: user.email,
            phone: user.phone,
            dep: user.dep,
            mun: user.mun,
            dir: user.dir
        };
        console.log(user_data);

        axios({
            url:'http://localhost:3000/api/auth/register',
            method:'POST',
            responseType:'json',
            headers:{'Accept': 'application/json','Content-Type': 'application/json;charset=UTF-8'},
            data:user_data
        }).then(res => {
            console.log(res);
            history.push("/login");
        }).catch(err => {
            console.error(err);
        });
            
    }  

   
                 
    return(
        <div className="container div-container border p-3 form abs-center h-25 w-40"  >

            <form className="row g-3 needs-validation" onSubmit={submitUser}>
                <div className="container">
                    <h2><label  className="form-label">CREA TU CUENTA</label></h2>
                    <h10><label  className="form-label">Ingresa tus datos para registrarte</label></h10>
                </div>

                <div className="col-md-9">
                    <label for="validationCustom05" className="form-label">Nombre</label>
                    <input type="text" name="name" className="form-control" id="validationCustom01"  onChange={ handleUser }  required></input>
                    <div className="valid-feedback">
                    </div>
                </div>

                <div className="col-md-9">
                    <label for="staticEmail validationCustom05" className="form-label">Correo</label>
                    <input type="email" name="email" className="form-control" id="staticEmail validationCustom05"  onChange={ handleUser } required></input>
                    <div className="valid-feedback">
                    </div>
                </div>
            
                <div className="col-md-9">
                    <label for="inputPassword" className="form-label">Contraseña</label>
                    <input type="password" name="password" className="form-control" id="inputPassword"  onChange={ handleUser } required></input>
                    <div className="valid-feedback">
                    </div>
                </div>

                <div className="col-md-9">
                    <label for="inputPassword" className="form-label">Confirmar Contraseña</label>
                    <input type="password" className="form-control" id="inputPassword"  onChange={ handleUser } required></input>
                    <div className="valid-feedback">
                    </div>
                </div>

                <div className="col-md-9">
                    <label for="validationCustom05" className="form-label">Telefono</label>
                    <input type="tel" name="phone" className="form-control" pattern="[0-9]{8}" id="validationCustom05"  onChange={ handleUser } required></input>
                    <div className="invalid-feedback">
                    </div>
                </div>

                <div className="col-md-9">
                    <label for="validationCustom05" className="form-label">Direccion</label>
                    <input type="text" name="dir" className="form-control" id="validationCustom01"  onChange={ handleUser } required></input>
                    <div className="valid-feedback">
                    </div>
                </div>
            
                <div className="col-md-6">
                    <label for="validationCustom04" className="form-label">Departamento</label>
                    <select name="dep" className="form-select" id="validationCustom04"  onChange={ handleMunicipalities } required>
                        <option defaultValue value="">Elegir Departamento</option>
                        { departments.length > 0 && departments.map( el => (
                            <option  key={el.id} value={el.id}>{el.department}</option>
                        ))}
                        
                    </select>
                    <div className="invalid-feedback">
                        Debe elegir un departemento
                    </div>
                </div>

                <div className="col-md-6">
                    <label for="validationCustom04" className="form-label">Municipio</label>
                    <select name="mun" className="form-select" id="validationCustom04" onChange={ handleUser } required>
                        <option defaultValue  value="">Elegir Municipio</option>
                        {municipies.length > 0 && municipies.map( mun => (
                            <option key={mun.id} value={mun.id}>{mun.municipality}</option>
                        ))}
                    </select>
                    <div className="invalid-feedback">
                        Debe elegir un municipio
                    </div>
                </div>


                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required></input>
                        <label className="form-check-label" for="invalidCheck">
                            Aceptar los <a className="form-check-label" > Terminos y Condiciones</a> 
                        </label>
                        <div className="invalid-feedback">
                            Debes aceptar los terminos y condiciones antes de registrarte.
                        </div>
                    </div>
                </div>

                <div className="col-12">
                    <button className="btn btn-primary App-button" type="submit">Registrarse</button>
                </div>

                <br></br>
                <div className="col-12">
                    <div className="form-check">                  
                        <label className="form-check-label" for="invalidCheck">
                            ¿Ya tienes cuenta?  
                        </label>
                        <Link to="/login" className="form-check-label" > Iniciar Sesión</Link>
                    </div>
                </div> 

            </form>
      
        </div>
    );
       
}
    
export default SignUpForm;