import axios from 'axios';
import React, {Component} from 'react';
//import logo from '../logo.svg';
import '../../../App.css';
//import '../components/components.css';

function TableDenunciation({id,type,user_reported,comment,user_denunciation,date,id_reported}){
        
    const token = localStorage.getItem('token')
    const acceptDenunciation = () => {
        axios({
            url:`http://localhost:3000/api/complaints/action-complaint`,
            method:'PUT',
            headers: {'Authorization': `Bearer ${token}`},
            data: {
                userId: id_reported,
                action: 'baja'
            }
          }).then(res => {
            console.log(res);
            window.location.reload(false);
          }).catch(err => {
            console.error(err);
        })
        console.log(id_reported);
    }

    const declineDenunciation = () => {
        axios({
            url:`http://localhost:3000/api/complaints/action-complaint`,
            method:'PUT',
            headers: {'Authorization': `Bearer ${token}`},
            data: {
                userId: id_reported,
                action: 'denegada'
            }
          }).then(res => {
            console.log(res);
            window.location.reload(false);
          }).catch(err => {
            console.error(err);
        })
        console.log(id_reported);
    }

        return(      
        <tr>
                <td width ="50px">
                    <div className="row justify-content-center">
                        <div className="col align-self-center text-center">
                            {id}
                        </div>
                    </div>
                </td>
                <td width ="120px">
                    <div className="row justify-content-center">
                        <div className="text-center">
                            <a className="text-decoration-none" href="#" alt="Motivo de denuncia">
                                <div className="text-truncate text-dark text-decoration-none" Style="width:120px">{type}</div>
                            </a>
                        </div>
                    </div>
                </td>
                <td width ="120px">
                    <div className="text-start text-danger text-truncate" Style="width:120px">{user_reported}</div>
                </td>
                <td width ="250px">
                    <div className="text-start" Style="width:250px">{comment}</div>
                </td>
                <td width ="120px"className="text-start">
                    <div className="text-truncate text-primary" Style="width:120px">
                        {user_denunciation} 
                    </div>
                </td>
                <td width ="100px">
                    <small className="small text-muted">{date}</small>
                </td>
                <td width ="80px"className="text-center ">
                    <div className="text-center row justify-content-center" Style="width:100px">
                            <div className="btn-toolbar mb-3 text-center" role="toolbar" aria-label="Toolbar with button groups">
                                <div  className="btn-group me-2 text-center"   role="group" aria-label="First group">
                                    
                                    <button className="text-center text-success btn" v type="submit" onClick={acceptDenunciation}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                                      <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                                    </svg>
                                    </button>

                                    <button className="text-center text-danger btn" v type="submit" onClick={declineDenunciation}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                        </svg>
                                    </button>

                                </div>
                                </div>
                        
                            </div>
                </td>
        </tr>
);     
    
}

export default TableDenunciation;