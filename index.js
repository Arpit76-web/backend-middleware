const express = require("express");
const app = express();
const port = 3000;


//loading middleware into app
//build in middleware
app.use(express.json());  


const route = require("./routes/routes");
//mouting the routes
app.use("/api", route);

app.get("/", (req,res)=>{
    console.log("main route handler hu");
    console.log(req.body);
    res.send("hello world my name is arpit singh");
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})  