import React, { useState } from "react";
import "./SearchFeed.css";
import Card from "./Card";
import { API_KEY, converter, getTime } from "../../data";
import axios from "axios";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const SearchFeed = ({ category,search, setSearch}) => {
  const [data, setData] = useState([]);
//     const [vidData, setVidData] = useState(null);
//   const fetchData = async () => {
//     const video_data_url = ``;
//     const resp = await axios.get(video_data_url);
//     const newData = resp.data;
//     setVidData(newData.items);
//     console.log(vidData[0]);
//   };

  useEffect(()=>{
    setData(search);
    // console.log(search)
    // console.log("triggered")
  },[search])

//   useEffect(() => {
//     fetchData();
//   }, [category]);

  return (
    <div className="feed">
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
      }):"loea"}
    </div>
  );
};

export default SearchFeed;
