//  write a basic express boilerplate
// with express.json() middleware
const Express =require("express");
const {updatetodo,createtodo}=require("./types")
const app=Express();
app.use(Express.json());

app.post("/todo",(req,res)=>{


})


app.get("/todos",(req,res)=>{
    

})
app.put("/completed",(req,res)=>{

})