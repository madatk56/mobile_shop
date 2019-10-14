const express = require('express');
app = express();
const port = process.env.port || 3000;
app.get('/',(req,res)=>{
    res.send('helloworld')
});
app.listen(port,()=>{
    console.log('server running in port 3000');
});