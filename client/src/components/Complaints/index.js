import { React,useEffect, useState } from 'react';
import '../../App.css';
import axios from 'axios';
import {useHistory} from 'react-router-dom'


function Denunciation() {

    const [comType,setComTypes] = useState([])
    const [complaintment,setComplainment] = useState({"typeComplaintId":"","comment":""})
    const token = localStorage.getItem('token')
    const userID = localStorage.getItem('user_to_complaint')
    const history = useHistory()
    useEffect(() => {
            axios({
            url:'http://localhost:3000/api/complaints/list-types',
            method:'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            setComTypes(res.data)
        }).catch(err => {
            console.error(err);
        })
    },[])


    const handleComplaint = (e) => {
        setComplainment({...complaintment,[e.target.name]:e.target.value})
    }

    const addComplaint = (e) => {
        e.preventDefault();

        axios({
            url: "http://localhost:3000/api/complaints/new",
            method: 'POST',
            headers: {'Authorization': `Bearer ${token}`},
            data: {
                user: userID,
                typeComplaintId: complaintment.typeComplaintId,
                comment: complaintment.comment
            }
        }).then(res => {
            console.log("Denuncia realizada exitosamente");
            history.push("home")
        }).catch(err=>{
            console.error(err);
        })
    }

  return (
      <div className="row" Style="height:800px">
        <div className="col-lg-2"></div>
        <div className="col-lg-8" >
            <form enctype="multipart/form-data" target="_blank">
                <div className="row mt-4" Style="background-color: #ffffff">
                    <h5 className="border-bottom mt-4 form-label" Style="color: #48D9D9">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-exclamation-circle-fill me-2" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        </svg>DENUNCIAR USUARIO</h5>
                    <br></br>
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8 mb-4 ">
                        
                        <div className="col-md-9">
                            <label for="validationTooltip01" className="form-label mt-3">SELECCIONE EL MOTIVO DE LA DENUNCIA:</label>
                            <select name="typeComplaintId" className="form-select" id="validationServer04" aria-describedby="validationTooltip01" required onChange={handleComplaint}>
                                <option selected value="">.....</option>
                                {
                                    comType.length > 0 && comType.map(type => (
                                        <option value={type.id}>{type.name_Complaint}</option>
                                    ))
                                }
                            </select> 
                        </div>
                        <div className="col-md-9">
                            <br></br><br></br>
                            <textarea name="comment" className="form-control" id="validationTextarea" placeholder="Agregar comentario" required onChange={handleComplaint}></textarea>
                        </div>
                        <div className="row mt-4" Style="background-color: #ffffff">
                            <div className="col-lg-6"></div>
                            <div className="col-lg-6 ">
                                <button className="btn btn-primary App-button-blue mb-4" type="submit" onClick={addComplaint}>Enviar Denuncia</button> <button className="btn btn-primary App-button mb-4" type="button" aria-label="Close">Cancelar</button>
                    </div>            
                </div>
                    </div>
                    <div className="col-lg-2"></div>
                </div>
            </form>
        </div>

        <div className="col-lg-2"></div>

      </div>     
  );
}

export default Denunciation;