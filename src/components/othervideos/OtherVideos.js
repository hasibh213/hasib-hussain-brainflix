import "./OtherVideos.scss";

function OtherVideos(props) {
  return (
    <>
      Next Videos
      {props.videos
        .filter((v) => v.id != props.specificVideo.id)
        .map((otherVideo) => (
          <div
            className="othervideos"
            key={otherVideo.id}
            onClick={() => props.onVideoClick(otherVideo.id)}
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
          </div>
        ))}
    </>
  );
}

export default OtherVideos;
