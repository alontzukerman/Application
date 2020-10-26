import React, { useEffect, useState , useRef } from 'react' ;
import {
    LineChart , Line , XAxis , YAxis , CartesianGrid , Tooltip , Legend , ReferenceLine , ResponsiveContainer
} from 'recharts' ;
import axios from 'axios' ;

function CovidChart({className}) {

    const [dates , setDates] = useState([]);
    const [data , setData] = useState([]);
    const [resultsData , setResultsData] = useState();

    const select1 = useRef(null);
    const select2 = useRef(null);

    useEffect(() => {
        (async ()=> {
            let temp = await getParseData()
            console.log(temp);
            setDates(temp[0]);
            temp.shift();
            setData(temp);
        })()
        
    },[]);


    function createLines(co1 , co2) {
        let firstCo , secondCo ;
        let results = [];
        data.forEach((country,index) => {
            if(country[0] === co1) {
                firstCo = data[index];
            }
            if(country[0] === co2) {
                secondCo = data[index];
            }
        });
        for (let i=3 ; i < dates.length ; i++) {
            results.push({
                name: dates[i],
                firstCountry: Number(firstCo[i]),
                secondCountry: Number(secondCo[i])
            });
        }
        setResultsData(results);

    }

    function handleClick() {
        createLines(select1.current.value,select2.current.value);
        
    }

    const selectElement = (num) => {
        return (
            <select className="selectCountries" id={`country${num}`} ref={num===1 ? select1 : select2}>
            {
                data && 
                data.map((country,i) => {
                    let name = country[0]; 
                    return (
                        <option value={name} key={i}>{name}</option>
                    );
                })
            }
            </select>
        );
    };

    return (
        <div className={className}>
            <div id="countries">
                {selectElement(1)}
                <button onClick={handleClick}>RUN</button>
                {selectElement(2)}
            </div>
            {
                resultsData && 
                <ResponsiveContainer width="80%" height="80%">

                    <LineChart 
                        margin={{top: 30,left: 30, right: 30, bottom: 30}}
                        data={resultsData}
                        >
                        <CartesianGrid strokeDasharray="5 5" />
                        <XAxis label={{ value: 'date', position: 'insideBottomRight', offset: -15}} dataKey="name" />
                        <YAxis label={{ value: 'confirm cases(thousands)', position: 'insideTopLeft', offset: -25}} />
                        <Tooltip />
                        <Legend verticalAlign="top" height={36} margin={{top:0, left: 15, right: 15, bottom: 0}}/>
                        <Line name={`${select1.current.value}`} type="monotone" dataKey="firstCountry" stroke="#8884d8" />
                        <Line name={`${select2.current.value}`} type="monotone" dataKey="secondCountry" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            }
            {
                !resultsData && 
                <ResponsiveContainer width="80%" height="80%">
                    <LineChart 
                        margin={{top: 30,left: 30, right: 30, bottom: 30}}
                        data={resultsData}
                    >
                        <CartesianGrid strokeDasharray="5 5" />
                        <XAxis />
                        <YAxis />
                    </LineChart>
                </ResponsiveContainer>
            }
        </div>
    )
}

export default CovidChart ;


async function getParseData() {
    let regex = new RegExp('^[0-9.-]*$');
    const { data } = await axios.get('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv');
    let parseData = data.split('\n');
    parseData = parseData.map((dataLine,index) => {
        dataLine = dataLine.split(',');
        if(dataLine[0] !== ""){
            dataLine[1] = dataLine[0] +' | '+ dataLine[1];
        }
        dataLine.shift();
        if(index !== 0 && !regex.test(dataLine[1])) {
            dataLine[1] = dataLine[0] +' | '+ dataLine[1];
            dataLine.shift();
        } 
        return dataLine ;
    });
    parseData.pop();
    console.log(parseData)
    return parseData ;
}