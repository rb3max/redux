import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks:[
      {
        name:"learn html",
        isdone:true 
      },
      {
        name:"learn css",
        isdone:true 
      },
      {
        name:"learn javascript",
        isdone:false 
      },
      {
        name:"learn react",
        isdone:false 
      },
      {
        name:"learn github",
        isdone:false
      },
  ]
}

export const counterSlice = createSlice({
  name: 'counterslice',
  initialState,
  reducers: {
      addtasks:(state,action)=>{
        state.tasks=[...state.tasks,action.payload]
      }
  },
})

// Action creators are generated for each case reducer function
export const {addtasks} = counterSlice.actions

export default counterSlice.reducer