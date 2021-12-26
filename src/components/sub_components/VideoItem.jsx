import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'

const VideoItem = ({ video, onVideoSelect }) => {
    // console.log(video)
    return (
        <Grid item xs={10}>
            <Paper
                style={{ cursor: 'pointer' }}
                onClick={() => onVideoSelect(video)}
            >
                <img
                    style={{ marginRight: '20px' }}
                    alt='Thumbnail'
                    src={video.snippet.thumbnails.medium.url}
                />
                <Typography variant='subtitle1' style={{ margin: '10px 0' }}>
                    <strong>{video.snippet.title}</strong>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default VideoItem
