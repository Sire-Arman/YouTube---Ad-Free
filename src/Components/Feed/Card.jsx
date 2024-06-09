import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
function Card({converter,getTime, videoId, categoryId, img, title, channel, views, time }) {
  return (
    <Link to={`video/${categoryId}/${videoId}`} className="card">
      <img src={img.url} alt="" />
      <h2>{title}</h2>
      <h3>{channel}</h3>
      <p>
        {/* {converter(views)} views &bull; {getTime(time)} */}
        {converter(views)} views &bull; {moment(time).fromNow()}
      </p>
    </Link>
  );
}

export default Card;
