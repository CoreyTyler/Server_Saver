import React from "react"
import { Grid } from "@material-ui/core"
import LandingPageContent from "../components/LandingPageContent"
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LandingPageToolbar from './LandingPageToolbar'
import Weather from './Weather'



const LandingPage = () => {
    return(
        <Grid container direction="column" spacing={2}>
            <Grid item>
                <LandingPageToolbar />
            </Grid>
            <Grid item container>
                <Grid item xs={9} />
                <Grid item xs={3}>
                <Weather />
                </Grid>
            </Grid>
            <Grid item container>
                <Grid item xs={0} sm={2} />
                <Grid item xs={12} sm={8}>
                <LandingPageContent />
                </Grid>
                <Grid item xs={2} sm={2}/>
            </Grid>
            <Grid item container>
                <Grid item xs={5} />
                <Grid item xs={2} justify="center">
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                <Button>
                    <FacebookIcon />
                </Button>
                <Button>
                    <TwitterIcon />
                </Button>
                <Button>
                    <InstagramIcon />
                </Button>
            </ButtonGroup>
            </Grid>
            <Grid item xs={5} />
            </Grid>
        </Grid>
    )
    }
    
export default LandingPage 