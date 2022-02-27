import React from "react";
import "./Hero.scss";
import playbutton from "../../assets/Icons/play.svg";
import scrubicon from "../../assets/Icons/scrub.svg";
import fullscreen from "../../assets/Icons/fullscreen.svg";
import volume from "../../assets/Icons/volume_up.svg";

function Hero(props) {
  return (
    <div className="hero">
      <img
        className="hero__image"
        src={props.specificVideo.image}
        alt={props.specificVideo.title}
      />
      <img
        className="hero__play-video-icon"
        src={playbutton}
        alt="play-video-button"
      />
      <img className="hero__scrub-icon" src={scrubicon} alt="toggle-video" />
      <div>0:00/{props.specificVideo.duration}</div>
      <img
        className="hero__fullscreen-icon"
        src={fullscreen}
        alt="fullscreen-button"
      />
      <img className="hero__volume-icon" src={volume} alt="volume-level" />
    </div>
  );
}

export default Hero;
