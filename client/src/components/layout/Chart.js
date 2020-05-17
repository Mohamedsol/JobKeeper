import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios'
import JobsListContext from '../../context/jobsList/jobsListContext';

import { Doughnut} from 'react-chartjs-2';


const Chart = () => {
    const [chartData, setChartData] =useState({});
    const [data, setData] = useState([]);
    const jobsListContext = useContext(JobsListContext);

    const { jobsList } = jobsListContext;


    const getData = async () => {
        await jobsList !== null ? setData([...jobsList]) : console.log('null no');
        console.log(jobsList)
        console.log(data)
    }
    const chart = () => {

        setChartData({
            labels: ['Applied', 'Phone Interview',
           'Onsite Interview'],
            datasets: [
                {
                label: 'Rainfall',
                backgroundColor: [
                    '#B21F00',
                    '#C9DE00',
                    '#2FDE00',
                    '#00A6B4',
                    '#6800B4'
                ],
                hoverBackgroundColor: [
                '#501800',
                '#4B5000',
                '#175000',
                '#003350',
                '#35014F'
                ],
                data: [80, 50, 62]
                }
            ]
        })
    };

    useEffect( () => {
        chart();
        getData();
        console.log('data', data);
    },[]);

    return ( 
        <div>
            <Doughnut
                data={chartData}
                options={{
                    title:{
                    display:true,
                    text:'Application Status',
                    fontSize:20
                    },
                    legend:{
                    display:true,
                    position:'right'
                    }
                }}
                />
        </div>
     );
}
 
export default Chart;