import React from "react";
import SearchBar from "./SearchBar";
import youtube from '../api/youtube';
import "semantic-ui-css/semantic.min.css";
import VideoList from "./VideoList";
import VideoDetail from "./VIdeoDetail";


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {videoList: [], selectedVideo: null};
    }
    searchResults = async (searchTerm) => {
        const response = await youtube.get('/search', {
            params: {
                q: searchTerm
            }
        });
        this.setState({videoList: response.data.items});
    }
    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    }
    render(){
        return (
            <div className="ui container">
                <SearchBar onSearchSubmit={this.searchResults} style={{marginTop: "10px"}}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videoList} onVideoSelect={this.onVideoSelect}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;