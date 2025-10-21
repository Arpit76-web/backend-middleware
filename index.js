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
    res.send("hello world i am here");
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})  