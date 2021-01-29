import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from "@material-ui/core"
import CardHeader from '@material-ui/core/CardHeader'
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
//import axios from "axios";
const moment = require('moment');


const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  });


class LandingPageContent extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            tips: [],

            enteredDate: [],

            tipInput: "",

            dateInput: "",

            enteredTime: []

        }
    }

    handleEntry = () => {
        const obj = {
            time: this.state.enteredTime,
            date: this.state.enteredDate,
            tips: this.state.tips,
        }
        console.log(obj)
        fetch(`http://localhost:3000/postTips?time=${obj.time}&date=${obj.date}&tips=${obj.tips}`)
        .catch(err => console.error(err))
    }

    componentDidUpdate() {
         console.log(this.state.tips)
         console.log(this.state.enteredDate)
         console.log(this.state.enteredTime)
        
    }

    handleClick = (event) => {
        const time = moment().format('h:mm:ss a')
        this.setState({
            tips: [this.state.tipInput],
            tipInput: "",
            enteredDate: [this.state.dateInput],
            dateInput: "",
            enteredTime: [time]
        }, () => {
            this.handleEntry()
        })
        }
        

    handleChange = (evt) => {
        this.setState({
            tipInput: evt.target.value
        })
        console.log(evt.target.value)
    }

    handleChange1 = (evt) => {
        this.setState({
            dateInput: evt.target.value
        })
        console.log(evt.target.value)
    }

    fireAway = () => {
        this.handleClick();
    }

    render() {
        const { classes } = this.props;
    return (
        <Card raised="true">
            <CardHeader title="Welcome to the Server Saver App!" subheader="Turning dreams into realities, one tip at a time!" align="center" />
            <CardContent>
                <Grid container spacing={0}>
                <Grid item xs={0} />
                    <Grid item xs={3} align="center">
                        <Typography variant="h6">Enter Tips Here:</Typography>
                    </Grid>
                    <Grid item xs={3} align="center">
                    <TextField
                        id="TipBox"
                        label="Todays Tips"
                        type="number"
                        onChange={this.handleChange}
                        value={this.state.tipInput}
                        InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    size="small"
                    fullWidth="true"
                    />
                    </Grid>
                    <Grid item xs={3} align="center">
                        <form className={classes.container} noValidate>
                            <TextField
                                id="date"
                                label="Date"
                                type="date"
                                onChange={this.handleChange1}
                                value={this.state.dateInput}
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            size="small"
                            />
                        </form>
                    </Grid>
                    <Grid item xs={2} align="center">
                        <Button variant="contained" color="primary" onClick={this.fireAway}>
                            Submit
                        </Button>
                    </Grid>
                    <Grid item xs={1}/>
                </Grid>
            </CardContent>
            <CardContent>
                <Grid container justify="center" spacing={3}>
                    <Grid item>
                    <Link to="/Goals">
                        <Button variant="contained" color="primary">
                            Goals
                        </Button>
                    </Link>
                    </Grid>
                    <Grid item>
                        <Link to="/TipLog">
                            <Button variant="contained" color="primary">
                                Tip Log
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
}

export default withStyles(styles, { withTheme: true })(LandingPageContent);