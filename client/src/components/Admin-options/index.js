import React from 'react'
import '../../App.css'

const AdminOption = () => {
    return(
        <div style={{color:"whitesmoke"}}>
            <h1>Opciones de Administrador</h1>
            <p>Contendra Opciones de un usuario privilegiado tales como:</p>
            <ul>
                <li>Mirar denuncias</li>
                <li>Dar de baja Usuaios y anuncios</li>
                <li>Graficos</li>
            </ul>
        </div>
    );
}

export default AdminOption;