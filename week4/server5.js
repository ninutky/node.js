const http = require('http');
const fs = require('fs').promises;

const path = require('path');
const url = require('url');

const server = http.createServer(async (req, res)=> {
    try {
        console.log("URL부분 : ", req.url);

        if(req.url == '/favicon.ico') {
            res.writeHead(404);
            res.end();
        }

        // 지정된 폴더의 파일 리스트를 읽어와 본문안에 넣기
        const menuFolder = path.join(__dirname,'./textFile');
        console.log("내가 읽고 싶은 폴더 : ", menuFolder);
        const fileList = fs.readdir(menuFolder);    // readdir을 활용해서 해당 폴더의 내용을 가져옴. 프로미스 형태 (프로미스가 아니라면 콜백함수 쓰면 됨)
        // 요소 만들기
        let fileListText = '<ul>'
        await fileList.then((file_list)=>{
            let ii = 0;
            console.log("fileList", file_list)
            while (ii < file_list.length) {
                let dataData = file_list[ii].replace("menu_","").replace(".txt","");
                fileListText += `<li><a href="/?date=${dataData}>${dataData}</li>`
                ii+=1;
            }
        });
        console.log("log",fileListText);
        fileListText += '</ul>'

        const template = `
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <title>급식 메뉴</title>
                </head>
                <body>
                    <h1><a href="/">급식 메뉴</a></h1>
                    ${fileListText}
                </body>
            </html>
        `

        res.writeHead(200, {'Content-type':'text/html; charset=utf-8'});
        res.end("성공");

        
    } catch(err) {
        console.err(err)
        res.writeHead(500, {'Content-type':'text/plain; charset=utf-8'});
        res.end(err,messsge);
    }
});

server.listen(8089);
server.on('listening',()=>{
    console.log("8089번 포트에서 서버 대기중입니다.");
});