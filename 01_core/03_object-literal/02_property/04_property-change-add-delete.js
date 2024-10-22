/**
 * 프로퍼티의 값 변경, 추가, 삭제
 */

var panda = {
    name : '푸바오'
}

// 이미 존재하는 프로퍼티에 값을 할당하면 프로퍼티 값이 갱신된다.
panda.name = '아이바오';
console.log(panda);

// 프로퍼티 동적으로 추가하기
// 존재하지 않는 프로퍼티에 값을 할당하게 되면
// 프로퍼티가 동적으로 생성 되어 추가가 된다.
panda.age = 7;
console.log(panda);

// 프로퍼티 삭제
// delete 연산자를 사용해서 삭제할 수 있다.
delete panda.age;
console.log(panda);