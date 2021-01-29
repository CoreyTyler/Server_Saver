import React from "react"
import { Grid } from "@material-ui/core"
import TipLogContent from "./TipLogContent"
import TipLogToolbar from "./TipLogToolbar"


const TipLog = () => {
    return(
        <Grid container direction="column" spacing={10}>
            <Grid item>
                <TipLogToolbar />
            </Grid>
            <Grid item container>
                <Grid item xs={0} sm={2} />
                <Grid item xs={12} sm={8}>
                <TipLogContent />
                </Grid>
                <Grid item xs={2} sm={2}/>
            </Grid>
        </Grid>
    )
}

export default TipLog