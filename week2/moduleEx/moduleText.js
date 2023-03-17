const text_odd = "홀";
const text_even = "짝";

console.log("1 : ", exports === module.exports)
console.log("2 : ", exports, module.exports)

module.exports = {
    text_odd,   // text_odd : text_odd
    text_even,
}

// 같은 코드
// exports.text_odd = text_odd;
// exports.text_even = text_even;

// 얜 안됨
// exports = {
//     text_odd,   // text_odd : text_odd
//     text_even,
// }