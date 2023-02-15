import React from 'react'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'




export const  addTask=createAsyncThunk('task/addTask', async (data)=>{

    return axios.post("http://localhost:9000/addTask", data)
    .then(res =>  res.data)
    .catch(err => console.log(err))

    })

    export const  ListTask = createAsyncThunk('task/ListTask', async (data)=>{

        return axios.get(`http://localhost:9000/ListTask/user/${data}`)
        .then(res =>  res.data)
        .catch(err => console.log(err))
    })

const TaskSlice = createSlice({
    name : "task",
    initialState : {
        List : [],
        status : "",
        error : ""

    },

            extraReducers : {
                [addTask.fulfilled] : (state,action)=>{
                
                    state.status = "Success"
                },
                [addTask.rejected] : (state, action)=>{
                  state.Erreur = action.payload
                  state.status = "Rejected"
                },
                [addTask.pending] : (state)=>{
                    state.status = "Pending"
                },
                [ListTask.fulfilled] : (state,action)=>{
                
                    state.status = "Success"
                },
                [ListTask.rejected] : (state, action)=>{
                  state.Erreur = action.payload
                  state.status = "Rejected"
                },
                [ListTask.pending] : (state)=>{
                    state.status = "Pending"
                }
            },

        
            })
        







export default TaskSlice.reducer