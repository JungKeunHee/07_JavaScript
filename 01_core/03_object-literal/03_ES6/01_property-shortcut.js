var name = '갤럭시 폴드 6';
var price = 20000;

var product = {
    name : name,
    price : price
}

console.log(product);

// ES6 에서는 프로퍼티 값으로 변수를 사용하는 경우
// 변수 이름과 프로퍼티 키가 동일한 경우 프로퍼티 키를 생략할 수 잇게
// 된다. 프로퍼티 키는 변수 이름으로 자동 생성이 된다

var product2 = {name, price};
console.log(product2);
