/**
 * 생성자 함수
 */

// 객체 리터럴에 의한 객체 생성 과 비교
const student1 = {
  name: "정근희1",
  age: 20,
  getInfo: function () {
    return `${this.name}(은)는 ${this.age} 세 입니다.`;
  },
};

const student2 = {
  name: "정근희2",
  age: 30,
  getInfo: function () {
    return `${this.name}(은)는 ${this.age} 세 입니다.`;
  },
};

const student3 = {
  name: "정근희3",
  age: 15,
  getInfo: function () {
    return `${this.name}(은)는 ${this.age} 세 입니다.`;
  },
};

/**
 * 객체 리터럴로 객체를 만들 경우 생기는 문제점.
 * 만약 수십명의 학생 객체를 만들어야 한다면?
 * 객체 리터럴로 객체를 생성하면 직관적이고 간편하긴 하지만
 * 단 하나의 객체만을 생성한다는 단점이 존재한다.
 */

/**
 * 생성자 함수에 의한 객체 생성
 * 프로퍼티 구조가 동일한 객체를 여러 개 만들 때 간편하게 생성 가능
 */

function Student(name, age) {
  this.name = name;
  this.age = age;
  this.getInfo = function () {
    return `${this.name}(은)는 ${this.age}세 입니다.`;
  };
}

// 생성자 함수를 사용해서 객체 생성하기
const student4 = new Student("정근희4", 24);
const student5 = new Student("정근희5", 20);

console.log(student4.getInfo());
