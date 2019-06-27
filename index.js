const express = require("express");
require("./mongoose-demo");
const NewUser = require("./src/model/user.model");
const app = express();
const path = require("path");

const port = process.env.PORT || 3030;

app.use(express.static(__dirname + "/public"));

app.use(express.json());
console.log();

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "/public/index.html"));
})

app.get("/users", (req, res)=>{
    NewUser.find({}).then(resp => {
        res.status(200).send(resp)
    }).catch(err => console.log(err));
})

app.get("/users/:id", (req, res)=>{
    const _id = req.params.id;
    NewUser.findById(_id)
        .then(resp => {
            if(!resp){
                return res.status(404).send("NOT FOUND")
            }
            return res.status(200).send(resp);
        })
})

app.post("/users", (req, res)=>{
    console.log(req.body);
    const foo = new NewUser(req.body)
        foo.save().then(resp => {
            res.status(201).send(resp);
        })    
})

app.patch("/users/:id", (req, res)=>{
    const _id = req.params.id;
    const name = req.body.name;
    NewUser.findByIdAndUpdate(_id, {name})
        .then(resp => {
            return res.status(201).send(resp)
        }).catch(err => {
            return res.status(501).send(err)
        })
})

app.delete("/users", (req, res)=>{})

app.listen(port, () => {console.log("Server started")})