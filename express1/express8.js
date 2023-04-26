// static 미들웨어
// 이미지파일, 자바스크립트파일,  css파일 등

const express = require('express');

const app = express();
app.use(express.static(__dirname+'/public'));

app.use(function(req, res){
    res.writeHead(200,{'Context-Type':'text/html'});
    res.end("<img src='/fkaus.png' width='100%'>");
});
app.listen(8889,function(){
    console.log("8889 포트입니다.");
});