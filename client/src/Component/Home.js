
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { ListTask } from "../Redux/ReducerTask"
import { addTask } from "../Redux/ReducerTask"
import { useState } from 'react'


const Home = () => {

  const Dispatch = useDispatch()
  const iduser = useSelector(state => state.iduser.user)
  const Tasks = useSelector(state => state.Tasks.list)

  const [add, setAdd] = useState ({title: '', description:'', posteUrl:''  ,rating:'', user: iduser._id });
  
  console.log(iduser)

  useEffect(()=> {
    Dispatch(ListTask(iduser._id))
  },[])
    
   
    return (
    <div className='App'>

      <h1>Home</h1>
      <input type="search" name="title" placeholder='addTask' onChange={(e)=> setAdd({...add, title : e.target.value})}  />
      
      <button onClick={() => {Dispatch(addTask(add))}}>Add</button>

      
      </div>
  )
}

export default Home