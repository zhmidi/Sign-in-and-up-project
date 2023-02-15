import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"




    export const  connectUser=createAsyncThunk('Users/connectUser', async (data)=>{

    return axios.post("http://localhost:9000/ConnectUser", data)
    .then(res =>  res.data)
    .catch(err => console.log(err))

    })

const CountSlice = createSlice({
    name : "Users",
    initialState : {
        user : {},
        error : "",
        status : ""
    },
    reducers : {
    
    },
    extraReducers : {
        [connectUser.fulfilled] : (state,action)=>{
            state.user = action.payload
            state.status = "Success"
        },
        [connectUser.rejected] : (state, action)=>{
          state.Erreur = action.payload
          state.status = "Rejected"
        },
        [connectUser.pending] : (state)=>{
            state.status = "Pending"
        }
    }

})

export default CountSlice.reducer