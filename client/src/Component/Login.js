import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { connectUser } from "../Redux/Reducer";

const Login = () => {
    const Navigate = useNavigate()
    const Dispatch = useDispatch()

    const [connect, setConnect] = useState ({Email: '', Password: ''});
   
    const conUser =()=> {
       
        Dispatch(connectUser(connect)).then(res=> {
            console.log(res.payload)
            if(typeof res.payload === "object") {
                Navigate("/home")
            }

            
        })
    }
    
    return(
        <div className="cover">
            <input type="text" placeholder="Email" onChange={(e)=> setConnect({...connect, Email : e.target.value})} />
            <input type="password" placeholder="Password"  onChange={(e)=> setConnect({...connect, Password : e.target.value})}/>
            <button onClick={conUser}>Login</button>
            <h3><Link to ="/Signup">Sign Up</Link></h3>

        </div>

    )
}


export default Login 