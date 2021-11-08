import React from 'react';
import '../admin-reports-view.css';
import {LineChart, Line, XAxis, YAxis, Tooltip, Legend,CartesianGrid} from "recharts";


function UsersChart(){
    const data = [
        {
          Mes: "Ene",
          "Total Usuarios": 4000,
        },
        {
          Mes: "Feb",
          "Total Usuarios": 3000,
        },
        {
          Mes: "Mar",
          "Total Usuarios": 5000,
        },
        {
          Mes: "Abr",
          "Total Usuarios": 4000,
        },
        {
          Mes: "May",
          "Total Usuarios": 3000,
        },
        {
          Mes: "Jun",
          "Total Usuarios": 2000,
        },
        {
          Mes: "Jul",
          "Total Usuarios": 4000,
        },
        {
          Mes: "Ago",
          "Total Usuarios": 3000,
        },
        {
          Mes: "Sep",
          "Total Usuarios": 4000,
        },
        {
          Mes: "Oct",
          "Total Usuarios": 1000,
        },
        {
          Mes: "Nov",
          "Total Usuarios": 4000,
        },
        {
          Mes: "Dic",
          "Total Usuarios": 3000,
        },
      ];

        return(      
      <div>
            <div className="chart">
                <h3 className="chartTitle">Cantidad Total de Usuarios Por Mes</h3>
                <LineChart
                width={1100}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis label={{ value: 'Mes', position: 'insideBottomRight', offset: -7 }}  dataKey="Mes" scale="point" padding={{ left: 10, right: 10 }} />
                <YAxis label={{ value: 'Total Usuarios', angle: -90, position: 'insideLeft' }}/>
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Total Usuarios" stroke="#0d6efd" activeDot={{ r: 8 }} />
                </LineChart>
                <hr></hr>
                2021
            </div>                       
          </div>
    );
}

export default UsersChart;