import React from "react";
import '../admin-reports-view.css';


function UsersDashboard(){
    return(
    <div>
         {/*Cantidad total de usuarios nuevos en el mes actual en comparacion con el mes anterior */}
         <div className="featured ">
                  <div className="featuredItem text-white bg-warning bg-gradient">
                      <span className="featuredTitle"><h4>Nuevos <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-circle ms-2" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                      </svg></h4> </span>
                      <div className="featuredMoneyContainer">
                        <span className="featuredMoney">640</span>
                        <span className="featuredMoneyRate">
                          456 
                        </span>
                      </div>
                      <span className="featuredSub text-white">Comparación del mes anterior</span>
                    </div>

                    {/*Cantidad total de usuarios con estado activo en el mes actual en comparacion con el mes anterior */}
                    <div className="featuredItem text-white bg-success bg-gradient" >
                      <span className="featuredTitle"><h4>Activos<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-circle ms-2" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                      </svg></h4></span>
                      <div className="featuredMoneyContainer">
                        <span className="featuredMoney">1,248</span>
                        <span className="featuredMoneyRate">
                          1,240 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                          </svg>
                        </span>
                      </div>
                      <span className="featuredSub text-white">Comparación del mes anterior</span>
                    </div>

                    {/*Cantidad total de usuarios con estado inactivo en el mes actual en comparacion con el mes anterior */}
                    <div className="featuredItem text-white bg-danger bg-gradient">
                      <span className="featuredTitle"><h4>Inactivos<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-circle ms-2" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                      </svg></h4></span>
                      <div className="featuredMoneyContainer">
                        <span className="featuredMoney">815</span>
                        <span className="featuredMoneyRate">
                          800 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                          </svg>
                        </span>
                      </div>
                      <span className="featuredSub text-white">Comparación del mes anterior</span>
                    </div>

                    {/*Cantidad total de usuarios registrados en el mes actual en comparacion con el mes anterior */}
                    <div className="featuredItem text-white bg-primary bg-gradient">
                      <span className="featuredTitle"><h4>Totales<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-circle ms-2" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                      </svg></h4></span>
                      <div className="featuredMoneyContainer">
                        <span className="featuredMoney">2,063</span>
                        <span className="featuredMoneyRate">
                          1,984 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-up" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
                          </svg>
                        </span>
                      </div>
                      <span className="featuredSub text-white">Comparación del mes anterior</span>
                    </div>
                  </div>

    </div>
    );
};

export default UsersDashboard;