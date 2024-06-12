import React, { useEffect, useState } from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'
const Home = ({sidebar, category, categoryHandler}) => {
 
  return (
    <>
   <Sidebar sidebar={sidebar} category={category} categoryHandler={categoryHandler}/>
   <div className={`container ${sidebar?"":"large-container"}`}>
    <Feed category={category} />
   </div>
    </>
  )
}

export default Home