import React, {useState, useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Line} from 'react-chartjs-2';
import axios from 'axios';
import CardHeader from '@material-ui/core/CardHeader';
//import Paper from '@material-ui/core/Paper';

const CompareContent = () => {
    const [rows, setRows] = useState([])

    useEffect(() => {
        axios.get('/tipsForTable')
        .then(res => {
            console.log(res)
            setRows(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    // rows.rows && rows.rows.map( row => (
    // chartData = {
    //     labels: [row.date],
    //     dataSets:[
    //         {
    //             label:'Tips Logged',
    //             data: [row.tips]
    //         }
    //     ]
    // }
    // ))

    const chartData = {
        labels: [rows.rows && rows.rows.map( row => (row.date))],
        datasets:[
            {
                label:'Tips Logged',
                data: [rows.rows && rows.rows.map( row => (row.tips))]
            }
        ]
    }

return(
    <Card raised='true'>
        <CardHeader />
        <CardContent>
            <Line
            data={chartData}
            options={{
                title:{
                    display:true,
                    text: "Your Tips Logged by Date",
                    fontSize: 25
                },
                layout:{
                    padding:{
                        top:25,
                        left:50,
                        right:50,
                        bottom:50
                    }
                }
            }}
            />
        </CardContent>
    </Card>
)
}

export default CompareContent