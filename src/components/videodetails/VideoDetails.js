import React from "react";
import "./VideoDetails.scss";
import likes from "../../assets/Icons/likes.svg";
import views from "../../assets/Icons/views.svg";

function VideoDetails(props) {
  return (
    <div className="display">
      <h1 className="display__video">{props.videos.title}</h1>
      <div className="display__video-facts">
        <article>
          <h2>By {props.videos.channel}</h2>
          <p>{props.videodetails.timestamp}</p>
        </article>
        <article>
          <section>
            <img
              className="display__views-icon"
              src={views}
              alt="video-views"
            />
            <p>{props.videodetails.views}</p>
          </section>
          <section>
            <img
              className="display__likes-icon"
              src={likes}
              alt="video-likes"
            />
            <p>{props.videodetails.likes}</p>
          </section>
        </article>
      </div>
      <p className="display__description">{props.videodetails.description}</p>
    </div>
  );
}

export default VideoDetails;
