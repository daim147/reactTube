import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";

import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import "semantic-ui-css/semantic.min.css";
import useVideos from "../hooks/useVideos";

function App() {
  const [selectedVideo, setselectedVideo] = useState(null);
  // ! using coustom hooks
  const [videos, search] = useVideos("songs");

  useEffect(() => {
    setselectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={() => console.log("heeehehehe")} />
      <div className="ui grid">
        <div className="ui row">
          <div className="ten wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="six wide column">
            <VideoList onVideoSelect={setselectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
