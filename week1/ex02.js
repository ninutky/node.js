// var: 전역
// let, const: 블럭
function scopeTest(someVal) {
    // 정의되지 않은 변수 typeof
    console.log("1 :", typeof test_none);
    // 함수범위 테스트 (곧 블럭안에서 정의될 변수)
    console.log("2-1 : ", typeof test_in_var);  // => undefined
    console.log("2-2 : ", typeof test_in_let);  // => undefined
    if(someVal) {
        // 블럭 단위 함수 테스트
        console.log("3-1 : ", typeof test_in_var);  // => undefined
        // var의 경우에는 호이스팅 될 때, 값이 undefined로 초기화 된다.
        console.log("3-2 : ", typeof test_in_let);  // throws 'ReferenceError'
        // let이나 const의 경우에는 일시적 사각지대(TDZ : Temporal Dead Zone)에 놓여진다.
        var test_in_var;
        let test_in_let;
        console.log("3-3 : ", typeof test_in_let);  // => undefined
    }
}
scopeTest(true);