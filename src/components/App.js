import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import "semantic-ui-css/semantic.min.css";
import VideoList from "./VideoList";
import VideoDetail from "./VIdeoDetail";

const App = () => {
  const [videoList, setVideoList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [searchTerm, setSearchTerm] = useState("canada news");

  const getSearchResults = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  useEffect(() => {
    const searchResults = async (searchTerm) => {
      const response = await youtube.get("/search", {
        params: {
          q: searchTerm,
          safeSearch: "none",
        },
      });
      setVideoList(response.data.items);
      setSelectedVideo(response.data.items[0]);
    };
    searchResults(searchTerm);
  }, [searchTerm]);

  return (
    <div className="ui container">
      <SearchBar onSearchSubmit={getSearchResults} />
      <div className="ui stackable grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              videos={videoList}
              onVideoSelect={onVideoSelect}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
