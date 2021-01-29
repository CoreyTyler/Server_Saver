import React, {useState, useEffect} from "react"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader'
import Button from '@material-ui/core/Button';
import { Grid } from "@material-ui/core"
import { Link } from 'react-router-dom'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


const TipLogContent = () => {
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

    const handleDelete = (id) => {
        axios.delete(`/deleteTip/${id}`).then(window.location.reload(false))
    }

    return(
        <Card raised="true">
            <CardHeader title="Here's a log of your submitted tips!" align="center" />
            <CardContent>
            <TableContainer component={Paper}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell align="right">Time</TableCell>
                            <TableCell align="right">Amount</TableCell>
                            <TableCell align="right">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.rows && rows.rows.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.date}
                                </TableCell>
                                <TableCell align="right">
                                    {row.time}
                                </TableCell>
                                <TableCell align="right">
                                    {row.tips}
                                </TableCell>
                                <TableCell align="right">
                                    <Button onClick={()=> {handleDelete(row.id)}}>
                                        <DeleteForeverIcon color="primary" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </CardContent>
            <CardContent>
                <Grid container justify="center" spacing={3}>
                    <Grid item>
                    <Link to="/">
                        <Button variant="contained" color="primary">
                            Home
                        </Button>
                    </Link>
                    </Grid>
                    <Grid item>
                        <Link to="/Goals">
                            <Button variant="contained" color="primary">
                                Goals
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to="/Compare">
                            <Button variant="contained" color="primary">
                                Compare Tips
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default TipLogContent