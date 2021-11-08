import React, { useState, useEffect } from 'react';

import '../../App.css';
import Avatar from 'react-avatar';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import { useDropzone } from "react-dropzone";


function Announcement() {
    
    const history = useHistory();
    const token = localStorage.getItem('token');
    const [announcement,setAnnouncement] = useState({"title":"","description":"","category":"","price":Number,"dep":Number,"mun":Number})
    const [departments, setDepartments] = useState([]);
    const [municipies,setMunicipies] = useState([]);
    const [files, setFiles] = useState([]);
    const [limit, setLimit] = useState(0);
    const [imageList, setImagesList] = useState(['']);
    const [category,setCategories] = useState([]);
    const [user,setUser] = useState({});


    useEffect(() => {
        axios({
        url: 'http://localhost:3000/api/address/departments',
        method: 'GET',
        }).then(res => {
            setDepartments(res.data)
        }).catch(err => {
            console.error(err);
        })

        axios({
            url: 'http://localhost:3000/api/categories/list',
            method: 'GET',
            headers: {'Authorization': `Bearer ${token}`}
        }).then(res => {
            console.log(res.data);
            setCategories(res.data)
        }).catch(err => {
            console.error(err);
        })

        axios.get('http://localhost:3000/api/users/current',{
            headers:{
              Authorization:`Bearer ${token}`
            }
          })
            .then(res => setUser(res.data[0]))
            .catch(res => console.log(res))

        axios
        .get('http://localhost:3000/api/uploads/list-per-publication/1')
          .then(res => setImagesList(res.data))

    }, []);


    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
          console.log('files', files);
          if (limit === 3) return;
          setFiles(files.concat(
            acceptedFiles.map((file) =>
              Object.assign(file, {
                preview: URL.createObjectURL(file),
              })
            )
          ))
          setLimit(limit + 1);
        },
      })
    

      const getFiles = () => {
        axios
          .get('http://localhost:3000/api/uploads/list-per-publication/1')
          .then(res => setImagesList(res.data))
      }
    
      const activateEvent = () => {
        document.getElementById('file-input').click();
      }
    

    const handleAnnouncement = (e) => {
        console.log(e.target.value);
        setAnnouncement({...announcement, [e.target.name]: e.target.value}); 
    }

    const handleMunicipalities = (e) => {
        handleAnnouncement(e)
        muni(e.target.value)
    }

    const muni = (id) => {
        //console.log(user.dep) 
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

    const submitAnnouncement = (e) => {
        e.preventDefault();
        //console.log(announcement);
        if(!files.length === 0){
            alert('you must upload file')
            return
          }
          
          
          
          let data = {
            "title": announcement.title,
            "category": announcement.category,
            "description": announcement.description,
            "price": announcement.price
            //"dep": user.department,
            //"mun": user.municipality
           
          }
          
            axios({
                url: 'http://localhost:3000/api/publications/new',
                method: 'POST',
                headers: {'Authorization': `Bearer ${token}`},
                data: data
            }).then(res => {
                //getFiles();
                
                let announcement_id = res.data.id
                files.forEach(file => {
                    const formdata = new FormData()
                    formdata.append('image',file)
                    console.log(announcement_id);
                    axios
                        .post(`http://localhost:3000/api/uploads/new/${announcement_id}`,
                            formdata,
                            { headers: {'Authorization': `Bearer ${token}`},
                        }).then(res2 => {
                            console.log(res2);
                            history.push("/user-profile")
                        }).catch(err => {
                            console.error(err);
                        })
                })
                //history.push("/user-profile")
                console.log(res);
            }).catch(err => {
                console.error(err);
            })
          
          setFiles([]);
          setLimit(0);
    }
   

    const images = files.map((file) => (
        <div className="img-item">
          <img src={file.preview} style={{ width: "50px" }} alt="preview" />
      </div>
    ))

    return (
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8" >
            <form enctype="multipart/form-data" target="_blank" onSubmit={submitAnnouncement}>
                <div className="row mt-4" Style="background-color: #ffffff">
                    <h3><label className="form-title d-flex justify-content-center" >PUBLICAR ANUNCIO</label></h3>
                    <h5 className="border-bottom mt-4 form-label" Style="color: #48D9D9"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-file-earmark" viewBox="0 0 16 16">
                    <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
                    </svg>INFORMACION DEL ANUNCIO</h5>
                    <br></br>
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8 mb-4 ">
                        <div className="col-md-8">
                            <label for="validationTooltip01" className="form-label mt-3">Título</label>
                            <input type="text" name="title" className="form-control" id="validationTooltip01" onChange={ handleAnnouncement }  required></input>
                        </div>
                        <div className="col-md-8">
                            <label for="validationTextarea" className="form-label mt-3">Descripción</label>
                            <textarea name="description" className="form-control" id="validationTextarea" onChange={ handleAnnouncement }  required></textarea>
                        </div>
                        <div className="col-md-3">
                            <label for="validationTooltip01" className="form-label mt-3">Precio   LPS.</label>
                            <input type="text" name="price" className="form-control" id="validationTooltip01" aria-describedby="validationServer05Feedback" onChange={ handleAnnouncement } required></input>
                        </div>
                        <div className="col-md-8">
                            <label for="validationTooltip01" className="form-label mt-3">Categoria</label>
                            <select className="form-select" name="category" id="validationServer04" aria-describedby="validationTooltip01" onChange={ handleAnnouncement } required>
                                <option selected value="">Categoria</option>
                                { category.length > 0 && category.map( el => (
                                    <option  key={el.id} value={el.id}>{el.name_Category}</option>
                                ))}
                            </select> 
                        </div><br></br>




                        <label className="form-label mt-3">Seleccione Imagenes</label>                

                        <div className="container">
                          <div className="App list-img">
                            <div className="list-img"> { images } </div>
                            {
                              limit < 3 ?
                              <div className="img-item drop-area" {...getRootProps()}>
                                <input id="file-input" {...getInputProps()} />
                                <p onClick={activateEvent}> + </p>
                              </div>
                              : <span></span>
                            }
                          </div>
                            
                          <div className="container list-img" display="flex">
                            {/* {
                              imageList.map( img => (
                                <div Style="margin: 1rem .5rem;" >
                                  <img alt="imagen" src={`data:image/${img.type};base64,` + img.data } width="200px" className="img-thumbnail"/>
                                </div>
                              ))
                            } */}
                          </div>
                        </div> 

                    </div>
                    <div className="col-lg-2"></div>
                </div>

                {/* <div className="row mt-4" Style="background-color: #ffffff"> 
                        <h5 className="border-bottom mt-4 mb-3 form-label" Style="color: #48D9D9"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        </svg>UBICACION DEL ANUNCIO</h5>
                        <br></br>
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8 mb-4">
                            <div className="col-lg-8">
                                <label for="validationTooltip01" className="form-label mt-3">Departamento</label>
                                <select className="form-select" name="dep" id="validationTooltip01" aria-describedby="validationTooltip01" onChange={ handleMunicipalities } required>
                                    <option selected value="">Departamento</option>
                                    { departments.length > 0 && departments.map( el => (
                                        <option  key={el.id} value={el.id}>{el.department}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="col-lg-8">
                                <label for="validationTooltip01" className="form-label mt-3">Municipio</label>
                                <select className="form-select" name="mun" id="validationServer04" aria-describedby="validationTooltip01" onChange={ handleAnnouncement } required>
                                    <option selected value="">Municipio</option>
                                    {municipies.length > 0 && municipies.map( mun => (
                                        <option key={mun.id} value={mun.id}>{mun.municipality}</option>
                                    ))}
                                </select> 
                            </div>
                    </div>
                </div> */}

                <div className="row mt-4 " Style="background-color: #ffffff">
                    <h5 className=" border-bottom mt-3  form-label" Style="color: #48D9D9"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    </svg>TU INFORMACION</h5>
                    <br></br>
                    <div className="col-lg-2">
                        <div className= "col-3 mb-4 "  >
                            <div className= "mt-2 border border-2 " Style="height: 100px ">
                                <Avatar  size="100" textSizeRatio={1.75} />
                            </div>
                        </div>
                    </div>
                        <div className="col-lg-8">
                            <div className= " row " >                          
                                <div className= "col-6 mt-3" >
                                    <label className="float-start">{user.name}</label><br></br>
                                    <label className="float-start">{user.department}</label><br></br>
                                    <label className="float-start">{user.municipality}</label><br></br>
                                    <label className="float-start">{user.direction}</label><br></br>
                                    <label className="float-start">{user.email}</label><br></br>
                                    <label className="float-start">{user.phone}</label><br></br>
                                </div>
                            </div>
                        </div>
                </div>

                <div className="row" Style="background-color: #ffffff">
                    <div className="col-lg-6"></div>
                    <div className="col-lg-6 ">
                        <button className="btn btn-primary App-button-blue mb-4" type="submit">Publicar Anuncio</button> <Link to="/user-profile" className="btn btn-primary App-button mb-4" type="button" aria-label="Close">Cancelar</Link>
                    </div>            
                </div>
            
            </form>
        </div>

        <div className="col-lg-2"></div>

      </div>     
  );
}

export default Announcement;