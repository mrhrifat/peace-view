import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import { Search, Video, List } from './sub_components'
import youtube from '../api/youtube'

export class Root extends Component {

    state = {
        videos: [],
        selectedVideo: null
    }

    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: process.env.REACT_APP_API_KEY,
                q: searchTerm,
            }
        })


        // console.log(response)
        // console.log(response.data.items)

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }

    onVideoSelect = video => {
        this.setState({
            selectedVideo: video
        })
    }

    render() {
        const { videos, selectedVideo } = this.state
        // console.log(this.state)
        // console.log(videos)
        return (
            <Grid container spacing={10} justifyContent='center'>
                <Grid item xs={12}>
                    <Grid container spacing={10}>

                        <Grid item xs={12}>
                            {/* TODO: Search Bar */}
                            <Search onFormSubmit={this.handleSubmit} />
                        </Grid>

                        <Grid item xs={8}>
                            {/* TODO: Video */}
                            <Video selectedVideo={selectedVideo} />
                        </Grid>

                        <Grid item xs={4}>
                            {/* TODO: List */}
                            <List videos={videos} onVideoSelect={this.onVideoSelect} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default Root
