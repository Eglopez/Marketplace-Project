import '../../App.css';
import './reviews.css';
import NavigationUser from '../User-Navbar';
import Avatar from 'react-avatar';
import userprofile from '../../user-profile.svg';
import Review from '../Review-card';
import { useEffect, useState } from 'react';
import axios from 'axios'
import {Link, useHistory} from 'react-router-dom'
import Comment from '../Comment-card'


function ProfileViewReview() {
  
  const token = localStorage.getItem('token')
  const id_user = localStorage.getItem('id_user')
  const [user,setUser] = useState({});
  const [reviews,setReviews] = useState([])
  const [userComment,setUserComment] = useState({"comment":"","stars":""})

  useEffect(()=>{

    axios.get(`http://localhost:3000/api/users/user/${id_user}`,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    .then(res => {
      setUser(res.data[0])
      
      axios.get(`http://localhost:3000/api/reviews/list-user/${id_user}`,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      }).then(res => {
        setReviews(res.data)})
      })
      .catch(err => console.log(err))
   
}, [])



console.log(reviews)


const handleComment = (e) => {
  console.log(e.target.value);
  setUserComment({...userComment, [e.target.name]: e.target.value}); 
}

const addComment = (e) => {
  e.preventDefault();
  axios({
      url:'http://localhost:3000/api/reviews/user',
      method: 'POST',
      headers:{
        Authorization: `Bearer ${token}`
      },
      data: {
          userId: id_user,
          qualification: userComment.stars,
          comment: userComment.comment
      }
  }).then(res => {
      console.log(res);
      console.log("Comentario agregado exitosamente");
  }).catch(err => {
      console.error(err);
  })
  console.log(userComment.comment);
  

  setTimeout(() => {
    
    axios.get(`http://localhost:3000/api/users/user/${id_user}`,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    .then(res => {
      setUser(res.data[0])
      
      axios.get(`http://localhost:3000/api/reviews/list-user/${id_user}`,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      }).then(res => {
        setReviews(res.data)})
      })
      .catch(err => console.log(err))
      document.getElementById('validationTextarea').value = '';

  },1000);


}

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
                              <Link to="/announcement-user-profile" className="nav-link " id="anuncios"  type="button" role="tab" aria-controls="anuncios" aria-selected="false">ANUNCIOS PUBLICADOS</Link>
                            </li>
                            <li className="nav-item" role="presentation">
                              <Link to="/user-reviews" className="nav-link active" id="review"  type="button" role="tab" aria-controls="review" aria-selected="true"><b>RESEÑAS</b></Link>
                            </li>
                            <li className="nav-item" role="presentation">
                              <Link to="/home" className="nav-link" id="home"  type="button" role="tab" aria-controls="home" aria-selected="false">HOME</Link>
                            </li>
                          </ul>
                        <div className="tab-content" id="myTabContent">
                          <div className="tab-pane fade show active" id="review" role="tabpanel" aria-labelledby="home-tab">
                                <br></br>
                                 {/*Calificar al usuario y caja de comentario */}
                                <form > 
                                    <ul className="list-inline row justify-content-center">
                                        <li className="list-inline-item col-3 text-center">  
                                            <p className="h4">Valorar al usuario</p>
                                            <p className="Calificacion ">
                                                <input id="radio1" type="radio" name="stars" value="5" onChange={handleComment}></input>
                                                <label className="label form-label-calificacion" for="radio1">★</label>
                                                <input id="radio2" type="radio" name="stars" value="4" onChange={handleComment}></input>
                                                <label className="label form-label-calificacion" for="radio2">★</label>
                                                <input id="radio3" type="radio" name="stars" value="3" onChange={handleComment}></input>
                                                <label className="label form-label-calificacion" for="radio3">★</label>
                                                <input id="radio4" type="radio" name="stars" value="2" onChange={handleComment}></input>
                                                <label className="label form-label-calificacion" for="radio4">★</label>
                                                <input id="radio5" type="radio" name="stars" value="1" onChange={handleComment}></input>
                                                <label className="label form-label-calificacion" for="radio5">★</label>
                                            </p>
                                        </li>
                                        <li className="list-inline-item col-6 align-self-end ">
                                            <div className="text-end">
                                                <textarea name="comment" className="form-control mb-2" id="validationTextarea" placeholder="Deja tu comentario" required onChange={handleComment}></textarea>
                                                <button className="btn btn-primary App-button-blue mb-4 rounded-pill" type="submit" onClick={addComment}>PUBLICAR</button>
                                            </div>                                    
                                        </li>
                                    </ul>   
                                </form>
                                <br></br>
                                {/*Reseñas y calificaciones publicadas por los usuarios */}
                                <div className= "container mt-2 mb-2 border-top">
                                    <p className= "h4" >Reseñas</p>
                                    {
                                      reviews.length > 0 && reviews.map(review => (
                                        <Review username={review.name_user_comment} comment={review.commentary} date={review.date_comments} calificacion={review.qualification}></Review>
                                        
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
            {/* <div Style="background-color: #575958">
                pie de pagina 
            </div> */}
          </footer> 
        </div>      

      );
  }


export default ProfileViewReview;