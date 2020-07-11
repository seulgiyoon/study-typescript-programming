// p.23 unknown type
let unknownA: unknown = 30;
let booleanB = unknownA === 30;
// let errorC = unknownA + 10; -> 에러 발생
let unknownArray: unknown = [1, 2, 3];
// unknownArray[0]; -> 에러 발생

// p.24 boolean type
// 명시적으로 boolean의 true타입임을(혹은 false타입임을)알리거나 추론하게 할 수 있다.
// 이를 '오직 하나의 값을 나타내는 타입', '타입 리터럴'이라고 부른다.
let trueA: true = true;
const trueB = true;
