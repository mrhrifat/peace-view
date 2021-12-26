import React from 'react'
import { Grid } from '@material-ui/core'
import VideoItem from './VideoItem'

const List = ({ videos, onVideoSelect }) => {
    const videoList = videos.map((video, id) => <VideoItem
        key={id}
        video={video}
        onVideoSelect={onVideoSelect}
    />)
    return (
        <Grid container spacing={10}>
            {videoList}
        </Grid>
    )
}

export default List
