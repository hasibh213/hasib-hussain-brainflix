import React from "react";
import videodetails from "./data/video-details.json";
import videos from "./data/videos.json";
import "./App.scss";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import VideoDetails from "./components/videodetails/VideoDetails";
import OtherVideos from "./components/othervideos/OtherVideos";
import CommentDisplay from "./components/commentdisplay/CommentDisplay";

class App extends React.Component {
  state = {
    allVideos: videos,
    allVideoDetails: videodetails,
    specificVideo: videodetails[0],
  };

  handleChange = (id) => {
    let selectedVideo = this.state.allVideoDetails.find((v) => v.id === id);
    this.setState({ specificVideo: selectedVideo });
  };

  render() {
    return (
      <div className="app">
        <Header></Header>
        <Hero
          videos={this.state.allVideos}
          videodetails={this.state.specificVideo}
          specificVideo={this.state.specificVideo}
        />
        <VideoDetails
          videos={this.state.allVideos}
          videodetails={this.state.specificVideo}
          specificVideo={this.state.specificVideo}
        />
        <CommentDisplay
          videos={this.state.allVideos}
          videodetails={this.state.specificVideo}
          specificVideo={this.state.specificVideo}
        />
        <OtherVideos
          videos={this.state.allVideos}
          videodetails={this.state.specificVideo}
          specificVideo={this.state.specificVideo}
          onVideoClick={this.handleChange}
        />
        <Div></Div>
      </div>
    );
  }
}

export default App;
