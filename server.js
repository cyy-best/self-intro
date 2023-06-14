const express = require('express');

const app = express();


//静态资源中间件
app.use(express.static(__dirname + '/assets'));

// app.get('/home', (req, res) => {
//     // res.write('writeeeeee');
//     res.end('enddddd');
//     // res.send('senddddddd');
    
// })

app.listen('3000', () => {
    console.log('listening');
})