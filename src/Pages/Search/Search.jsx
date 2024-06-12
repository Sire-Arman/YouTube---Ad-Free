import React, { useState } from 'react'
import './Search.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import SearchFeed from '../../Components/SearchFeed/SearchFeed'
const Search = ({sidebar, data, category, categoryHandler}) => {


  return (
    <>
   <Sidebar sidebar={sidebar} category={category} categoryHandler={categoryHandler}/>
   <div className={`container ${sidebar?"":"large-container"}`}>
    <SearchFeed data={data} category={category}/>
   </div>
    </>
  )
}

export default Search