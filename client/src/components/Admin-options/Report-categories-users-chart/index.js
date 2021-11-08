import React from 'react';
import './../admin-reports-view.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList} from 'recharts';



function CategoriesChart(){
    const data = [
        {
          categoria: 'Categoria 1',
          usuarios: 2400,
        },
        {
          categoria: 'Categoria 2',
          usuarios: 1398,
        },
        {
          categoria: 'Categoria 3',
          usuarios: 9800,
        },
        {
          categoria: 'Categoria 4',
          usuarios: 3908,
        },
        {
          categoria: 'Categoria 5',
          usuarios: 4800,
        },
        {
          categoria: 'Categoria 6',
          usuarios: 3800,
        },
        {
          categoria: 'Categoria 7',
          usuarios: 4300,
        },
        {
          categoria: 'Categoria 8',
          usuarios: 4300,
        },
        {
          categoria: 'Categoria 9',
          usuarios: 4300,
        },
        {
          categoria: 'Categoria 10',
          usuarios: 4300,
        },
   
      ];

        return(      
      <div>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-dark"><b>Categorías Con Más Usuarios Suscritos Durante el Mes</b></h5>
          </div>
          <div className="card-body">
            <div className="chart-bar"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
              <BarChart
              width={1020}
              height={300}
              data={data}
              margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
              }}
              barSize={20}
              >
                <XAxis angle="315" label={{ value: 'Categorías', position: 'insideCenter', offset: 0 }}  dataKey="categoria" scale="point" padding={{ left: 10, right: 10 }} />
                <YAxis label={{ value: 'Usuarios', angle: -90, position: 'insideLeft' }}/>
                <Tooltip /> 
                <Legend layout="vertical"/>
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="usuarios" fill="#6f42c1" background={{ fill: '#eee' }} />
                <LabelList dataKey="categoria"
                  position="insideTop" angle="45"  />
                </BarChart>
              </div>
                <hr></hr>
                Agosto 2021
              </div>
            </div>                       
          </div>
    );
}

export default CategoriesChart;