## express
* 请求与响应

    ```
    app.get('/',function(req,res){
        var resObject = {'name':'bb','age':17}
        res.send(resObject)
    })
    ```
* 路由

    ```
    //2、1路由参数动态
    app.get('/article/:id',function(req,res){
        console.log(req.params)
        res.send('You requested to see a article page with id of '+req.params.id)
    })

    //2、2正则匹配
    app.get('/ab?cd',function(req,res){
        res.send('abcd')
    })
    ```
* 查询字符串

    ```
    //3、查询字符串
    //aa 自定义：http://localhost:5000/?aa=bb
    app.get('/',function(req,res){
        console.log(req.query)
        res.send('home page: '+ req.query.aa)
    })
    ```
* POST 请求和Postman工具
    * 安装 [body-parser](https://github.com/expressjs/body-parser)  `npm install body-parser --save`
    * 