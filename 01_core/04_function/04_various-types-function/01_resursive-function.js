/**
 * 재귀함수
 * - 함수가 자기 자신을 호출하는 것을 재귀 호출 이라고 한다.
 * - 사용하는 예시는 반복적인 일을 수행해야 할 때 사용하게 된다.
 * - n! 팩토리얼
 * - 6! = 1 * 2 * 3 * 4 * 5 * 6
 */

function factorial(n){
    if(n <= 1) return 1

    return n * factorial(n - 1)
};


/**
 * 재귀함수는 반복문을 사용하지 않고 반복해야할 일을 처리할 수 있따.
 * 조건식을 잘 구성하지 않으면 무한루프 -> stackoverflow 가 발생한다.
 * 따라서 재귀함수 는 반복문 보다 직관적으로 이해하기 쉬울 때만
 * 한정적으로 사용하는 것이 바람직하다.
*/

console.log(factorial(6));