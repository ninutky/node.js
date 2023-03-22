// 노드 서버 만들기

const http = require('http');

http.createServer((req,res)=>{
    res.write("<h1> Hello World! </h1>")
    res.end("<p>반가워요</p>");

}).listen(8088,()=>{
    console.log("8888번 포트에서 서버가 대기 중입니다.");
})