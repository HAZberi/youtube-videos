import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
    const renderedList = props.videos.map(video => {
        return <VideoItem video={video} key={video.id.videoId}/>
    })
    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    )
}

export default VideoList;