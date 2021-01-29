import React from "react"
import { Grid } from "@material-ui/core"
import CompareToolbar from "./CompareToolbar"
import CompareContent from "./CompareContent"

const Compare = () => {
    return(
        <Grid container direction="column">
            <Grid item>
            <CompareToolbar />
            </Grid>
            <Grid item>
            <CompareContent />
            </Grid>
        </Grid>
    )
}

export default Compare