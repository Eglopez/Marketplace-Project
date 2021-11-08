import '../../../App.css';
import TableCategory from '../Table-category';
import AdminSidebar from '../Admin-sidebar';
import { useEffect, useState } from 'react';
import axios from 'axios'


function AdminCategory(){

  const [category,setCategories] = useState([]);
  const [newCategory,setNewCategory] = useState({"name":""})
  const token = localStorage.getItem('token')

  useEffect(() => {
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
  },[])

  const handleCategory = (e) =>{
    console.log(e.target.value);
    setNewCategory({...newCategory, [e.target.name]:e.target.value})
  }

  const submitCategory = (e) =>{
    e.preventDefault()
    axios({
      url:'http://localhost:3000/api/categories/new',
      method:'POST',
      headers: {'Authorization': `Bearer ${token}`},
      data:{
        name:newCategory.name
      }
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.error(err);
    })

    setTimeout(() => {
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
    },1000)
  }

    return(
        <div>
          <body>
            <div className="row" >
              <AdminSidebar></AdminSidebar>
              <div className="col-10 bg-light overflow-auto" Style="height:800px">
                <h2>Categorias</h2>
                <hr></hr>
                <div className= "row mt-3 mt-4" >
                    {/*Agregar Nueva Ctegoria */}
                    <form>
                        <nav className="navbar navbar-ligth bg-ligth row container">     
                            <div className="col-lg-8 d-flex justify-content-start" >
                                <div className="col-sm-6 me-3">
                                    <input type="text" name="name" className="form-control" id="specificSizeInputName" placeholder="Nombre Categoria"  onChange={handleCategory}></input>
                                </div>
                                <div className="col-sm-6">
                                    <select className="form-select" id="validationServer04" aria-describedby="validationTooltip01">
                                        <option selected value="">Estado Categoria</option>
                                        <option value="1">Activa</option>
                                     </select>
                                </div>
                            </div>
                            <div className="col-lg-4 text-end" aria-label="Basic example" >
                                    <button className="btn btn-primary" type="submit" onClick={submitCategory}>AGREGAR</button> 
                            </div>                  
                        </nav>
                    </form>
                </div>
                <hr></hr>
                <div className= " row mt-3 mt-4" >
                        {/*Buscar Categoria */}
                        <div className= "col">
                            <br></br>
                                <nav className="navbar navbar-ligth bg-ligth row container">     
                                  <div className="col-lg-7 d-flex justify-content-start" >
                                    
                                  </div>
                                              
                                  <div className="col-lg-5 text-end" aria-label="Basic example" ></div>                  
                                </nav>

                              <br></br>
                        </div>
                  </div>
                {/*Tabla de Categorias*/}
                <div className="container">
                <table className="table table-hover table-bordered ">
                  <thead className="text-center table-bordered">
                    <tr>
                      <td width ="60px"><b>ID</b></td>
                      <td width ="200px"><b>Nombre Categoria</b></td>
                      <td width ="100px"><b>Estado</b></td>
                      
                      <td width ="80px"><b>Acción</b></td>
                    </tr>
                  </thead>
                   <tbody>
                     {category.length > 0 && category.map(el => (
                       <TableCategory id={el.id} category={el.name_Category} idToDelete={el.id}></TableCategory>
                     ))}
                             
                  </tbody>
                </table>

                </div>
              </div>

          </div>
          </body>
      </div>
    );

}

export default AdminCategory;