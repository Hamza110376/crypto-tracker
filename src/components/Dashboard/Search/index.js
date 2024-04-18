import React from 'react'
import { useState } from 'react';
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import "./style.css"
const Search = ({search, onSearchChange}) => {
 
  return (
    <div className='search-flex'>
    <SearchRoundedIcon/>
        <input placeholder='search' type='text' value={search} onChange={(e)=>onSearchChange(e)}/>
    </div>
  )
}

export default Search