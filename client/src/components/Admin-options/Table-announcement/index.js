import React, {Component} from 'react';
import logo from '../../../logo.svg';
import '../../../App.css';
import axios from 'axios';


function TableAnnouncement({id,title,department,municipality,user,date}){

    const token = localStorage.getItem('token')

    const deleteAnnouncement = (e) => {
        e.preventDefault()
        axios({
            url:`http://localhost:3000/api/publications/${id}`,
            method: 'DELETE',
            headers: {'Authorization': `Bearer ${token}`}
              }).then(res => {
                console.log(res);
                window.location.reload(false);
              }).catch(err => {
                console.error(err);
        })
    }

        return(      
        <tr>
            <td width ="60px">
                    <div className="row justify-content-center">
                        <div className="col align-self-center text-center">
                            {id}
                        </div>
                    </div>
                </td>
                <td width ="120px">
                    <div className="row justify-content-center">
                        <div className="text-center">
                            <a href="#"><img className="me-1" width="100px" height="85px" src={logo} ></img></a>
                        </div>
                    </div>
                </td>
                <td width ="170px">
                    <div className="text-truncate text-dark" Style="width:170px">{title}</div>
                </td>

                <td width ="100px">
                    <div className="text-truncate text-dark" Style="width:100px">Active</div>
                </td>
                <td width ="100px">
                    <div className="text-start">{department}</div>
                    <div className="text-start text-muted">{municipality}</div>
                </td>
                <td width ="100x"className="text-start text-dark">
                    <div className="text-truncate" Style="width:90px">
                        <a href="#" className="text-decoration-none pe-auto ">{user}</a>
                    </div>
                </td>

                <td width ="100px">
                    <a className="text-decoration-none" href="#" >
                        <div className="text-truncate text-dark text-decoration-none text-start" Style="width:100px"><small className="text-muted">{date}</small></div>
                    </a>
                </td>

                <td width ="50px">
                    <div className="row justify-content-center" Style="width:50px">
                        <div className="col align-self-center text-center">
                        <button className="text-center text-danger btn" type="button" onClick={deleteAnnouncement}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash  me-2" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                        </svg>
                                    </button>
                        </div>
                    </div>
                </td>
        </tr>
);     
    
}

export default TableAnnouncement;