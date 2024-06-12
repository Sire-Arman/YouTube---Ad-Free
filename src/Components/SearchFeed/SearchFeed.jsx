import React, { useState } from "react";
import "./SearchFeed.css";
import Card from "./Card";
import { API_KEY, converter, getTime } from "../../data";
import axios from "axios";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Nothing from "./Nothing";

const SearchFeed = ({data, category}) => {
  console.log(data)
  // const [data, setData] = useState([]);
  // const fetchData = async () => {
  //   const video_list_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
  //   const resp = await axios.get(video_list_url);
  //   const newData = resp.data;
  //   setData(newData.items);
  //   // console.log("triggered")
  //   // console.log(data[0]);
  // };
  // useEffect(() => {
  //   fetchData();
  //   console.log("second")
  // }, [category]);

 

//   useEffect(() => {
//     fetchData();
//   }, [vidData]);

  return (
    <div className="feed">
      {data?.length === 0 && <Nothing />}
      {data?data.map((item,index) => {
        return (
          <Card
            key={index}
            converter={converter}
            getTime={getTime}
            videoId={item.id.videoId}
            categoryId ={category}
            img={item.snippet.thumbnails.high}
            title={item.title}
            channel={item.snippet.channelTitle}
            views={item.statistics?item.statistics.viewCount:"100K"}
            time={item.snippet.publishedAt}
          />
        );
      }):""}
    </div>
  );
};

export default SearchFeed;
