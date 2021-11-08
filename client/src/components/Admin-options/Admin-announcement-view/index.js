import '../../../App.css';
import TableAnnouncement from '../Table-announcement';
import AdminSidebar from '../Admin-sidebar';
import { useEffect, useState } from 'react';
import axios from 'axios';


function AdminAnnouncement(){
  
  const [announcement,setAnnouncement] = useState([])
  const [time,setTime] = useState({"time":""})
  const token = localStorage.getItem('token')
  const [newtime,setNewTime] = useState([])
  

  useEffect(() => {
    
    axios({
      url: "http://localhost:3000/api/publications/list/0/10",
      method:'GET',
      headers: {'Authorization': `Bearer ${token}`}
    }).then(res => {
      console.log(res);
      setAnnouncement(res.data)
    }).catch(err => {
      console.error(err);
    })
    
    axios({
      url:"http://localhost:3000/api/config/data",
      method:'GET',
      headers: {'Authorization': `Bearer ${token}`}
    }).then(res => {
      console.log(res.data.time_announcemen);
      let time_announcement = res.data.time_announcemen
      localStorage.setItem('time',time_announcement)
      setNewTime(res.data.time_announcemen)
    }).catch(err => {
      console.error(err);
    })
  },[])

  const handleTimer = (e) => {
    console.log(e.target.value);
    setTime({...time,[e.target.name]:e.target.value})
  }

  const changeAnnouncementTime = (e) => {
    e.preventDefault()
    axios({
      url:"http://localhost:3000/api/config/set-time-config",
      method:'PUT',
      headers: {'Authorization': `Bearer ${token}`},
      data: {
        announcementTime: time.time,
        serviceTime: time.time
      }
    }).then(res => {
      console.log(res);
      window.location.reload(false);
    }).catch(err => {
      console.error(err);
    })

    
  }
  const days = localStorage.getItem('time')
  
  return(
        <div>
          <body>
            <div className="row" >
             <AdminSidebar></AdminSidebar>
              <div className="col-10 bg-light overflow-auto" Style="height:800px">
                <h2>Anuncios</h2>
                <hr></hr>
                <div className= "row mt-3 mt-4" >
                    {/*Tiempo de vigencia del anuncio */}
                    <h4>Tiempo de vigencia</h4>
                    <form>
                        <nav className="navbar navbar-ligth bg-ligth row container">     
                            <div className="col-lg-8 d-flex justify-content-start" >
                                <div className="col-sm-3 me-3">
                                    <input name="time" type="text" className="form-control" id="specificSizeInputName" placeholder="Numero dias" onChange={handleTimer} required></input>
                                </div>
                                <div className="col-sm-6">
                                    <span className="form-label">{newtime} Días</span>
                                </div>
                            </div>
                            <div className="col-lg-4 text-end" aria-label="Basic example" >
                                    <button className="btn btn-primary" type="submit" onClick={changeAnnouncementTime}>MODIFICAR</button> 
                            </div>                  
                        </nav>
                    </form>
                </div>
                <hr></hr>
                
                <div className= " row mt-3 mt-4" >
                        <div className= " col">
                            <br></br>
                            

                              <br></br>
                        </div>
                  </div>

                <div className="container">
                <table className="table table-hover table-bordered ">
                  <thead className="text-center table-bordered">
                    <tr>
                      <td width ="50px"><b>ID</b></td>
                      <td width ="120px"><b>Imagen</b></td>
                      <td width ="150px"><b>Titulo</b></td>
                      <td width ="100px"><b>Estado</b></td>
                      <td width ="100px"><b>Ubicación</b></td>
                      <td width ="100px"><b>Usuario</b></td>
                      <td width ="100px"><b>Fecha Publicación</b></td>
                      <td width ="50px"><b>Acción</b></td>
                    </tr>
                  </thead>
                   <tbody>
                              
                      {announcement.length > 0 && announcement.map(el => (
                        <TableAnnouncement id={el.id_publication} title={el.title} department={el.depto} municipality={el.munic} user={el.name_user} date={el.date_publication}></TableAnnouncement>
                      )) }
                  </tbody>
                </table>

                </div>
              </div>
              <div className=""> </div>           

          </div>
          </body>
      </div>
    );

}

export default AdminAnnouncement;