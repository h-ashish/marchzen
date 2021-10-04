import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
const data = [{
    name: "Ashish",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Munna",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Prajju",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Yogesh",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Pooja",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Rony",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Vignesh",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }];

  export default function Linegraph(){
      return(
          <LineChart
          width={800}
          height={500}
          data={data}
          margin={{
              top:10,
              right: 30,
              bottom:10,
              left:20
          }}
          >
              <CartesianGrid strokeDasharray="33"/>
              < XAxis dataKey="name"/>
              <YAxis/>
              <Tooltip/>
              <Legend/>
              <Line
              type="monotone"
              dataKey="pv"
              stroke="#3333ff"
              activeDot={{r:8}}/>
              <Line
              type="monotone"
              dataKey="uv"
              stroke="#b30000"
              activeDot={{r:8}}/>
          </LineChart>
      )
  }