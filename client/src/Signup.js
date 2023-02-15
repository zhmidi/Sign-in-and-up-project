import axios from "axios";
import React, { useState } from "react";



const Signup = () => {

    const [newUser, setNewUser] = useState({Nom: '', Prenom : '' ,Email : '', Password : ''});

    const addUser = () =>
    axios.post("http://localhost:9000/AddUser", newUser)
    .then(res => setNewUser(res.data))
    .catch(err => console.log(err))

    return (
        <div className="registre">
            
            <h1>Sign Up</h1>
            <input type="text" placeholder="Nom" onChange={(e)=> setNewUser({...newUser, Nom : e.target.value})} />
            <input type="text" placeholder="Prenom" onChange={(e)=> setNewUser({...newUser, Prenom : e.target.value})} />
            <input type="text" placeholder="Email" onChange={(e)=> setNewUser({...newUser, Email: e.target.value})}/>
            <input type="Password" placeholder="Password" onChange={(e)=> setNewUser({...newUser, Password : e.target.value})} />
            <button onClick={()=>addUser()}>Sign Up</button>

        </div>
    )
}

export default Signup
