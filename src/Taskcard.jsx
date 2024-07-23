import React from 'react'

const Taskcard = ({el}) => {
  return (
    <div className='card'>
        
      <h1 style={el.isdone?{textDecoration:'line-through'}:null} >{el.name}</h1>
    
    </div>
  )
}

export default Taskcard