const Express = require('express');
const app = new Express();
//默认路由
app.get('/',(req,res)=>{
    res.send('Hello World');
})

//如果在本地是开发环境就是500
const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log('Server 运行在port ${port}');
})