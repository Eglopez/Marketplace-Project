import React, {Component} from 'react';
import '../../../App.css';
import userprofile from '../../../user-profile.svg';
import Avatar from 'react-avatar';
import axios from 'axios';

function TableUsers({id,name,department,municipality,email,phone,date,state}){
    var user_state = ""
    const token = localStorage.getItem('token')
    
    
    if(state == 1){
        user_state = "Active"
    }else{
        user_state = "Desactive"
    }
    

    const deleteUser = (e) => {
        e.preventDefault()
        axios({
            url:`http://localhost:3000/api/users/${id}`,
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
                 <td width ="50px">
                    <div className="row justify-content-center">
                        <div className="col align-self-center text-center">
                            {id}
                        </div>
                    </div>
                </td>
                <td width ="80px">
                    <Avatar name="Username" className="ms-2 rounded-circle me-2" src={userprofile} size={40} round="20px" ></Avatar>
                </td>
                <td width ="120px">
                    <a className="text-decoration-none" href="#" >
                        <div className="text-truncate text-dark text-decoration-none text-start" Style="width:120px">{name}</div>
                    </a>
                </td>
                <td width ="100px">
                    <div className="text-start">{department}</div>
                    <div className="text-start text-muted">{municipality}</div>
                </td>
                <td width ="100px">
                    <div className="text-truncate text-center" Style="width:100px">{email}</div>
                </td>
                <td width ="100px">
                    <div className="text-truncate text-center" Style="width:100px">{phone}</div>
                </td>
                <td width ="100px">
                    <div className="text-truncate text-center" Style="width:100px"><small className=" small text-muted">{date}</small></div>
                </td>
                <td width ="100px"className="text-center text-dark">
                    <div className="text-truncate" Style="width:100px">{user_state}</div>
                </td>
                <td width ="80px"className="text-center ">
                    <div className="text-center row justify-content-center" Style="width:100px">
                            <div className="btn-toolbar mb-3 text-center" role="toolbar" aria-label="Toolbar with button groups">
                                <div  className="btn-group me-2 text-center"   role="group" aria-label="First group">
                                    
                                    <button className="text-center text-danger btn"  type="submit" onClick={deleteUser}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash  me-2" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                        </svg>
                                    </button>
                                </div>
                                </div>
                        
                            </div>
                </td>
        </tr>
);     
    
}

export default TableUsers;