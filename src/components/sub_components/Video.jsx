import React from 'react'
import { Paper, Typography } from '@material-ui/core'

const Video = ({ selectedVideo }) => {


    if (!selectedVideo) return 'Loading...'

    console.log(selectedVideo)
    // console.log(selectedVideo.id.videoId)

    const videoSrc = `${process.env.REACT_APP_VIDEO_EMBED_URL}/${selectedVideo.id.videoId}`

    const time = new Date(selectedVideo.snippet.publishedAt).toDateString()


    return (
        <>
        Hi
        </>
    )
}

export default Video
