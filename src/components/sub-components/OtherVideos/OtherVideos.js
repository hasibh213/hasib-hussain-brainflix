import { Link } from "react-router-dom";
import "./OtherVideos.scss";

function OtherVideos(props) {
  return (
    <>
      <div className="othervideos__header">
        Next Videos
        {props.videos
          .filter((v) => v.id != props.specificVideo.id)
          .map((otherVideo) => (
            <Link
              className="othervideos"
              key={otherVideo.id}
              to={`/videos/${otherVideo.id}`}
            >
              <div className="othervideos__header">
                <article className="othervideos__card">
                  <img
                    className="othervideos__image"
                    src={otherVideo.image}
                    alt="video-image"
                  />
                  <div className="othervideos__text">
                    <h3 className="othervideos__title">{otherVideo.title}</h3>
                    <p className="othervideos__channel">{otherVideo.channel}</p>
                  </div>
                </article>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
}

export default OtherVideos;
