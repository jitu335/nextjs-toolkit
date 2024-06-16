import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


//Action----------
export const fetchTodos = createAsyncThunk("", async ()=>{
const response= await fetch('https://jsonplaceholder.typicode.com/todos')
return response.json();   

})

const todoSlice = createSlice({

name: 'todo' ,
initialState: {

    isloading: false,
    data: null,
    isError: false, 
},

extraReducers: (builder)=>{ 

builder.addCase(fetchTodos.pending, (state, action)=>{ 
 state.isloading = true 
})

builder.addCase(fetchTodos.fulfilled, (state, action) =>{

    state.isloading =false;
    state.data= action.payload
}) 

builder.addCase(fetchTodos.rejected, (state, action)=>{
  console.warn('action', action.payload) 
 state.isError= true 
})
}

})

export default todoSlice.reducer;  