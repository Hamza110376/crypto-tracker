import React from 'react'
import "./style.css"
const index = ({text, onClick, outlined}) => {
  return (
    <div className={outlined? "outlined-btn":'btn'} onClick={()=> onClick}>{text}</div>
  )
}

export default index