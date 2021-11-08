import Avatar from 'react-avatar';
import userprofile from '../../user-profile.svg';
import React, {Component} from 'react';
import moment from 'moment';
import './comment.css';

function Comment({ username, comment, date }){
    
        return(
            <div className="card mb-2 bg-light " max-width= "540px">
            <div className="row g-0 ">
                <div className="col-md-1 mt-3 ms-2">
                    <Avatar src={userprofile} className="float-start" name="Nombre de Usuario" size="60" round="30px" />            
                </div>
                <div className="col-lg">
                    <div className="card-body">
                        <p className="card-title"><a href="#" className="text-decoration-none pe-auto" >{username}</a></p>
                        <p className="card-text">{comment}</p>
                        <div className="list-inline text-end small">    
                            <p className="card-text list-inline-item"><small className="text-muted">{moment(date).format('YYYY-MM-DD')}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        );
    
}



export default Comment;