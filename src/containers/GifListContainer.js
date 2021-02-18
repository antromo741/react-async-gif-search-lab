import React, { Component } from 'react'
import GifList from '/components/GifList'
import GifSearch from '/components/GifSearch'

class GifListComponent extends Component {

    state ={
        gifs: []

    }

    componentDidMount() {
        this.fetchGIFs()

    }

    fetchGIFs = (query = "dolphins") => {
        fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=YOUR API KEY&rating=g')
        .then(res => res.json())
        .then(({data}) => {
            this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }))})
        })
    }

    render() {
        return(
            <div>
            <GifSearch fetchGIFs={this.fetchGIFs} />
            <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}
export default GifListContainer