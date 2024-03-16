import express from 'express';
import { getUser,getUsers,createUser } from './database.js';


const app = express();
app.use(express.json);

app.get("/users", async (req,res) => {
    const users = await getUsers()
    res.send(users)
})

app.get("/users/:id", async (req,res) => {
    const id = req.params.id
    const user = await getUser(id)
    res.status(201).send(user)
})

app.post("/users", async(req,res) => {
    const { firstname,lastname,email,phoneNo,userPassword } = req.body
    const user = await createUser(firstname,lastname,email,phoneNo,userPassword)
    res.send(user)
})


app.use((err,req,res,next) => {
    console.log(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(3000, () =>{
    console.log("Server is running on port 3000")
})