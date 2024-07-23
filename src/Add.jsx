import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { addtasks } from './counterslice'

const Add = () => {
  const [text, settext] = useState({
    name:"",
    isdone:false
  })
  const dispatch = useDispatch()
  return (
    <div className='add'>
      <h1>To do list</h1>
      <input onChange={(e)=>settext({...text,name:e.target.value})} type="text" />
      <button onClick={()=>dispatch(addtasks(text))}>Add</button>
    </div>
  )
}

export default Add