function Student(name, age) {
  // 1. this
  console.log(this);
  this.name = name;
  this.age = age;
  this.getInfo = () => `${this.name}(은)는 ${this.age}세 입니다.`;
}

const student = new Student("정근희", 20);
console.log(student.getInfo());
