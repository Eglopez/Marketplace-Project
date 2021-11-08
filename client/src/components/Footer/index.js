import React ,{Component} from 'react';
import logo from '../../logo.svg';

class Footer extends Component{
    render(){
        return(
            <footer className= " py-1  bg-dark" Style="background-color: #575958" >
                <div className="container py5"  >
                
                    <div className="row" Style="color:white">
                        <div className="col-lg-3 mb-3">
                            <a className="d-inline-flex align-items-center mb-2 link-white text-decoration-none" href="#" aria-label="Bootstrap">
                                <img src={logo} xmlns="#" width="40" height="32" className="d-block me-2" viewBox="0 0 118 94" role="img"></img>
                                <span className="fs-5" Style="color: #ffffff">LOGOTIPO</span>
                            </a>
                            <ul className="list-unstyled small text-muted">
                                <li className="mb-2">Publica tu anuncio con nosotros.</li>
                            </ul>
                        </div>

                        <div className="col-lg-2 mb-3 text-start"><p className="h6"><a href="#" className="text-decoration-none" Style="color: #ffffff">Home</a></p></div> 
                        <div className="col-lg-2 mb-3 text-start">
                            <p className="h6">Correo</p>
                            <ul className="list-unstyled">
                                <li className="mb-2 text-muted">Correo@contacto.com</li>
                            </ul>
                        </div>

                        <div className="col-lg-2 mb-3 text-start">
                            <p className="h6 text-start">Telefonos</p>
                            <ul className="list-unstyled">
                                <li className="mb-2 text-muted">2227-3223 / 2223-2335</li>

                            </ul>

                        </div>
                        
                        <div className="col-lg-3 mb-3 text-center">
                            <p className="h5">Siguenos en </p>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                <a href="https://es-la.facebook.com" type="button" className="badge bg-info rounded-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                                    </svg>
                                    <span className="visually-hidden">Button</span>
                                </a>
                                <a href="https://www.instagram.com" type="button" className="badge bg-info rounded-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                                    </svg>
                                    <span className="visually-hidden">Button</span>
                                </a>
                                <a href="https://www.twitter.com" type="button" className="badge bg-info rounded-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                    </svg>
                                    <span className="visually-hidden">Button</span>
                                </a>
                                </li>
                            </ul>
                        </div>

                        <section>
                            <div className="pt-3 border-top">
                                <div className="row justify-content-center">
                                    <div className="col-lg-6 text-start">
                                        <span className="small light text-muted" > ©2021. All rights reserved</span>
                                    </div>
                                    <div className="col-lg-6 text-end">
                                        <a type="button" className=" small text-muted me-1" data-bs-toggle="modal" data-bs-target="#terms" >
                                        Términos y Condiciones</a>
                                        <span className="text-muted">|</span>
                                        <div className=" small text-muted">Tegucigalpa, Honduras</div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="modal fade" id="terms" tabindex="-1" aria-labelledby="termsLabel" aria-hidden="true" Style="color:black">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="termsLabel">Terminos y Condiciones</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body" id="terms">
                                        <p className="h4">Términos y Condiciones para usuarios</p>
                                        <p>
                                        Esta sección describe los Términos y Condiciones Generales aplicables a los usuarios del sitio web NombreProyecto .
                                        <p>Nuestro sitio web se encarga de proveer servicios en internet, que opera como un foro para que los vendedores y compradores intercambien información, 
                                        NO presentando ofertas u órdenes de compra de bienes, productos, servicios. </p>
                                        <p className="h4">Aceptación de los Términos</p>
                                        <p>Es obligatorio aceptar los términos y condiciones del servicio que se plantean en ésta sección  al momento de que el usuario se registre,
                                        de no ser así no podrá continuar con el preoceso de registro para obtener una cuenta de usuario en el sitio web.
                                        </p>
                                        <p className="h4">Información Personal y Cuentas de Usuarios</p>
                                        <p>Al crear y utilizar su cuenta de usuario, la información personal proporcionada por el usuario de manera explícita quedará registrada.</p>
                                        <p>Al momento de publicar un anuncio en nuestro sitio web su infomración personal (Nombre de Usuario, Departamento, Município, Dirección) será visible para cualquier usuario, aunque no esté registrado.</p>
                                        <p>Caulquier usuario que no esté debidamente registrado en el sitio no podrá acceder a la información de contacto (Correo electrónico, Número de Télefono) de cualquier usuario que haya publicado un anuncio.</p>
                                        <p>Nos reservamos el derecho de eliminar su cuenta de usuario por cualquier motivo de denuncia o incumplimiento de nuestras normas.</p>
                                        <p className="h4">Sobre los Anuncios</p>
                                        <p>Los anuncios publicados por un usuario tendran un tiempo estimado de vigencia variable el cual queda a criterio de la adminsitración del sitio web</p>
                                        <p>Nos reservamos el derecho de eliminar cualquier anuncio publicado por cualquier motivo de denuncias o incumplimiento de nuestras normas</p>
                                        <p className="h4">Denuncias</p>
                                        <p>Los usuarios tienen la dispocisión de un apartado de denuncias para reportar a otros usuarios que incumplan con las normas del sitio. </p>
                                        <p>La verificación sobre las denuncias realizadas por parte de la administración del sitio puede conllevar a la eliminación de la cuenta de usuario
                                        o publicaciones de anuncios.
                                        </p>
                                        <p className="h4">Descargo de Responsabilidad</p>
                                        <p>El Usuario acepta y reconoce que el sitio web no se hará responsable por cualquier uso malintencionado del servicio presentado 
                                        por parte de cualquier usuario registrado en éste sitio web. 
                                        </p>
                                        </p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-primary App-button-blue" data-bs-dismiss="modal">Aceptar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
      </footer>
        );
    }
}
export default Footer;