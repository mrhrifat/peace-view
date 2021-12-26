import React from 'react'
import { Grid } from '@material-ui/core'
import VideoItem from './VideoItem'

const List = ({ videos }) => {
    const videoList = videos.map((video, id) => <VideoItem key={id} video={video} />)
    return videoList
}

export default List
