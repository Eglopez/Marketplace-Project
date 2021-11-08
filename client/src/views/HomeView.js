import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import Card from '../components/Announcement-cards/index';
import Footer from '../components/Footer';
import '../App.css';
import Avatar from 'react-avatar';
import logo from '../logo.svg';
import logo1 from '../logo.png';


export default function HomeView() {

  const [publications, setPublications] = useState({});
  const [search, setSearch] = useState({
    title: '',
    dateOrder: '',
    priceOrder: ''
  });
  const [departments, setDepartments] = useState([]);
  const [municipies, setMunicipies] = useState([]);
  const [categories, setCategories] = useState([]);
  const rol = localStorage.getItem('rol')
  const [filter, setFilter] = useState({
    text: '',
    department: '',
    municipality: '',
    category: '',
    lowerPrice: 0,
    higherPrice: 90000000,
    dateOrder: 'reciente',
    priceOrder: '',
    lowerPagination: 0,
    higherPagination: 1000,
  });
  var isAdmin = false



  useEffect(() => {
    const token = localStorage.getItem('token')
    axios({
      url: `http://localhost:3000/api/publications/list/0/10`,
      method: 'GET',
      headers: { 'Authorization': `Bearer ${token}` }
    }).then(res => {
      setPublications(res.data)
    }).catch(err => {
      console.error(err);
    })
  }, [])


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


  useEffect(() => {
    const token = localStorage.getItem('token')
    axios({
      url: 'http://localhost:3000/api/categories/list',
      method: 'GET',
      headers: { 'Authorization': `Bearer ${token}` }
    }).then(res => {
      setCategories(res.data);
    }).catch(err => {
      console.error(err);
    })

  }, [])

  const adminTest = () => {
    if (rol == 'ADMIN') {
      isAdmin = true;

    }
  }

  adminTest()


  const handleDep = (e) => {

    if (e.target.value) {

      const name = e.target.value
      const { id } = departments.find(dep => dep.department === name)
      axios({
        url: `http://localhost:3000/api/address/mun-per-department/${id}`,
        method: 'GET',
        responseType: 'json',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json;charset=UTF-8' }
      }).then(res => {
        setMunicipies(res.data)
      }).catch(err => {
        console.error(err);
      });

      setFilter({
        ...filter,
        department: name
      });
    }
  }

  const handleTextInput = (e) => {

    if (e.target.value) {
      setFilter({ ...filter, text: e.target.value })
    } else {
      setSearch({ title: '' });
    }
  }

  const handleSearch = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token')
    if (filter.text === '') {
      setFilter({
        ...filter,
        higherPagination: 10
      })
      axios({
        url: `http://localhost:3000/api/publications/list-filtered`,
        method: 'GET',
        params: filter
      }).then(res => {
        setPublications(res.data)
      }).catch(err => {
        console.error(err);
      })
    } else {
      axios({
        url: `http://localhost:3000/api/publications/list-filtered`,
        method: 'GET',
        params: filter
      }).then(res => {
        setPublications(res.data)
      }).catch(err => {
        console.error(err);
      })
    }


  }


  const handleReset = (e) => {
    console.log('click');

    window.location.href = window.location.href;

    setSearch({ title: '' });
    const token = localStorage.getItem('token')
    axios({
      url: `http://localhost:3000/api/publications/list/0/10`,
      method: 'GET',
      headers: { 'Authorization': `Bearer ${token}` }
    }).then(res => {
      setPublications(res.data)
    }).catch(err => {
      console.error(err);
    })
  }



  const handleFilterSelectionsCat = (e) => {
    setFilter({
      ...filter,
      category: e.target.value
    });
  }

  const handleFilterSelectionsMun = (e) => {
    setFilter({
      ...filter,
      municipality: e.target.value
    });
  }

  const handlePriceMin = (e) => {

    if (e.target.value > 0) {
      setFilter({
        ...filter,
        lowerPrice: e.target.value
      });
    }

  }

  const handlePriceMax = (e) => {
    setFilter({
      ...filter,
      higherPrice: e.target.value
    });
  }


  const handleFilterDate = (e) => {
    setFilter({
      ...filter,
      dateOrder: e.target.value
    })
  }
  const handleFilterPrice = (e) => {
    setFilter({
      ...filter,
      priceOrder: e.target.value
    })
  }
  


  const isAd = () => {
    if (rol == 'ADMIN') {
      isAdmin = true
    }
  }


  const paginated = ((lowerRange, higherRange) => {
    const token = localStorage.getItem('token')
    axios({
      url: `http://localhost:3000/api/publications/list/${lowerRange}/${higherRange}`,
      method: 'GET',
      headers: { 'Authorization': `Bearer ${token}` }
    }).then(res => {
      setPublications(res.data)
    }).catch(err => {
      console.error(err);
    })
  });


  const handlePaged = (e) => {
    let pag = e.target.id;
    // console.log(pag);
    const selection = {
      1: [0, 10],
      2: [10, 20],
      3: [20, 30],
      4: [30, 40],
      5: [50, 60],
      stateInitial: 1,
      stateFinal: 5
    };

    if (pag === 'ant') {
      paginated(selection[selection.stateInitial][0], selection[selection.stateInitial][1]);

    } else if (pag === 'sig') {
      paginated(selection[selection.stateFinal][0], selection[selection.stateFinal][1]);

    } else if (pag === 1, 2, 3, 4, 5) {
      paginated(selection[pag][0], selection[pag][1]);
    }

  }



  console.log(isAdmin);

  return (

    <div className="">
    
        <nav className="navbar navbar-dark bg-dark container-fluid row">
          <div className="col-lg-4 d-flex justify-content-start" >
          <Link to="/" onClick={handleReset} type="submit"><img src={logo} className="App-logo"></img></Link>
          </div>

          <div className="col-lg-4" >
            <form className="d-flex">
              <input className="form-control" type="search" placeholder="Buscar Anuncio..." aria-label="Search" onChange={handleTextInput} ></input>
              <button className="btn btn-outline-info" type="submit" onClick={handleSearch}>Buscar</button>
            </form>
          </div>

          <div className="col-lg-4">

            <div className="dropdown float-end" >
              <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <Avatar size={40} round="20px" alt="img" ></Avatar>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16" color=" #4ACAD9">
                  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
              </a>
              <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                <li><a className="dropdown-item" href="#">Configuracion</a></li>
                <li><Link to="/user-profile" className="dropdown-item">Perfil</Link></li>
                {isAdmin && <li><Link to="/admin-options" className="dropdown-item">Admin options</Link></li>}
                <li><hr className="dropdown-divider"></hr></li>
                <li><Link to="/" className="dropdown-item">Cerrar Sesión</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      

      <body>
        <div className="row ">
          <div className="row container" Style="background-color: #575958">
            <div className="col-lg-2 justify-content-center" Style="background-color: #d9d9d9">
              <div className="container-fluid position-sticky ">

                <form>
                  <br></br>
                  <button className="btn btn-secondary" satyle="" type="submit" onClick={handleSearch}>Filtrar</button>
                  <br></br>
                  <br></br>
                  <label className="d-flex align-items-start">Departamento</label>
                  <select class="form-select form-select-sm" aria-label=".form-select-sm example" onClick={handleDep}>
                    <option defaultValue value="">---</option>
                    {
                      departments.map((dp) => {
                        // console.log(dp)
                        return <option value={dp.department} id={dp.id} d="1">{dp.department}</option>
                      })

                    }
                  </select>

                  <br></br>

                  <label className="d-flex align-items-start">Municipio</label>
                  <select class="form-select form-select-sm" aria-label=".form-select-sm example" onClick={handleFilterSelectionsMun}>
                    <option defaultValue value="" >---</option>
                    {
                      municipies.map((mun) => {
                        return <option value={mun.municipality}>{mun.municipality}</option>
                      })
                    }

                  </select>


                  <br></br>
                  <label className="d-flex align-items-start">Categoria</label>
                  <select class="form-select form-select-sm" aria-label=".form-select-sm example" onClick={handleFilterSelectionsCat}>
                    <option selected>---</option>
                    {
                      categories.map((cat) => {
                        return <option value={cat.name_Category}>{cat.name_Category}</option>
                      })
                    }
                  </select>

                  <br></br>
                  <label className="d-flex align-items-start">Rango de precio</label>

                  <input className="form-control" type="number" placeholder="Precio Minimo" onChange={handlePriceMin}></input>
                  <br></br>
                  <input className="form-control" type="number" placeholder="Precio Maximo" onChange={handlePriceMax}></input>

                  <br></br>
                  <label className="d-flex align-items-start">Fecha de subida</label>

                  <select className="form-select form-select-sm" aria-label=".form-select-sm example" onClick={handleFilterDate}>
                    <option value="" selected>---</option>
                    <option value="reciente">Reciente a Antiguo</option>
                    <option value="antiguo">Antiguo a Reciente</option>
                  </select>


                  <br></br>
                  <label className="d-flex align-items-start">Precio</label>
                  <select className="form-select form-select-sm" aria-label=".form-select-sm example" onClick={handleFilterPrice}>
                    <option value="" selected>---</option>
                    <option value="caro">Alto a Bajo</option>
                    <option value="barato">Bajo a Alto</option>
                  </select>
                </form>

              </div>
            </div>
            <div className="col " >
              <div className="row" >
                {publications.length > 0 && publications.map(publication => (
                  <Card title={publication.title} description={publication.description} price={publication.price} id={publication.id_publication} date={publication.date_publication}></Card>
                ))}
              </div>
              <div>

              </div>
            </div>

          </div>
        </div>

        <br></br>
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item">
              <a type="button" onClick={handlePaged} class="page-link" tabindex="-1" id="ant">Primera</a>
            </li>
            <li class="page-item"><a type="button" onClick={handlePaged} class="page-link" id="1">1</a></li>
            <li class="page-item"><a type="button" onClick={handlePaged} class="page-link" id="2">2</a></li>
            <li class="page-item"><a type="button" onClick={handlePaged} class="page-link" id="3">3</a></li>
            <li class="page-item"><a type="button" onClick={handlePaged} class="page-link" id="4">4</a></li>
            <li class="page-item"><a type="button" onClick={handlePaged} class="page-link" id="5">5</a></li>
            <li class="page-item">
              <a type="button" onClick={handlePaged} class="page-link" id="sig">Ultima</a>
            </li>
          </ul>
        </nav>

      </body>

      <Footer></Footer>

    </div>




  );
}