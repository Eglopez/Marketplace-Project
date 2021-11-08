import '../../App.css';
import NavigationUser from '../User-Navbar';
import Atable from '../Announcement-table';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import userProfile from '../../user-profile.svg';



function Profile() {

  const token = localStorage.getItem('token')

  const [publications, setPublications] = useState([]);
  const [image, setImage] = useState([]);
  const [user, setUser] = useState({});


  useEffect(() => {
    axios.get('http://localhost:3000/api/users/current', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => setUser(res.data[0]))
      .catch(res => console.log(res))
  }, [])


  // ----------------------------- Mostrando Anuncios del usuario-----------------

  useEffect(() => {
    axios.get('http://localhost:3000/api/publications/list-current-user', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => setPublications(res.data))

  }, [])

  // console.log(publications);

  // useEffect(() => {
    // axios
    //   .get(`http://localhost:3000/api/uploads/list-per-publication/${idp}`)
    //   .then(res => {
    //     setImage(res);


  //     })
  //     .catch(err => console.log(err))
  // }, [])


  const valuesImg = (idp) => {
    axios
    .get(`http://localhost:3000/api/uploads/list-per-publication/${idp}`)
    .then(res => {
      setImage(res);
    })

    return idp;
  }

  return (
    <div className="">

      <header className="App-header">
        <NavigationUser></NavigationUser>
      </header>

      <body>
        <div className="continer-fluid " >
          <div className="row">

            <div className="col-lg-2">
            </div>


            <div className="col-lg-8" Style="background-color: #ffffff" >

              <div className=" row " >
                <div className="col-3  "  >
                  <div className="mt-2 border border-1 " Style="height: 200px ">
                    <Avatar src={userProfile} size="200" textSizeRatio={1.75} />
                  </div>
                </div>

                <div className="col-6 mt-3" >
                  <h5><label className="float-start" Style="color:#48D9D9"><b>{user.name}</b></label></h5>
                  <br></br>
                  <label className="float-start">Departamento: {user.department}</label>
                  <br></br>
                  <label className="float-start">Municipio: {user.municipality}</label>
                  <br></br>
                  <label className="float-start">Direccion: {user.direction}</label><br></br>
                  <label className="float-start">Correo: {user.email}</label><br></br>
                  <label className="float-start">Telefono: {user.phone}</label><br></br>
                </div>

                <div className="col-3" >
                  <p className="clasificacion">
                    <h3>
                      <label Style="color:yellow" >★</label>
                      <label Style="color:yellow" >★</label>
                      <label Style="color:yellow" >★</label>
                      <label Style="color:yellow" >★</label>
                      <label Style="color:gray" > ☆</label>
                    </h3>
                    <h2>
                      <label>4.0</label>
                    </h2>
                  </p>
                </div>
              </div>

              <div className=" row mt-3 border border-1 mt-4" >
                <div className=" col">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#anuncios" type="button" role="tab" aria-controls="anuncios" aria-selected="true"><b>MIS ANUNCIOS</b></button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <Link to="wishlist" className="nav-link" id="profile-tab" type="button" role="tab" aria-controls="lista" aria-selected="false">LISTA DE DESEOS</Link>
                    </li>
                    <li className="nav-item" role="presentation">
                      <Link to="/user-profile-reviews" className="nav-link" id="contact-tab" type="button" role="tab" aria-controls="review" aria-selected="false">RESEÑAS</Link>
                    </li>
                    <li className="nav-item" role="presentation">
                      <Link to="/home" className="nav-link" type="button" aria-controls="home" aria-selected="false">HOME</Link>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="anuncios" role="tabpanel" aria-labelledby="home-tab">

                      <br></br>
                      <form>
                        <nav className="navbar navbar-ligth bg-ligth  row">
                          <div className="col-lg-5 d-flex justify-content-start" >
                            < form className="d-flex justify-content-start">
                              <input className="form-control" type="search" placeholder="Buscar Anuncio..." aria-label="Search"></input>
                              <button className="btn btn-outline-info" type="submit">Buscar</button>
                            </form>
                          </div>

                          <div className="col-lg-6 btn-group" role="group" aria-label="Basic example" >
                            <Link to="new-announcement" className="btn btn-primary mb-3 App-button-blue  float-end" type="submit">NUEVO ANUNCIO</Link>
                            <button className="btn btn-dark mb-3 App-button-black  float-end" type="submit">DAR DE BAJA</button>
                            <button className="btn btn-info mb-3 App-button  float-end" type="submit">EDITAR</button>
                          </div>
                        </nav>
                      </form>

                      <br></br>
                      <table className="table table-striped table-hover">
                        <tbody>
                          {
                            publications.map((publication) => {



                              return <Atable title={publication.title}
                                price={publication.price}
                                date={publication.date_publication}
                                depto={publication.depto}
                                mun={publication.munic}
                                pub={publication.id_publication}
                                // img={valuesImg(publication.id_publication)}


                              ></Atable>
                            }
                            )
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>
              </div>

            </div>


            <div className="col-lg-2">
            </div>

          </div>

        </div>
      </body>
      <footer>
        <div Style="background-color: #575958">
          pie de pagina
        </div>
      </footer>
    </div>

  );
}


export default Profile;