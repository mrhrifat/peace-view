import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'

const VideoItem = ({ video }) => {
    // console.log(video)
    return (
        <Grid item xs={12}>
            <Paper style={{ display: 'flex', alignItems: 'center' }}>
                <img
                    style={{ marginRight: '20px' }}
                    alt='Thumbnail'
                    src={video.snippet.thumbnails.medium.url}
                />
                <Typography variant='subtitle1'>
                    <strong>{video.snippet.title}</strong>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default VideoItem
