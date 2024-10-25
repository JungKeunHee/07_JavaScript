/*
    배열의 고차함수 예제
*/

// 생성자 함수를 통해 여러 명의 회원 생성
function Student(name, age, score) {
  this.name = name;
  this.age = age;
  this.score = score;
  this.getInfo = () => {
    return `${this.name} 님의 성적은 ${this.score} 입니다.`;
  };
}

// 5명의 회원을 생성 후 ohgiraffers 배열에 담기
const member1 = new Student("조평훈", 20, 100);
const member2 = new Student("조평평", 21, 89);
const member3 = new Student("조평순", 15, 75);
const member4 = new Student("조팽팽", 24, 100);
const member5 = new Student("조핑구", 45, 49);

const ohgiraffers = [member1, member2, member3, member4, member5];

console.log(ohgiraffers);

// 만들어진 ohgiraffers 배열을 활용해서 고차함수 연습

// 모든 문제의 출력 구문은 getInfo() 를 사용해서 출력한다.

console.log("===================================");

const scoreSortMembers = ohgiraffers.sort((a, b) => b.score - a.score);
scoreSortMembers.forEach((scoreSortMembers) => {
  console.log(scoreSortMembers.getInfo());
});

console.log("===================================");

// ohgiraffers 배열을 나이 역순으로 정렬

ohgiraffers.sort((a, b) => b.age - a.age);
ohgiraffers.forEach((ohgiraffers) => {
  console.log(`${ohgiraffers.name} 의 나이는 ${ohgiraffers.age} 입니다`);
});

console.log("===================================");

// ohgiraffers 배열을 이름 순으로 정렬

ohgiraffers.sort((a, b) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  if (a.name == b.name) return 0;
});

ohgiraffers.forEach((ohgiraffers) => {
  console.log(ohgiraffers.name);
});

console.log("===================================");
// ohgiraffers 배열을 활용해서 성적이 50 이상인
// 사람만 출력하는 구문을 작성해보자

const passingMembers = ohgiraffers.filter((member) => member.score >= 50);

passingMembers.forEach((member) => {
  console.log(member.getInfo());
});

console.log("===================================");

// ohgiraffers 배열을 활용해서 성적이 70 ~ 90 이상인
// 사람만 출력하는 구문을 작성해보자

const passingMembers2 = ohgiraffers.filter(
  (member) => member.score >= 50 && member.score <= 90
);

passingMembers2.forEach((member) => {
  console.log(member.getInfo());
});

console.log("===================================");

// ohgiraffers 배열을 활용해서 성적이 동일한 사람을
// 출력하는 구문을 작성해보자

function findEqualScoreMembers(ohgiraffersArray) {
  return ohgiraffersArray.filter((member) => {
    return ohgiraffersArray.some(
      (otherMembers) =>
        otherMembers !== member && otherMembers.score === member.score
    );
  });
}

const equalScoreMembers = findEqualScoreMembers(ohgiraffers);

equalScoreMembers.forEach((members) => {
  console.log(members.getInfo());
});

console.log("===================================");

// ohgiraffers 배열을 활용해서 조평훈 이라는 학생의
// 성적 정보를 변경해보자

function updateScore(ohgiraffersArray, newScore) {
  return ohgiraffersArray.map((member) => {
    if (member.name === "조평훈") {
      return {
        ...member,
        score: newScore,
        getInfo: function () {
          return `${this.name} 님의 성적은 ${this.score} 입니다`;
        },
      };
    }
    return member;
  });
}

const updateMember = updateScore(ohgiraffers, 95);

updateMember.forEach((member) => {
  console.log(member.getInfo());
});

console.log("===================================");

// ohgiraffers 배열을 활용해서 조평훈 이라는 학생의
// 몸무게 정보를 추가해보자. weight -> 80 으로 추가

function addWeigth(ohgiraffersArray, weight) {
  return ohgiraffersArray.map((member) => {
    if (member.name === "조평훈") {
      return { ...member, weight: weight };
    }
    return member;
  });
}

const addWeightMember = addWeigth(ohgiraffers, 80);

console.log(addWeightMember);
