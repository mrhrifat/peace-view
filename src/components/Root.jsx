import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import index from '../api'

export class Root extends Component {
    render() {
        return (
            <Grid container spacing={16} justify='center'>
                <Grid item xs={12}>
                    <Grid container spacing={16}>
                        
                        <Grid item xs={12}>
                            {/* TODO: Search Bar */}
                        </Grid>

                        <Grid item xs={8}>
                            {/* TODO: Video */}
                        </Grid>

                        <Grid item xs={4}>
                            {/* TODO: List */}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default Root
