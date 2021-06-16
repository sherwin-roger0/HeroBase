import { Typography } from '@material-ui/core'
import React from 'react'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {Link} from "react-router-dom";

export default function About() {
    return (
        <div>
             <Container fixed>
                <br/>
                <br/>
                <br/>
                <br/>
                <Grid direction="column" justify="center" alignItems="center" container spacing={3}>
                    <Grid item xs>
                        <Typography variant="h4">This is an API based website</Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="h5">Made by React( only Client side )</Typography>
                    </Grid>
                    <Grid item xs>
                        <a href="https://www.superheroapi.com/"><Typography variant="h6">All the information is from SuperheroAPI</Typography></a>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="h6">Using the fetch() in javascript and CharacterID from SuperheroAPI , The Character's information is Generated</Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="h6">Material-UI is used for styling and no css and HTML is used</Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
