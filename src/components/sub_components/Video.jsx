import React from 'react'
import { Paper, Typography } from '@material-ui/core'

const Video = ({ selectedVideo }) => {


    if (!selectedVideo) return 'Loading...'

    // console.log(selectedVideo)
    // console.log(selectedVideo.id.videoId)

    const videoSrc = `${process.env.REACT_APP_VIDEO_EMBED_URL}/${selectedVideo.id.videoId}`

    const time = new Date(selectedVideo.snippet.publishedAt).toDateString()


    return (
        <>
            <Paper elevation={6} style={{ height: '30%' }}>
                <iframe
                    frameBorder='0'
                    height='100%'
                    width='100%'
                    title='Video Player'
                    src={videoSrc}
                />
            </Paper>
            <Paper elevation={6} style={{ padding: '15px' }}>
                <Typography variant='h4'>
                    {selectedVideo.snippet.title}
                </Typography>
                <Typography variant='subtitle1'>{videoSrc && time || 'No time available'}</Typography>
                <Typography variant='h6'>{selectedVideo.snippet.channelTitle}</Typography>
                <Typography variant='subtitle2'>{selectedVideo.snippet.description || 'No descreption available'} </Typography>
            </Paper>
        </>
    )
}

export default Video
