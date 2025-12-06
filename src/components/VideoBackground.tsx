import React from "react"
import "./VideoBackground.css"

interface VideoBackgroundProps {
  videoSource: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({videoSource}) => {
    return (
        <div className="video-background-container">
            <video autoPlay loop muted playsInline className="background-video">
                <source src={videoSource} type="video/mp4"/>
                Your browser does not support video tags.
            </video>
        </div>
    )
}

export default VideoBackground