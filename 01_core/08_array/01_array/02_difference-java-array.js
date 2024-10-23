/**
 * 자바에서의 배열은 각 요소가 동일한 데이터 크기를 가짐
 * 연속적으로 이어져 인덱스를 동해 요소에 접근할 수 있다.
 * -
 * 자바스크립트에서 배열은 일반적인 배열을 흉내 낸
 * 특수한 객체로서 각각의 메모리 공간이 동일한 크기를 갖지 않아도 되며
 * (다른 자료형 저장 가능)
 * 연속적으로 이어지지 않아도 된다.
 */

// 가져와라 나의 프로퍼티 그리고 설명해라
// writable : true 이면 값을 수정할 수 있다 false 이면 읽기만 가능
// enumerable : true 이면 반복문을 통해 나열 가능, false 면 불가능
// configurable : true 이면 프로퍼티 삭제 or 수정 가능
console.log(Object.getOwnPropertyDescriptors([1, 2, 3]));

// 자바스크립트에서 모든 값은 배열의 요소가 될 수 있다.
const arr = [
  "정근희",
  20,
  true,
  null,
  undefined,
  NaN,
  Infinity,
  -Infinity,
  [],
  {},
  function () {},
];

console.table(arr);
