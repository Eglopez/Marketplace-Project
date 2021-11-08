import '../../../App.css';
import TableDenunciation from '../Table-denunciation';
import AdminSidebar from '../Admin-sidebar';
import { useEffect, useState } from 'react';
import axios from 'axios';


function AdminDenunciation(){
    
  const [denunciation,setDenunciation] = useState([])
  const token = localStorage.getItem('token')

  useEffect(() => {
    axios({
      url: "http://localhost:3000/api/complaints/list",
      method: 'GET',
      headers: {'Authorization': `Bearer ${token}`}
    }).then(res => {
      setDenunciation(res.data)
      console.log(res);
    }).catch(err => {
      console.error(err);
    })
  },[])

  return(
        <div>
          <body>
            <div className="row" >
              <AdminSidebar></AdminSidebar>
              <div className="col-10 bg-light overflow-auto" Style="height:800px">
                <h2>Denuncias</h2>
                <hr></hr>
                <div className= "row mt-3 mt-4" >
                        <div className= "col">
                            <br></br>
                              <form>
                                <nav className="navbar navbar-ligth bg-ligth row container">     
                                  <div className="col-lg-5 d-flex justify-content-start" >
                                    
                                  </div>
                                              
                                                 
                                </nav>
                              </form>

                              <br></br>
                        </div>
                  </div>

                <div className="container">
                <table className="table table-hover table-bordered ">
                  <thead className="text-center table-bordered">
                    <tr>
                    <td width ="50px"><b>ID</b></td>
                      <td width ="120px"><b>Motivo Denuncia</b></td>
                      <td width ="120px"><b>Usuario Reportado</b></td>
                      <td width ="250px"><b>Comentario</b></td>
                      <td width ="100px"><b>Usuario Denunciante</b></td>
                      <td width ="100px"><b>Fecha</b></td>
                      <td width ="50px"></td>
                    </tr>
                  </thead>
                   <tbody>
                           
                      {denunciation.length > 0 && denunciation.map(el => (
                        <TableDenunciation id={el.id} type={el.name_type_complaints} user_reported={el.name_denounced} comment={el.commentary} 
                        user_denunciation={el.name_user} date={el.date} id_reported={el.denounced_id}></TableDenunciation>
                      ))}
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

export default AdminDenunciation;