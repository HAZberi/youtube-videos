import React from "react";

const VideoDetail = ({video}) => {
    if(!video){
        return <div>Loading . . . . </div>
    }
    const videoSource = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div>
            <div className="ui embed">
                <iframe title={video.snippet.title} src={videoSource}></iframe>
            </div>
            <div className="ui segment">
                <div className="ui header">{video.snippet.title}</div>
                <p>{video.snippet.description}</p>
            </div>
        </div>            
    )
}

export default VideoDetail;