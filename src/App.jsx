import React,{ useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'
import {Routes, Route} from 'react-router-dom'
import Search from './Pages/Search/Search'
import { API_KEY } from './data'
import axios from 'axios'

function App() {
  const [sidebar, setSidebar] = useState(true)
  const [search, setSearch] = useState([]);
  const [category, setCategory] = useState(0);
  const [data, setData] = useState([]);


  const fetchData = async () => {
    const video_list_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    const resp = await axios.get(video_list_url);
    const newData = resp.data;
    setData(newData.items);
    // console.log("triggered")
    // console.log(data[0]);
  };

  useEffect(() => {
    fetchData()
  }, [category])

  useEffect(()=>{
    console.log("first")
    setData(search);
    // console.log(search)
    // console.log("triggered")
  },[search])
  
  const categoryHandler = (value)=>{
    setCategory(value);
  }

  
  return (
    <>
      < Navbar setSidebar={setSidebar} setSearch={setSearch} />
      <Routes>
        <Route path="/" element = {<Home sidebar={sidebar} category={category} categoryHandler={categoryHandler}/>} />
        <Route path="/search" element = {<Search sidebar={sidebar} data={data} category={category} categoryHandler={categoryHandler} />} />
        <Route path="/video/:categoryId/:videoId" element = {<Video />} />
      </Routes>
    </>
  )
}

export default App
