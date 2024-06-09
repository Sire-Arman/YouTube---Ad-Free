import React, { useEffect, useState } from "react";
import "./PlayVideo.css";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import Comment from "./Comment";
import { Link, useParams } from "react-router-dom";
import { API_KEY } from "../../data";
import axios from "axios";
import { converter } from "../../data";
import moment from "moment";




function PlayVideo() {
  const {videoId} = useParams();
  const [apiData, setApiData] = useState(null);
  const [channelId,setChannelId] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  const fetch_channel_data= async ()=>{
    const channel_url =`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEY}`
    const resp2 = await axios.get(channel_url);
    setChannelData(resp2.data.items);
    // console.log(channelData)
  }


  const fetch_comment_data = async ()=>{
    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`
    const resp3 = await axios.get(comment_url);
    setCommentData(resp3.data.items);
    // console.log(commentData);
  }

  const fetch_video_data = async () => {
    const video_id_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&maxResults=50&key=${API_KEY}`;
    const resp = await axios.get(video_id_url);
    const newData = resp.data;
    setApiData(newData.items);
    setChannelId(newData.items[0].snippet.channelId);
    // console.log(channelId)
  };


  useEffect(() => {
    fetch_video_data();
    window.scrollTo(0, 0);
    // console.log(apiData)
  }, [videoId]);
  useEffect(() => {
    fetch_channel_data();
    fetch_comment_data();
  }, [apiData])
  



  return (
    <div className="play-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; {autoplay;} clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h3>{apiData ? apiData[0].snippet.title : "NA"}</h3>
      <div className="play-video-info">
        <p>
          {converter(apiData ? apiData[0].statistics.viewCount : "NA")} Views
          &bull;{" "}
          {moment(apiData ? apiData[0].snippet.publishedAt : "NA").fromNow()}
        </p>
        <div>
          <span>
            <img src={like} alt="" />{" "}
            {converter(apiData ? apiData[0].statistics.likeCount : "NA")}
          </span>
          <span>
            <img src={dislike} alt="" />
          </span>
          <span>
            <img src={share} alt="" /> Share
          </span>
          <span>
            <img src={save} alt="" /> Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={channelData?channelData[0].snippet.thumbnails.high.url:jack} alt="" />
        <div>
          <p>{apiData ? apiData[0].snippet.channelTitle : "NA"}</p>
          <span>{converter(channelData?channelData[0].statistics.subscriberCount:"NA")} Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>
          {apiData ? apiData[0].snippet.description.slice(0, 250) : "NA"}{" "}
          {apiData && apiData[0].snippet.description.length >= 250
            ? "........more"
            : ""}
        </p>
        <p>Subscribe for more</p>
        <hr />
        <h4>
          {apiData ? converter(apiData[0].statistics.commentCount) : ""}{" "}
          comments
        </h4>
      </div>
      {commentData?commentData.map((item,index)=>{
         return <Comment
        key = {index}
        img = {item.snippet.topLevelComment.snippet.authorProfileImageUrl}
        user={item.snippet.topLevelComment.snippet.authorDisplayName}
        time={moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}
        desc={
          item.snippet.topLevelComment.snippet.textOriginal
        }
        like={item.snippet.topLevelComment.snippet.likeCount}
      />
      }):"leooo"}
    </div>
  );
}

export default PlayVideo;
