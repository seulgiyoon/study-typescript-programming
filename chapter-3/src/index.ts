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

// p.29 객체
let a: object = { b: 'x' };
// a.b -> Error : Property 'b' does not exist on type 'object'

// p.30 let과 const로 변수를 선언했을 때 달라지는 타입 추론
let notTypeLiteral = 'hello'; // let notTypeLiteral: string -> let으로 선언한 변수는 다른 값을 할당할 것이라 예상할 수 있다.
const typeLiteral = 'hello'; // const typeLiteral: "hello" -> const로 선언한 변수는 다른 값을 할당할 수 없기에 타입 리터럴로 추론한다.
let b = { c: 'x' };
const c = { d: 'x' };
// const c: { d: string; } -> 하지만 객체의 경우 const로 선언하더라도 타입스크립트는 '자바스크립트의 객체는 값이 바뀔 수 있다'는 점을 알고 타입 리터럴로 추론하지 않는다.

// p.32 객체의 선택형 프로퍼티를 타입스크립트에 알리기
let exampleObject: {
  one: number; // number 타입의 one을 항상 포함한다.
  two?: string; // string 타입의 two를 포함 할 수도, 아닐수도 있다.
  [key: number]: boolean; // boolean 타입의 값을 가지는 number 타입의 키를 다수 포함할 수 있다.
};
exampleObject = { one: 4, 11: true };

// p.36 타입 별칭
type Age = number;
const age: Age = 30;

// p.38 '|' 연산자
type apple = { seed: boolean; fruit: boolean };
type ball = { round: boolean };
type appleOrBall = apple | ball;
// apple 타입, ball 타입 혹은 둘 다를 할당할 수 있다.
const mixedThing: appleOrBall = { seed: false, fruit: true, round: false };

// p.42 튜플
let tupleA: [string] = ['hello'];
// let tupleAError: [string] = ['hello', 'world'];
let tupleB: [number, ...string[]] = [2020, 'hello', 'world', 'hey', 'ho'];
let tupleC: [number, boolean?] = [2020];
let tupleD: [number, boolean?] = [2020, true];

// p.43 읽기전용 배열
let readonlyA: readonly number[] = [1, 2, 3];
// readonlyA.push(4); // Property 'push' does not exist on type 'readonly number[]'.
readonlyA.slice(-1);

// p.47 열거형 enum
// 타입스크립트가 값을 추론하는 경우
const enum Fruit {
  Apple, // Fruit.Apple = 0
  Orange, // Fruit.Orange = 1
  Banana, // Fruit.Banana = 2
}

const redFruit = Fruit.Apple;
// const orangeFruit = Fruit[1]; // A const enum member can only be accessed using a string literal.

// p.52 연습문제
let f = [1, false]; // (number | boolean)[]
let h = null; // any
