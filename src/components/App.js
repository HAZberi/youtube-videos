import React from "react";
import SearchBar from "./SearchBar";
import youtube from '../api/youtube';
import "semantic-ui-css/semantic.min.css";
import VideoList from "./VideoList";


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {videoList: []};
    }
    searchResults = async (searchTerm) => {
        const response = await youtube.get('/search', {
            params: {
                q: searchTerm
            }
        });
        this.setState({videoList: response.data.items});
    }
    render(){
        return (
            <div className="ui container">
                <SearchBar onSearchSubmit={this.searchResults}/>
                <VideoList videos={this.state.videoList}/>
            </div>
        );
    }
}

export default App;