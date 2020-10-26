import React, { useEffect, useState } from 'react';
import {
  PieChart , Pie , LabelList , ResponsiveContainer, Legend, Tooltip , Cell
} from 'recharts' ;
import axios from 'axios';

function GlobalCovidChart({className}) {

  const [info , setInfo] = useState();
  const [totalCases , setTotalCases] = useState();

  useEffect(() => {
    getSummaryData();
  },[]);

  async function getSummaryData() {
    const { data } = await axios.get('https://api.covid19api.com/summary');
    console.log(data.Global);
    setInfo([{
      name: "Active Cases",
      value: data.Global.TotalConfirmed-data.Global.TotalRecovered
    },{
      name: "Total Deaths",
      value: data.Global.TotalDeaths
    },{
      name: "Total Recovered",
      value: data.Global.TotalRecovered
    }]);
    setTotalCases(data.Global.TotalConfirmed);
  }

  const COLORS = ['rgb(144, 118, 0)', 'rgb(110, 0, 0)', 'rgb(0, 110, 5)'];

  return (
    <div className={className}>
      {
        totalCases &&
        <div id="totalConfirmed">{`TOTAL CONFIRMED : ${totalCases}`}</div>
      }
      {
        info &&
        <ResponsiveContainer width='100%' height="100%">  
        <PieChart>
          <Legend />
          <Pie data={info} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" label>
            {
              info.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
            }
          </Pie>
        </PieChart>
        </ResponsiveContainer>
      }
    </div>
  )
}

export default GlobalCovidChart ;
