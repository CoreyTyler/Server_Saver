import React from "react"
import { Grid } from "@material-ui/core"
import GoalsToolBar from "./GoalsToolbar";

const Goals = () => {
    return(
        <Grid container direction="column">
            <Grid item>
            <GoalsToolBar />
            </Grid>

        </Grid>
    )
}

export default Goals