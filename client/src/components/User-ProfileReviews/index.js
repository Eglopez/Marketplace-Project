import '../../App.css';
import './reviews.css';
import NavigationUser from '../User-Navbar';
import Avatar from 'react-avatar';
import userprofile from '../../user-profile.svg';
import Review from '../Review-card';
import { useEffect, useState } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'



function UserProfileViewReview() {
  
  const token = localStorage.getItem('token')
  const id_user = localStorage.getItem('id_user')
  const [user,setUser] = useState({});
  const [reviews,setReviews] = useState([])
  

  useEffect(()=>{

    axios.get(`http://localhost:3000/api/users/current`,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    .then(res => {
      setUser(res.data[0])
      console.log(res.data[0].id);
      let current_userId = res.data[0].id
      axios.get(`http://localhost:3000/api/reviews/list-user/${current_userId}`,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      }).then(res => {
        setReviews(res.data)})
      
    }).catch(err => console.log(err))

     
   
}, [])





console.log(reviews);


  


      return(
        <div>
          <header className="App-header">
            <NavigationUser></NavigationUser>
          </header>
      
          <body>
            <div className="continer-fluid " > 
              <div className="row">

                <div className="col-lg-2"></div>
        
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
                          <label className="float-start">{user.department}</label>
                          <br></br>
                          <label className="float-start">{user.municipality}</label>
                          <br></br>
                          <label className="float-start">{user.direction}</label><br></br>
                          <label className="float-start">{user.email}</label><br></br>
                          <label className="float-start">{user.phone}</label><br></br>
                    </div>
                    <div className= "col-3" >
                          <p>
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
                    {/*Navbar */}
                  <div className= " row mt-3 border border-1 mt-4" >
                        <div className= " col">
                          <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                              <Link to="/user-profile" className="nav-link " id="anuncios"  type="button" role="tab" aria-controls="anuncios" aria-selected="false">MIS ANUNCIOS</Link>
                            </li>
                            <li className="nav-item" role="presentation">
                              <Link to="wishlist" className="nav-link" id="profile-tab"  type="button" role="tab" aria-controls="lista" aria-selected="false">LISTA DE DESEOS</Link>
                            </li>
                            <li className="nav-item" role="presentation">
                              <Link to="/user-profile-reviews" className="nav-link active" id="review"  type="button" role="tab" aria-controls="review" aria-selected="true"><b>RESEÑAS</b></Link>
                            </li>
                            <li className="nav-item" role="presentation">
                              <Link to="/home" className="nav-link" id="home"  type="button" role="tab" aria-controls="home" aria-selected="false">HOME</Link>
                            </li>
                          </ul>
                        <div className="tab-content" id="myTabContent">
                          <div className="tab-pane fade show active" id="review" role="tabpanel" aria-labelledby="home-tab">
                                <br></br>
                                
                                <div className="col-lg-6 btn-group" role="group" aria-label="Basic example" >
                                      <Link to="new-announcement" className="btn btn-primary mb-3 App-button-blue  float-end" type="submit">NUEVO ANUNCIO</Link> 
                                      <button className="btn btn-dark mb-3 App-button-black  float-end" type="submit">DAR DE BAJA</button>
                                      <button className="btn btn-info mb-3 App-button  float-end" type="submit">EDITAR</button>
                                </div>  
                                <br></br>
                                {/*Reseñas y calificaciones publicadas por los usuarios */}
                                <div className= "container mt-2 mb-2 border-top">
                                    <p className= "h4" >Reseñas</p>
                                    {
                                      reviews.length > 0 && reviews.map(review => (
                                        <Review username={review.name_user_create_publication} comment={review.commentary} date={review.date_comments}></Review>
                                        
                                      ))
                                      
                                    }
                              
                                </div>

                          </div>
                        </div>

                    </div>

                  </div>
                </div>

                <div className="col-lg-2"></div></div>

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


export default UserProfileViewReview;