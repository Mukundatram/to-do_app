//  write a basic express boilerplate
// with express.json() middleware
const Express =require("express");
const {updatetodo,createtodo}=require("./types")
const app=Express();
app.use(Express.json());

app.post("/todo",(req,res)=>{
const createpayload=req.body;
const parsedpayload=createtodo.safeParse(createpayload);
if(!parsedpayload.success){
res.status(400).json({
    msg:"you send the wrong inputs"
})
return;
}
})


app.get("/todos",(req,res)=>{
    

})
app.put("/completed",(req,res)=>{
const updatepayload=req.body;
const parsedpayload=updatetodo.safeParse(updatepayload)
if(!parsedpayload.success){
    res.status(400).json({
        msg:"you send the wrong inputs"
    })
return;
}
})