import React from 'react'

import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodos } from './slice/todo'

const datashow = () => {

    const Dispatch = useDispatch()
    const state = useSelector((state)=>state) 
    
    console.warn('state', state)


  return (
    <div>datashow
    
     {/* {
        state.todo.map((e)=>(
            <li>{e.title}</li>

        ))   
    } */}

    <button onClick={(e)=>Dispatch(fetchTodos())}>click</button>   
    
    </div>
  )
}

export default datashow