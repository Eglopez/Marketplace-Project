import '../../../App.css';
import {Link} from 'react-router-dom'
import userprofile from '../../../user-profile.svg'
import Avatar from 'react-avatar';
import CategoriesChart from '../Report-categories-users-chart';
import AnnouncementChart from '../Report-categories-announcement-chart';
import SuscriptionChart from '../Reports-suscription-categories-chart';
import UsersChart from '../Reports-users-chart';
import UsersStateChart from '../Reports-users-state-chart';
import UsersDashboard from '../Reports-users-dashboard'
import CategoriesDashboard from '../Reports-categories-dashboard';
import AnnouncementDashboard from '../Reports-announcement-dashboard';
import AdminSidebar from '../Admin-sidebar';




function AdminReports(){
    return(
        <div>
          <body>
            <div className="row" >
              <AdminSidebar></AdminSidebar>
              <div className="col-10 bg-light overflow-auto" Style="height:800px">
                <h2>Reportes</h2>
                <hr></hr>
                <div className="container">

                  <h3>Usuarios</h3>
                  <UsersChart/>
                  <br></br>
                  <UsersDashboard/>
                  <br></br>
                  <UsersStateChart></UsersStateChart>
                  <br></br>
                  <h3>Categorías</h3>
                  <br></br>
                  <div className="row">
                    <div className="col-6">
                      <CategoriesDashboard/>
                    </div>
                    <div className="col-6">
                      <SuscriptionChart></SuscriptionChart>
                    </div>
                  </div>
                  <br></br>
                  <CategoriesChart/>
                  <AnnouncementChart/>
                  <br></br>
                  <h3>Anuncios</h3>
                  <br></br>
                  <div className="mb-5">
                    <AnnouncementDashboard/> 
                  </div>
                </div>
             
              </div>
              <div className=""> </div>
            

          </div>
          </body>
      </div>
    );

}

export default AdminReports;