import '../../App.css';
import NavigationUser from '../User-Navbar';
import Filters from '../Filters';
import logo from '../../logo.svg';
import Avatar from 'react-avatar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import userprofile from '../../user-profile.svg';
import Comment from '../Comment-card'
import { Link } from 'react-router-dom'
import moment from 'moment';

function AnnouncementViewUser() {
    console.log(localStorage.getItem('id'));
    const id_publication = localStorage.getItem('id')
    const token = localStorage.getItem('token')
    const [publication, setPublication] = useState({})
    const [userComment, setUserComment] = useState({ "comment": "" })
    const [comment, setComments] = useState({})
    const [image, setimage] = useState([]);
    


    useEffect(() => {
        axios.get(`http://localhost:3000/api/publications/${id_publication}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            setPublication(res.data)
            console.log(res.data);
        }).catch(err => {
            console.error(err);
        })


    }, [])

    useEffect(() => {
        axios({
            url: `http://localhost:3000/api/reviews/list-publication/${id_publication}`,
            method: 'GET'
        }).then(res => {
            console.log(res);
            setComments(res.data)
        })
    }, [])

    
    useEffect(() => {

        axios
            .get(`http://localhost:3000/api/uploads/list-per-publication/${id_publication}`)
            .then(res => {
                if (res.data) {
                    setimage(res.data)
                }
                // setimage(res)
            })
            .catch(err => console.log(err))

    }, [])


    const addCategorySim = () => {
        
        axios({
            url: 'http://localhost:3000/api/subscriptions/new',
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`
            },
            data:{
                categoryId: publication.category_id
            }
        }).then(res => {
            console.log("subscripcion a la categoria exitosa");
            alert('Se subscribio a la categorio exitosamente')
        })
    }
    const addWishSim = () => {
        
        axios({
            url: 'http://localhost:3000/api/wish-list/new',
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`
            },
            data:{
                publicationId: id_publication
            }
        }).then(res => {
            console.log("Se añadio a lista de deseos");
            alert("Se añadio a su lista de deseos")
        }).catch(err => {
            console.error(err);
        })
    }

    const handleComment = (e) => {
        console.log(e.target.value);
        setUserComment({ ...userComment, [e.target.name]: e.target.value });
    }

    const userProf = () => {
        localStorage.setItem('id_user', publication.id_user)
    }

    const addComment = (e) => {
        e.preventDefault();
        axios({
            url: 'http://localhost:3000/api/reviews/publication',
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: {
                publicationId: id_publication,
                comment: userComment.comment
            }
        }).then(res => {
            console.log(res);
            console.log("Comentario agregado exitosamente");
        }).catch(err => {
            console.error(err);
        })

        setTimeout(() => {
            axios({
                url: `http://localhost:3000/api/reviews/list-publication/${id_publication}`,
                method: 'GET'
            }).then(res => {
                console.log(res);
                setComments(res.data)
            })

            document.getElementById('validationTextarea').value = '';
        },1000)
    }
    localStorage.setItem('user_to_complaint',publication.id_user)
    return (
        <div className="">

            <header className="App-header">
                <NavigationUser></NavigationUser>
            </header>

            <body>

                <div className="container">

                </div>

                <div className="row ">
                    <div className="row container" Style="background-color: #575958"></div>
                    <div className="col-lg-2 justify-content-center" Style="background-color: #d9d9d9; text-align:center" >
                        <div className="container-fluid position-sticky" Style="text-align:center">
                            {/* <Filters></Filters> */}

                            <div className="col-12">
                                <div className="card ">
                                    <div className="dropdown d-flex justify-content-end">
                                        <div className="dropdown ">
                                            <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle container" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16" color=" #4ACAD9">
                                                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                                </svg>
                                            </a>
                                            <ul className="dropdown-menu text-small dropdown-menu-dark " aria-labelledby="dropdownUser1">

                                                <li><Link to="/complaint" className="dropdown-item">Denunciar</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className=" borde borde-3 align-item-center">
                                        <Avatar src={userprofile} size="150" round="100px" />
                                    </div>
                                    <div className="card-body">
                                        <Link to="/announcement-user-profile" onClick={userProf}><h5 className="text-decoration-none" Style="color: #48d9d9">{publication.name_user}</h5></Link>
                                        <label className="float-start">{publication.depto}</label><br></br>
                                        <label className="float-start">{publication.munic}</label> <br></br>
                                        <label className="" Style="color: #48d9d9"><b>CONTACTAR</b></label><br></br>
                                        <label className="float-start">{publication.email}</label><br></br>
                                        <label className="float-start">{publication.phone}</label> <br></br>
                                        <p className="clasificacion">
                                            <h3>
                                                <label Style="color:yellow" >★</label>
                                                <label Style="color:yellow" >★</label>
                                                <label Style="color:yellow" >★</label>
                                                <label Style="color:yellow" >★</label>
                                                <label Style="color:gray" > ☆</label>
                                            </h3>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-8" Style="height:1000px">
                        <div className="row mb-4 mt-4">
                            <span><label className="ms-3 me-1">CATEGORIA: </label><label className="ms-2 me-2">{publication.category}</label>
                                <a onClick={addCategorySim} className="btn btn-primary App-button-blue mt-3 mb-2 ms-2">Suscribir</a></span>
                        </div>
                        <div className="row mb-4 mt-4">
                            <div className="col-1"></div>
                            <div className="col-10">
                                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" height="200px" weight="200px" >
                                    <div className="carousel-indicators" height="200px" weight="200px">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>

                                    {/* aqui  */}
                                    <div className="carousel-inner" height="200px" weight="200px">
                                        {
                                            image.map((img, i) => {

                                                if (i === 0) {
                                                    //   return <img alt="imagen" src={`data:image/${img.type};base64,` + img.data } class="card-img-top" alt="5"></img>
                                                    return (
                                                        <div className="carousel-item active">
                                                            <img src={`data:image/${img.type};base64,` + img.data} className="d-block w-100" alt="..." height="470px" width="100"></img>
                                                        </div>
                                                    )
                                                } else {
                                                    return (
                                                        <div className="carousel-item">
                                                            <img src={`data:image/${img.type};base64,` + img.data} className="d-block w-100" alt="..." height="470px" width="100" ></img>
                                                        </div>
                                                    )
                                                }
                                            }
                                            )

                                        }

                                        {/* <div className="carousel-item active">
                                        <img src={logo} className="d-block w-100" alt="..."height="600px" weight="500px"></img>
                                        </div>
                                        <div className="carousel-item">
                                        <img src={logo} className="d-block w-100" alt="..."height="600px" weight="500px"></img>
                                        </div> */}

                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>

                            <div className="row mt-2 ms-0 me-0 col border-top">
                                <div className="col mt-2">
                                    <h4>Comentarios</h4>
                                   
                                    <div className="">
                                        {
                                            comment.length > 0 && comment.map(com => (
                                                <Comment username={com.name_user_comment} comment={com.commentary} date={com.date_comments}></Comment>
                                            ))
                                        }

                                    </div>

                                    <li className="list-inline-item col-12">
                                        <div className="text-end">
                                            <textarea name="comment" className="form-control mb-2" id="validationTextarea" placeholder="Deja tu comentario" required onChange={handleComment}></textarea>
                                            <button className="btn btn-primary App-button-blue mb-4 rounded-pill" type="submit" onClick={addComment}>Comentar</button>
                                        </div>
                                    </li>
                                </div>
                            </div>
                        </div>

                        <div className="row ms-0 me-0" Style="background-color:d #d9d9d9; height:266px">
                            <h1></h1>
                        </div>

                    </div>

                    <div className="col-lg-2" Style="background-color: #d9d9d9">
                        <div className="row mt-3 " Style="text-align:center">
                            <div className="col-1"></div>

                        </div>

                        <div className="conatiner">
                            <div className="container">
                                <label className="h1">{publication.title}</label>
                                <br></br>
                                <br></br>
                                <label className="h1">L. {new Intl.NumberFormat([],{maximumSignificantDigits: 2}).format(publication.price)}</label>
                                <br></br>
                                <br></br>
                                <label className="float-start mb-3 mt-3 h4">{publication.depto}, {publication.munic}</label>
                                <br></br>
                                <br></br>
                                <p className="float-start mb-3 mt-3">{publication.description}</p>
                                
                                <br></br>
                                <br></br>
                                <button onClick={addWishSim} className="btn btn-primary App-button-blue mt-4 mb-4 justify-content-center">AÑADIR A LISTA DE DESEOS</button>
                            </div>

                        </div>
                    </div>


                </div>

                <footer>
                    <div Style="background-color: #575958"> pie de pagina 1</div>
                </footer>

            </body>

        </div>

    );
}

export default AnnouncementViewUser;