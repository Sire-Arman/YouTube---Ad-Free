import React, { useEffect, useState } from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'
import { Link, useNavigate } from 'react-router-dom'
import { API_KEY } from '../../data'
import axios from 'axios'
const Navbar = ({setSidebar, setSearch}) => {
  const [keywords, setKeywords] = useState('');
 const navigate = useNavigate();

  const  fetch_search_data = async()=>{
    const search_url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&order=viewCount&q=${keywords}&regionCode=US&safeSearch=none&key=${API_KEY}`;
    const resp = await axios.get(search_url);
    const newData = resp.data;
    setSearch(newData.items);
    console.log(newData.items);
  }

  const handleSearch = ()=>{
    fetch_search_data();
  }

const checkSub=(event)=>{
  if(event.key === 'Enter'){
    // console.log("trigger")
    navigate('search')
    handleSearch();
  }
}
 function handleClick(){
    setSidebar((prev)=>{
      return !prev;
    })
  }

  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
      <img onClick={handleClick} className='menu-icon' src={menu_icon} alt="" />
        <Link to={'/'}><img onClick={()=>setKeywords('')} className='logo' src={logo} alt="" /></Link>
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">

        <input type="text" placeholder='Search' value={keywords} onKeyDown={checkSub} onChange={(event)=>setKeywords(event.target.value)} />
        <Link to={'/search'}><img onClick={handleSearch} src={search_icon} alt="" /></Link>
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={upload_icon} alt="" /><img src={more_icon} alt="" /><img src={notification_icon} alt="" /><a href="https://www.linkedin.com/in/arman-siddiqui-07495a226/"><img className="user-icon"src={profile_icon} alt="" /></a>
      </div>
    </nav>
  )
}

export default Navbar