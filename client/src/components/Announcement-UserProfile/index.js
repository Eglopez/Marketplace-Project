import '../../App.css';
import NavigationUser from '../User-Navbar';
import Atable from '../Announcement-table';
import Avatar from 'react-avatar';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import userprofile from '../../user-profile.svg';



function AnnouncementProfile() {
      const token = localStorage.getItem('token')
      const history = useHistory();
   
      const id_user = localStorage.getItem('id_user')
      const [user,setUser] = useState({});
      //const token = localStorage.getItem('token');
      const [publication,setPublications] = useState({})
      console.log(id_user);

      useEffect(()=>{
          axios.get(`http://localhost:3000/api/users/user/${id_user}`,{
            headers:{
              Authorization:`Bearer ${token}`
            }
          })
            .then(res => {
                console.log(res.data[0]);
              setUser(res.data[0])
              let user_id = res.data[0].id
              axios.get(`http://localhost:3000/api/publications/list-per-user/${user_id}`,{
                headers:{
                  Authorization:`Bearer ${token}`
                }
              }).then(res => {
                  console.log(res.data);
                setPublications(res.data)})
                console.log(res.data[0]);
                console.log(res.data);
            })
            .catch(err => console.log(err))
      }, [])
      
      console.log(publication);
      
  

     

      return(
        <div className="">

          <header className="App-header">
            <NavigationUser></NavigationUser>
          </header>

          <body>
            <div className="continer-fluid " > 
              <div className="row">

                <div className="col-lg-2">
                </div>


                <div className= "col-lg-8" Style="background-color: #ffffff" >

                  <div className= " row " >
                    <div className= "col-3  "  >
                        <div className= "mt-2 border border-1 " Style="height: 200px ">
                          <Avatar src={userprofile} size="200" textSizeRatio={1.75} />
                        </div>
                    </div>

                    <div className= "col-6 mt-3" >
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

                    <div className= "col-3" >
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

                  <div className= " row mt-3 border border-1 mt-4" >
                        <div className= " col">
                          <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                              <Link to="/announcement-user-profile" className="nav-link active" id="home-tab"  type="button" role="tab" aria-controls="anuncios" aria-selected="true" ><b>Anuncios Publicados</b></Link>
                            </li>
                          
                            <li className="nav-item" role="presentation">
                              <Link to="/user-reviews" className="nav-link" id="contact-tab" type="button" role="tab" aria-controls="review" aria-selected="false" >RESEÑAS</Link>
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

                                                
                              </nav>
                            </form>

                            <br></br>
                              <table className="table table-striped table-hover">
                                <tbody>
                                     {publication.length > 0 && publication.map(pub => (
                                       <Atable title={pub.title} price={pub.price} date={pub.date_publication} department={pub.depto} municipality={pub.munic}></Atable>
                                     ))}      
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


export default AnnouncementProfile; 