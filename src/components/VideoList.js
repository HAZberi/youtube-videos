import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
    const renderedList = props.videos.map(video => {
        return <VideoItem video={video} key={video.id.videoId} onVideoSelect={props.onVideoSelect}/>
    })
    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    )
}

export default VideoList;