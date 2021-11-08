import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import '../../App.css';



const LoginForm = () => {

  
    const [user,setUser] = useState({"email":"", "password":""});
    const history = useHistory();

    const handleUser = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value});
    }
    

    const submitUser = (e) => {
        e.preventDefault();
        console.log(user);
        let user_data = {
            email: user.email,
            password: user.password,
        };
        console.log(JSON.stringify(user_data));

        axios({
            url:'http://localhost:3000/api/auth/login',
            method:'POST',
            responseType:'json',
            headers:{'Accept': 'application/json','Content-Type': 'application/json;charset=UTF-8'},
            data:user_data
        }).then(res => {
            let token = res.data.token;
            let rol = res.data.user.rol;
            localStorage.setItem('token',token)
            localStorage.setItem('rol',rol)
            history.push("/home");
        }).catch(err => {
            console.error(err);
        });

                
    }    

    return (
        <div className="container div-container border p-3 form abs-center h-25 w-40"  >

            <form className="row g-3 needs-validation" onSubmit={submitUser}>
                <div className="container">
                    <h2><label  className="form-label">INGRESA A TU CUENTA</label></h2>
                    <h10><label  className="form-label">Ingresa tus datos para ingresar</label></h10>
                </div>

                <div className="col-md-10">
                    <label for="staticEmail validationCustom05" className="form-label">Correo</label>
                    <input type="text" name="email" className="form-control" id="staticEmail validationCustom05" onChange={ handleUser }></input>
                    <div className="valid-feedback">
                    </div>
                </div>

                <div className="col-md-10">
                    <label for="inputPassword" className="form-label">Contraseña</label>
                    <input type="password" name="password" className="form-control" id="inputPassword" onChange={ handleUser }></input>
                    <div className="valid-feedback">
                    </div>
                </div>  
        
                <div className="col-12">
                    <button className="btn btn-primary App-button" type="submit">Iniciar Sesión</button>
                </div>

                <br></br>
                <div className="col-12">
                    <div className="form-check">                  
                        <label className="form-check-label" for="invalidCheck">
                            ¿No estás registrado?  
                        </label>
                        <Link to="/signup" className="form-check-label" > Registrate</Link>
                    </div>
                </div>          
            </form>
        
        </div>


    );
  }
  
  export default LoginForm;