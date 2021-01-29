import React from "react"
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
const moment = require('moment')

const useStyles = makeStyles(() => ({
    typographyStyles : {
        flex: 1
    }
}))

const LandingPageToolBar = () => {
    const classes = useStyles()
    const dayTime = moment().format('dddd MMMM Do YYYY, h:mm:ss a')
    return(
        <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.typographyStyles}>Welcome to Server Saver</Typography>
                    <div>{dayTime}</div>
                </Toolbar>
            </AppBar>
    )
}



export default LandingPageToolBar