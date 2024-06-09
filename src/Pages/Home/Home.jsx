import React, { useState } from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'
const Home = (props) => {
  const [category, setCategory] = useState(0);
  return (
    <>
   <Sidebar sidebar={props.sidebar} category={category} setCategory={setCategory}/>
   <div className={`container ${props.sidebar?"":"large-container"}`}>
    <Feed category={category}/>
   </div>
    </>
  )
}

export default Home