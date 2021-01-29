import React from "react";
import axios from "axios";
import Typography from "@material-ui/core/Typography";

class Weather extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            weather: "0",

            hood: "0",

            commandarie: "0",
        }
    }

    componentDidMount = () => {
        axios.get("/getAustinWeather").then(response => {
            this.setState({
                weather: response.data.temp,

                hood: response.data.city,

                commandarie: response.data.region
            })
        })
    }
        render() {
            return(
                <div>
                    <Typography>
                        The weather in {this.state.hood}, {this.state.commandarie} is {this.state.weather}*F
                    </Typography>
                </div>
            )
        }
    }

export default Weather