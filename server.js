var express = require('express');
var app = express();
app.get('/',function(req,res){
    var resObject = {'name':'bb','age':17}
    res.send(resObject)
})
app.listen(5000)
console.log('listening to port 5000')