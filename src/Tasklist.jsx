import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Taskcard from './Taskcard';

const Tasklist = () => {
    let tasks=useSelector(state=>state.counterslice.tasks);
    const [first, setfirst] = useState(0)
  return (
    <div className='list'>
        <div>
            <button onClick={()=>setfirst(0)}>all</button>
            <button onClick={()=>setfirst(1)}>done</button>
            <button onClick={()=>setfirst(2)}>notdone</button>
           
        </div>
        {first===0?tasks.map((el) => (<Taskcard el={el} />)):first===1?tasks.filter(el=>el.isdone===true).map((el) => (<Taskcard el={el} />)):tasks.filter(el=>el.isdone===false).map((el) => (<Taskcard el={el} />))}

    </div>
  )
}

export default Tasklist