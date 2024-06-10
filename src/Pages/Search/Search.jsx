import React, { useState } from 'react'
import './Search.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import SearchFeed from '../../Components/SearchFeed/SearchFeed'
const Search = ({sidebar, search, setSearch}) => {
  const [category, setCategory] = useState(0);
  
  return (
    <>
   <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/>
   <div className={`container ${sidebar?"":"large-container"}`}>
    <SearchFeed category={category} search={search} setSearch={setSearch}/>
   </div>
    </>
  )
}

export default Search