/**
 * for in 반복문
 * 객체의 모든 키를 순회할 수 있다.
 */

var panda = {
    name : '푸바오',
    age : 4,
    getInfo : function(){
        return `${this.name}는 ${this.age}살 입니다`
    }
};

for(var key in panda){
    console.log(`key = ${key}`);
    console.log(`panda[key] = ${panda[key]}`) // 키의 해당하는 value
};