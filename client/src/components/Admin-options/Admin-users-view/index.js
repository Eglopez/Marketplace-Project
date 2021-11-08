import '../../../App.css';
import TableUsers from '../Table-users';
import AdminSidebar from '../Admin-sidebar';
import { useEffect, useState } from 'react';
import axios from 'axios';

function AdminUsers(){
    
  const [users,setUsers] = useState([])
  const token = localStorage.getItem('token')

  useEffect(() => {
    axios({
      url: "http://localhost:3000/api/users/list",
      method: 'GET',
      headers: {'Authorization': `Bearer ${token}`}
    }).then(res => {
      console.log(res);
      setUsers(res.data)
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
                <h2>Usuarios</h2>
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
                      <td width ="80px"><b>Foto Perfil</b></td>
                      <td width ="120px"><b>Nombre</b></td>
                      <td width ="100px"><b>Direccion</b></td>
                      <td width ="100px"><b>Correo</b></td>
                      <td width ="100px"><b>Teléfono</b></td>
                      <td width ="100px"><b>Fecha Ingreso</b></td>
                      <td width ="100px"><b>Estado Usuario</b></td>
                      <td width ="50px"></td>
                    </tr>
                  </thead>
                   <tbody>
                             
                      {users.length > 0 && users.map(el => (
                        <TableUsers id={el.id} name={el.name} department={el.department} municipality={el.municipality} email={el.email} phone={el.phone} date={el.date_registered} state={el.state_user}></TableUsers>
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

export default AdminUsers;