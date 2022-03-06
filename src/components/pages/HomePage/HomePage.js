import React from "react";
import axios from "axios";

import Header from "../../sub-components/Header/Header";
import Hero from "../../sub-components/Hero/Hero";
import VideoDetails from "../../sub-components/VideoDetails/VideoDetails";
import OtherVideos from "../../sub-components/OtherVideos/OtherVideos";
import CommentDisplay from "../../sub-components/CommentDisplay/CommentDisplay";

let api = "https://project-2-api.herokuapp.com/";
let herokoKey = "?api_key=7068ed1b-681d-4f7f-9d65-f55391e29db7";

class Homepage extends React.Component {
  state = {
    allVideos: [],
    chosenVideo: undefined,
    loading: true,
  };

  componentDidMount() {
    this.loadAllVideos();
    console.log(this.state);
  }

  loadAllVideos = () => {
    axios.get(api + "videos/" + herokoKey).then((response) => {
      console.log(response.data);
      this.setState({ allVideos: response.data });
      this.setChosenVideoById(response.data[0].id);
    });
  };

  setChosenVideoById = (videoId) => {
    axios.get(api + "videos/" + videoId + herokoKey).then((response) => {
      this.setState({ loading: true });
      console.log(response.data);
      this.setState({ chosenVideo: response.data, loading: false });
    });
  };

  componentDidUpdate(prevProps) {
    let newVideoId = this.props.match.params.id;
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.setChosenVideoById(newVideoId);
    }
  }

  render() {
    if (this.state.loading) {
      return <div>Loading</div>;
    }
    return (
      <div className="app">
        <Header></Header>
        <Hero
          videos={this.state.allVideos}
          videodetails={this.state.chosenVideo}
          specificVideo={this.state.chosenVideo}
        />
        <VideoDetails
          videos={this.state.allVideos}
          videodetails={this.state.chosenVideo}
          specificVideo={this.state.chosenVideo}
        />
        <CommentDisplay
          videos={this.state.allVideos}
          videodetails={this.state.chosenVideo}
          specificVideo={this.state.chosenVideo}
        />
        <OtherVideos
          videos={this.state.allVideos}
          videodetails={this.state.chosenVideo}
          specificVideo={this.state.chosenVideo}
        />
      </div>
    );
  }
}

export default Homepage;
