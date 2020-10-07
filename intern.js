//
const express=require("express");


const bodyParser=require("body-parser");//
const app =express();
app.use(bodyParser.urlencoded({extended: true}));//code needed to write bodyparser-allows u to use routes
app.use("/css",express.static(__dirname +"/css"));//to add css to html file
app.get("/",function(req,res){
  res.sendFile(__dirname +"/index.html");

});
app.listen(2700);//to set server on 2700 port
