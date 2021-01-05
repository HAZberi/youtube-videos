import React, { useState, useEffect } from "react";
import VideoItem from "./VideoItem";
import Pagination from "./Pagination.js";

//CAN BE ADDED AS A CONFIG SETTING

const RESULTS_PER_PAGE = 5;

const VideoList = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [videoListPerPage, setVideoListPerPage] = useState([]);


  useEffect(() => {
    const searchResultsPerPage = (page = 1) => {
      const start = (page - 1) * RESULTS_PER_PAGE;
      const end = page * RESULTS_PER_PAGE;
      setVideoListPerPage(props.videos.slice(start, end));
    };
    searchResultsPerPage(currentPage);
  }, [currentPage, props.videos]);

  useEffect(()=>{
    setCurrentPage(1);
  },[props.videos])

  const renderedList = videoListPerPage.map((video) => {
    return (
      <VideoItem
        video={video}
        key={video.id.videoId}
        onVideoSelect={props.onVideoSelect}
      />
    );
  });
  const newList = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="ui relaxed divided list">
      {renderedList}
      <Pagination
        resultsPerPage={RESULTS_PER_PAGE}
        videoList={props.videos}
        currentPage={currentPage}
        displayNewList={newList}
      />
    </div>
  );
};

export default VideoList;
