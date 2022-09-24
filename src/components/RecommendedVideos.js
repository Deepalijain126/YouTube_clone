
import React from 'react';
import "./Recommended.css";
import VideoCard from './videocard.js';

 export default function RecommendedVideos() {
    return ( 
    <div className="recommendedVideos">
      <div className='recommendedVideos_videos'>
    <VideoCard
     channelName= "Donut Media"
     videoName="LOTUS - Everything You Need to Know | Up To Speed"
     views= "2472719"
     VideoUrl="https://www.youtube.com/watch?v=e3EfNfE8pCU"
     channelImage="\YouTube_clone\channels\donut.jpg"
     videoThumbnail ="\YouTube_clone\videos\lotus-everything-you-need-to-know.jpg"
    />
    <VideoCard
     channelName= "Dua Lipa"
     videoName= "Dua Lipa - Levitating Featuring DaBaby (Official Music Video)"
     VideoUrl= "https://www.youtube.com/watch?v=TUVcZfQe-Kw"
     views= '602451553'
     channelImage ="\YouTube_clone\channels\dua-lipa.jpg"
     videoThumbnail ="\YouTube_clone\videos\levitating.jpg"
    />
    <VideoCard
    channelName= "Dua Lipa"
     videoName= "Dua Lipa - Love Again (Official Music Video)"
     VideoUrl = "https://www.youtube.com/watch?v=BC19kwABFwc"
     views= '203228730'
     channelImage ="\YouTube_clone\channels\dua-lipa.jpg"
     videoThumbnail ="\YouTube_clone\videos\love-again.jpg">
    </VideoCard>
    <VideoCard 
    channelName ="Dua Lipa"
    videoName ="Dua Lipa - New Rules (Official Music Video)"
    VideoUrl ="https://www.youtube.com/watch?v=k2qgadSvNyU"
    views = '2724816745'
    channelImage = "\YouTube_clone\channels\dua-lipa.jpg"
    videoThumbnail ="\YouTube_clone\videos\new-rules.jpg">
    </VideoCard>
    
    <VideoCard
    channelName = "GameSpot"
    videoName ="Homeworld 3 Official Gameplay Trailer | gamescom ONL 2022"
    VideoUrl ="https://www.youtube.com/watch?v=kUmj0yruxkU "
    views = '66192'
    channelImage = "\YouTube_clone\channels\gamespot.jpg"
    videoThumbnail ="\YouTube_clone\videos\homeworld-gameplay.jpg"
    ></VideoCard>
    <VideoCard
    channelName= "GameSpot"
    videoName= "Homeworld 3 Reveal Trailer | Game Awards 2021"
    VideoUrl= "https://www.youtube.com/watch?v=pacXW5eZb9w "
    views= '103907'
    channelImage= "\YouTube_clone\channels\gamespot.jpg"
    videoThumbnail = "\YouTube_clone\videos\homeworld-reveal.jpg"
    ></VideoCard>
    <VideoCard
    channelName= "Gary Explains"
    videoName="Apple A16 Bionic - It's All About Power Efficiency"
    VideoUrl= "https://www.youtube.com/watch?v=fA0pNMEPmLQ"
    views = '3170'
    channelImage= "\YouTube_clone\channels\gary-explains.jpg"
    videoThumbnail= "\YouTube_clone\videos\apple-bionic.jpg"
    ></VideoCard>
    <VideoCard
    channelName= "Nintendo Life"
    videoName = "The 26 Best Game Boy Advance (GBA) Games of All Time"
    VideoUrl = "https://www.youtube.com/watch?v=bhK3W_3CW7w "
    views  = '2232114'
    channelImage = "\YouTube_clone\channels\nintendo-life.jpg"
    videoThumbnail = "\YouTube_clone\videos\26-best-games.jpg"
    ></VideoCard>s
    
    </div>
    </div>
    );
}    


//<div className="Videos">
           // {Videos && Videos.map(video => {
              //  return(
                  //  <div className="video-details" key={"video.id"}>
                    //    {video.channelName}
                    //    {video.videoId}
                  //  </div>
             //   )
          //  })}
      //  </div> */ 





