import React from 'react'
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import user_profile from "../../assets/user_profile.jpg";
function Comment(props) {
  return (
    <div className="comment">
        <img src={props.img} alt="" />
        <div>
          <h3>{props.user} <span>{props.time}</span></h3>
          <p>{props.desc}</p>
          <div className="comment-action">
            <img src={like} alt="" />
            <span>{props.like}</span>
            <img src={dislike} alt="" />
          </div>
        </div>
      </div>
  )
}

export default Comment