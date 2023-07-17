import './App.css';
import React from "react"
import Menu from "./Components/Menu"
import Video from "./Components/Video"

const videos = {
  deer:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
  snail:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
  cat:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
  spider:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4"
};
//Object.keys() returns an array containing the property names(keys) of the specified object, e.g. videos
//this method will extract all the keys from the videos obj and return them as an array
const videoNames = Object.keys(videos)

function App() {

  const [videoSrc, setVideoSrc] =React.useState(videos.spider)

  //handle the selection of a video from the menu
  //video: selected video is passed as an arguement
  function onSelectVideo(video) {
    //retrieves the URL of the selected video from the 'videos' object using the 'video' paramenter
    const videoSrc = videos[video]
    //updates the videoSrc state with the new video url
    setVideoSrc(videoSrc)
  }

  return (
    <div className="App">
      <h1>Video Player</h1>
      <Menu 
        //this will be called when a video is selected from the menu
        onSelectVideo={onSelectVideo}
        //menu comp. will use this array to generate menu options for each video
        videoValues={videoNames}
      />
      <Video videoSrc={videoSrc}/>
    </div>
  );
}

export default App;
