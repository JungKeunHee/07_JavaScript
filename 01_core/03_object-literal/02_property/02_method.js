/**
 * 자바스크립트에서 함수는 원시타입이 아니기 때문에
 * 객체 이다. 함수는 프로퍼티 값으로 사용할 수 있다.
 */

var panda = {
    name : '푸바오',
    // 객체 내에 프로퍼티로 가지고 있는 함수를 메소드라고 한다.
    eat : function(food){
        // this 는 panda 가르킨다. 자바에서 this 와 동일
        console.log(`${this.name} 는 ${food}을(를) 맛있게 먹어요`)
    }
};

panda.eat('죽순');