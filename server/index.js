const express = require("express")
const cors = require("cors")
const UserModule = require("./Modules/User") 
const mongoose = require ("mongoose")
const TaskModule = require("./Modules/Task")
    
const app = express()
app.use(express.json())

app.use(cors())

mongoose.connect("mongodb://127.0.0.1/todo")

app.listen(9000, ()=> console.log("server running on port 9000..."))



app.post("/AddUser", async (req,res)=>{

    const user = req.body
    console.log(user);
try{
    const results = await UserModule.findOne({Email :user.Email})
    if(results){
            res.send("Cet utilisateur existe deja")
    }else{
        const newuser = new UserModule(user)
        const element = await newuser.save()
        res.send("Added")
    }
}catch(err){console.log(err)}
})

app.post("/ConnectUser", async (req,res)=>{

    const user = req.body
    console.log(user);
    try{
        const results = await UserModule.findOne({Email :user.Email, Password :user.Password})
        if(results){
                res.send(results)
        }else{
          res.send("cet utilisateur n'existe pas")
        }
    }catch(err){console.log(err)}
})

//Task

app.post('/addTask', async(req, res)=>{

    const Task =req.body
    try{
        const newTask = new TaskModule(Task)
        console.log(Task.user, Task.rating)
        const element = await newTask.save()
        res.send('task added')
        
    }catch(err){console.log(err)}
})

app.get("/ListTask/user/:iduser", async (req,res)=>{

    const id = req.params.iduser

    const test = await UserModule.findOne({_id : id})

    if(test){
        const result = await TaskModule.findOne({user : id})
        res.send(result)
    }else{
        res.send("user doesn t")
    }
})
