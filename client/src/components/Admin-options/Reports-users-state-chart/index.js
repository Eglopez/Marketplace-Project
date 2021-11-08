import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, linearGradient, Legend} from 'recharts';

const data = [
    {
      Mes: "Ene",
      "Usuarios Nuevos": 4000,
      "Usuarios Activos": 3800,
      "Usuarios Inactivos": 400,
    },
    {
      Mes: "Feb",
      "Usuarios Nuevos": 3000,
      "Usuarios Activos": 2800,
      "Usuarios Inactivos": 300,
    },
    {
      Mes: "Mar",
      "Usuarios Nuevos": 5000,
      "Usuarios Activos": 4800,
      "Usuarios Inactivos": 500,
    },
    {
      Mes: "Abr",
      "Usuarios Nuevos": 4000,
      "Usuarios Activos": 3800,
      "Usuarios Inactivos": 400,
    },
    {
      Mes: "May",
      "Usuarios Nuevos": 3000,
      "Usuarios Activos": 2800,
      "Usuarios Inactivos": 300,
    },
    {
      Mes: "Jun",
      "Usuarios Nuevos": 2000,
      "Usuarios Activos": 1800,
      "Usuarios Inactivos": 300,
    },
    {
      Mes: "Jul",
      "Usuarios Nuevos": 4000,
      "Usuarios Activos": 3800,
      "Usuarios Inactivos": 400,
    },
    {
      Mes: "Ago",
      "Usuarios Nuevos": 3000,
      "Usuarios Activos": 2800,
      "Usuarios Inactivos": 300,
    },
    {
      Mes: "Sep",
      "Usuarios Nuevos": 4000,
      "Usuarios Activos": 3800,
      "Usuarios Inactivos": 400,
    },
    {
      Mes: "Oct",
      "Usuarios Nuevos": 1000,
      "Usuarios Activos": 800,
      "Usuarios Inactivos": 100,
    },
    {
      Mes: "Nov",
      "Usuarios Nuevos": 4000,
      "Usuarios Activos": 3800,
      "Usuarios Inactivos": 400,
    },
    {
      Mes: "Dic",
      "Usuarios Nuevos": 3000,
      "Usuarios Activos": 2800,
      "Usuarios Inactivos": 300,
    },
  ];


export default class UsersStateChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/stacked-area-chart-ix341';

  render() {
    return (
    <div>
        <div className="chart">
        <h3 className="chartTitle">Cantidad de Usuarios Nuevos, Activos e Inactivos Por Mes</h3>
        <AreaChart
          width={1100}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
        <defs>
            <linearGradient id="colorUN" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ffc107" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#ffc107" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorUA" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#198754" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#198754" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorUI" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#dc3545" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#dc3545" stopOpacity={0}/>
            </linearGradient>
        </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis label={{ value: 'Mes', position: 'insideBottomRight', offset: -7 }}  dataKey="Mes" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis label={{ value: 'Usuarios', angle: -90, position: 'insideLeft' }}/>
          <Tooltip />
          <Area type="monotone" dataKey="Usuarios Nuevos" stackId="1" stroke="#ffc107" fillOpacity={1} fill="url(#colorUN)" />
          <Area type="monotone" dataKey="Usuarios Activos" stackId="1" stroke="#198754" fillOpacity={1} fill="url(#colorUA)"/>
          <Area type="monotone" dataKey="Usuarios Inactivos" stackId="1" stroke="#dc3545" fillOpacity={1} fill="url(#colorUI)"/>
          <Legend/>
        </AreaChart>
        <hr></hr>
        2021
        </div>                       
    </div>
    );
  }
}