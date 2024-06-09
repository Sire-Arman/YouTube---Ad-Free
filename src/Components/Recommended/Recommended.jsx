import React, { useEffect, useState } from 'react'
import './Recommended.css'
import Sidevideo from './Sidevideo'
import { API_KEY, converter } from '../../data'
import axios from 'axios'
import moment from 'moment'
import { Link, useParams } from 'react-router-dom'
function Recommended() {
  const {categoryId} = useParams();
  const [data, setData] = useState([]);
  const fetch_recom_data = async () => {
    const video_list_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
    const resp = await axios.get(video_list_url);
    const newData = resp.data;
    setData(newData.items);
    // console.log(data[0]);
  };
  useEffect(()=>{
    fetch_recom_data();
    window.scrollTo(0, 0);
  },[categoryId])


  return (

    <div className='recommended'>
      {data?data.map((item,index)=>{
          return <Link to ={`/video/${item.snippet.categoryId}/${item.id}`}><Sidevideo key={index} 
          src ={item.snippet.thumbnails.medium.url}
          title={item.snippet.localized.title}
          channel={item.snippet.channelTitle}
          views={converter(item.statistics.viewCount)}
          time = {moment(item.snippet.publishedAt).fromNow()}
         /></Link>
      }):""}
        
       
    </div>

  )
}

export default Recommended