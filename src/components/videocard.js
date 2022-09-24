import React from "react";
import"./videoCard.css";
import  {Avatar}   from "@mui/material";

function VideoCard({videoThumbnail,videoName,channelName,views,channelImage,VideoUrl})
    {return (
     <div className="video-card">
      <img src = {videoThumbnail} className="video-thumbnail"/>
        <div className="videocard_info">
          <Avatar 
           className="videocard_avatar"
            alt={channelName}
             src={channelImage}/>
           <div className="video_text">
            <h4>{videoName}</h4>
              <p>Views/{views}</p>
              <a href={VideoUrl}>Watch</a>
           </div>
        </div>
      </div>
    );
    }
    export default VideoCard;