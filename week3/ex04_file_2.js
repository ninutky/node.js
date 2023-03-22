// 동기방식으로 바꾸기.

const fs = require('fs');

let readData = "읽어오지 못했습니다.";

let data = fs.readFileSync("./readText.txt");
console.log(data?.toString());
readData = data?.toString();

let data2 = fs.writeFileSync('./writeText.txt', ("읽어온 데이터2 : "+readData));
console.log("data2 : " + data2);    // undefined

let data3 = fs.readFileSync("./writeText.txt");
console.log(data3?.toString());
readData = data3?.toString();