// Express 기본 모듈 불러오기
var express = require('express');
var http = require('http');

// 익스프레스 객체 생성
var app = express();

// 미들웨어에서 응답 전송할 때 send 메소드 사용하여 JSON 데이터 전송
app.use(function(req, res, next) {
    console.log('첫번째 미들웨어에서 요청을 처리함.');
    var userAgent = req.header('User-Agent');
    var paramName = req.query.name;
    res.writeHead('200', {'Content-Type':'text/html; charset=utf8'});
    res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
    res.write('<div><p>User-Agent:'+userAgent+'</p></div>');
    res.write('<div><p>Param-Agent:'+paramName+'</p></div>');
    res.end();
});

// 기본 포트를 app 객체에 속성으로 결정
app.set('port', process.env.PORT || 3000);

// Express 서버 시작
http.createServer(app).listen(app.get('port'), function(){
    console.log('익스프레스 서버를 시작했습니다. : '+app.get('port'));
});

// http://localhost:3000/?name=sunny