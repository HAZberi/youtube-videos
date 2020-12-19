import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import "semantic-ui-css/semantic.min.css";
import VideoList from "./VideoList";
import VideoDetail from "./VIdeoDetail";
import Pagination from "./Pagination";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: [],
      selectedVideo: null,
      currentPage: 1,
      videoListPerPage: [],
    };
    this.resultsPerPage = 5;
  }
  componentDidMount() {
    this.searchResults("canada news");
  }
  searchResults = async (searchTerm) => {
    const response = await youtube.get("/search", {
      params: {
        q: searchTerm,
      },
    });
    this.setState({
      videoList: response.data.items,
      selectedVideo: response.data.items[0],
    });
    this.searchResultsPerPage();
  };
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  searchResultsPerPage = (page = 1) => {
    const start = (page - 1) * this.resultsPerPage;
    const end = page * this.resultsPerPage;
    this.setState({
      currentPage: page,
      videoListPerPage: this.state.videoList.slice(start, end),
    });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.searchResults} />
        <div className="ui stackable grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videoListPerPage}
                onVideoSelect={this.onVideoSelect}
              />
              <Pagination resultsPerPage={this.resultsPerPage} videoList={this.state.videoList} currentPage={this.state.currentPage} displayNewList={this.searchResultsPerPage}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
