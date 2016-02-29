var dbHandle 	   = 		 require ('./database.js');
var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();

/* initialize Body parser for json and urlencoded */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

dbHandle.CreateDatabase();

app.get('/',function(req,res){
  res.sendfile("index.htm");
});
app.post('/create',function(req,res){
  
  console.log("req>>>>>>>>>..."+req);
  console.log("req>>>>>>>>>..."+res);
  var user_name=req.body;
  console.log("User name = "+user_name.user +", password is "+password);
  console.log("User Name = "+JSON.stringify(user_name));
  var password=req.body.password;
  dbHandle.InsertRows(user_name.user);
  //dbHandle.CloseDatabase();
  res.end('done');
});

app.post('/search',function(req,res){
  
  console.log("req>>>>>>>>>..."+req);
  console.log("req>>>>>>>>>..."+res);
  var user_name=req.body;
  console.log("User Name111 = "+JSON.stringify(user_name));
  dbHandle.GetAllDataFromDatabase();
  //console.log("User name = "+user_name+", password is "+password);
  res.end("done");
});
app.post('/delete',function(req,res){
  
  console.log("req>>>>>>>>>..."+req);
  console.log("req>>>>>>>>>..."+res);
  var user_name=req.body;
  console.log("User Name111 = "+JSON.stringify(user_name));
  //console.log("User name = "+user_name+", password is "+password);
  res.end("done");
});
app.listen(3000,function(){
  console.log("Started on PORT 3000");
})