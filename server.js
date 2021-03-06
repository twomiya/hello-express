var express = require('express');
var bodyParser = require('body-parser')

var app = express();
// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
// app.use(bodyParser.json())
// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })



//1、请求与响应
// app.get('/',function(req,res){
//     var resObject = {'name':'bb','age':17}
//     res.send(resObject)
// })

//2、1路由参数动态
app.get('/article/:id',function(req,res){
    console.dir(req.params)
    res.send('You requested to see a article page with id of '+req.params.id)
})

//2、2正则匹配
app.get('/ab?cd',function(req,res){
    res.send('abcd')
})

//3、查询字符串
//aa 自定义：http://localhost:5000/?aa=bb
app.get('/',function(req,res){
    console.dir(req.query)
    res.send('home page: '+ req.query.aa)
})

//4、POST 请求和Postman工具
//发送text
app.post('/',urlencodedParser,function(req,res){
    console.dir(req.body)
    // res.send('ok')
    res.send(req.body.name)
})

//发送json
app.post('/upload',jsonParser,function(req,res){
    console.dir(req.body)
    res.send(req.body.name)
})


app.listen(5000)
console.log('listening to port 5000')