import React from "react";
import SearchBar from "./SearchBar";
import youtube from '../api/youtube';
import "semantic-ui-css/semantic.min.css";


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
        console.log(this.state);
    }
    render(){
        return (
            <div className="ui container">
                <SearchBar onSearchSubmit={this.searchResults}/>
            </div>
        );
    }
}

export default App;