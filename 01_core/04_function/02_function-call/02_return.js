function hello(name){

    return `${name} 헬로우~~`
    //자바와 마찬가지로 return 은 가장 마지막 줄이 있어야 한다.
    // 하지만 자바스크립트는 error 가 아닌 무시를 하게 된다. 
};

console.log(hello('정근희'));

function fuc(){
    console.log('합수 호출됨...')

    // 반환 값을 명시적으로 지정하지 않으면 undefined 가 된다.
    // 생략을 하더라도 undefined 이다.
    return
};

console.log(fuc());