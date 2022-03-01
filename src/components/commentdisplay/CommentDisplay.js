import React from "react";
import "./CommentDisplay.scss";
import addcomment from "../../assets/Icons/add_comment.svg";
import avatarImage from "../../assets/Images/Mohan-muruge.jpg";

function CommentDisplay(props) {
  let comments = props.videodetails.comments;
  return (
    <div className="comments">
      <h1 className="comments__number">{props.videodetails.comments.length}</h1>
      <div>
        <form className="comments__form">
          <img
            src={avatarImage}
            alt="AvatarPicture"
            className="comments__avatarimage"
          />
          <div className="comments__mobile">
            <div className="comments__main">
              <label className="comments__title">
                JOIN THE CONVERSATION
                <input
                  className="comments__field"
                  type="text"
                  name="comment"
                  placeholder="Add a new comment"
                />
              </label>
            </div>
            <button className="comments__button" type="submit">
              <input className="comments__icon" type="image" src={addcomment} />
              <p className="comments__word">COMMENT</p>
            </button>
          </div>
        </form>
        <div>
          {comments.map((comment) => {
            return (
              <article className="comments__card" key={comment.id}>
                <div>Grey icon</div>
                <div>
                  <div>
                    <h3>{comment.name}</h3>
                    <p>{comment.timestamp}</p>
                  </div>
                  <p>{comment.comment}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CommentDisplay;
