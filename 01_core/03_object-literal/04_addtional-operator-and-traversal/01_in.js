/**
 * in 연산자는 존재 여부를 확인하는 연산자
 * SQL 에서 썼던 것과 동일한 기능
 */

var student = {
    name : '정근희',
    age : 20
};

console.log('name' in student);
console.log('abc' in student);