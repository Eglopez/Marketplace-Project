import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from '../../logo.svg';
import '../../App.css';
import moment from 'moment';
import 'animate.css';

function LCard({ title, description, price, id, date }) {

  const getItemID = () => {
    localStorage.setItem('id', id)
  }

  const [image, setimage] = useState([]);


  useEffect(() => {

    axios
      .get(`http://localhost:3000/api/uploads/list-per-publication/${id}`)
      .then(res => {
        if (res.data) {
          setimage(res.data)
        }
      })
      .catch(err => console.log(err))

  }, [id])


  return (

    <div className="card mt-3 ms-3 me-3 col-md-2 shadow-md p-1 mb-1 bg-body rounded animate__fadeIn" >
         {
          image.map( (img,i)=>{

            if(i === 0){
              return <img alt="imagen" src={`data:image/${img.type};base64,` + img.data } class="card-img-top" alt="5" height="200px" width="200px"></img>

            }
          }
          )
      }
      {/* <img src={logo} className="card-img-top" height="200px" width="200px" ></img> */}
      <div className="card-body" >
        <h6 className="card-text Overflow" >{title}</h6>
      </div>
      <div className="d-flex justify-content-start">
        <p className="card-text Overflow" >{description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-start"><b>L.{new Intl.NumberFormat([],{maximumSignificantDigits: 2}).format(price)}</b></li>
      </ul>
      <div className="card-body d-flex justify-content-end">
      <Link to="/login" type="submit"><a className="card-link">Ver más</a></Link>

       
      </div>
    </div>


    // <div className="card div-logo" >
      // {
      //     image.map( (img,i)=>{

      //       if(i === 0){
      //         return <img alt="imagen" src={`data:image/${img.type};base64,` + img.data } class="card-img-top" alt="5"></img>

      //       }
      //     }
      //     )
      // }
    //   <div className="card-body">
    //     <h5 className="card-title">{title}</h5>
    //     <p className="card-text">{description}</p>
    //     <p className="card-text">{moment(date).format('YYYY-MM-DD')}</p>
    //   </div>
    //   <ul className="list-group list-group-flush">
    //     <li className="list-group-item">L.{new Intl.NumberFormat([],{maximumSignificantDigits: 2}).format(price)}</li>
    //   </ul>
    //   <div className="card-body">
    //   {/* <Link onClick={getItemID} to="announcement-info" class="card-link">Ver mas</Link> */}
    //   </div>
    // </div>


  );
}



export default LCard;