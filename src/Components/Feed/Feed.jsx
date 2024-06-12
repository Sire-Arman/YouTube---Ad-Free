import React, { useState } from "react";
import "./Feed.css";
import Card from "./Card";
import { API_KEY, converter, getTime } from "../../data";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Nothing from "../SearchFeed/Nothing";

const Feed = ({ category}) => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const video_list_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    const resp = await axios.get(video_list_url);
    const newData = resp.data;
    setData(newData.items);
    // console.log(data[0]);
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="feed">
      {data.length === 0 && <Nothing />}
      {data?data.map((item,index) => {
        return (
          <Card
            key={index}
            converter={converter}
            getTime={getTime}
            videoId={item.id}
            categoryId ={item.snippet.categoryId}
            img={item.snippet.thumbnails.high}
            title={item.snippet.title}
            channel={item.snippet.channelTitle}
            views={item.statistics.viewCount}
            time={item.snippet.publishedAt}
          />
        );
      }):"loea"}
    </div>
  );
};

export default Feed;
