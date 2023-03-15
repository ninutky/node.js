const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);     //42
console.log(obj.result);    // true

console.log(JSON.stringify({ x: 5, y: 6}));     // "{"x":5,"y":6}"