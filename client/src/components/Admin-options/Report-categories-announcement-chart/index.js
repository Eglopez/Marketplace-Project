import React from 'react';
import './../admin-reports-view.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList} from 'recharts';


function AnnouncementChart(){
    const data = [
        {
          categoria: 'Categoria 1',
          anuncios: 2400,
        },
        {
          categoria: 'Categoria 2',
          anuncios: 1398,
          amt: 2210,
        },
        {
          categoria: 'Categoria 3',
          anuncios: 9800,
        },
        {
          categoria: 'Categoria 4',
          anuncios: 3908,
        },
        {
          categoria: 'Categoria 5',
          anuncios: 4800,
        },
        {
          categoria: 'Categoria 6',
          anuncios: 3800,
        },
        {
          categoria: 'Categoria 7',
          anuncios: 4300,
        },
        {
            categoria: 'Categoria 8',
            anuncios: 4300,
          },
          {
            categoria: 'Categoria 9',
            anuncios: 4300,
          },
          {
            categoria: 'Categoria 10',
            anuncios: 4300,
          },
   
      ];

        return(      
          <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-dark"><b>Categorías Con Más Anuncios Publicados Durante el Mes</b></h5>
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
                            <YAxis label={{ value: 'Anuncios', angle: -90, position: 'insideLeft' }}/>
                            <Tooltip /> 
                            <Legend layout="vertical"/>
                            <CartesianGrid strokeDasharray="3 3" />
                            <Bar dataKey="anuncios" fill="#0d6efd" background={{ fill: '#eee' }} />
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

export default AnnouncementChart;