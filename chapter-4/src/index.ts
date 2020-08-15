// p.60 안전하지 않은 arguments
function getArguments() {
  return Array.from(arguments).reduce((total, n) => total + n, 0);
}
// total과 n은 모두 any로 추론된다.
// getArguments(1,2,3); // 에러 : Expected 0 arguments, but got 3

// p.60 안전한 rest parameter
function useRestParameter(...args: number[]): number {
  return Array.from(args).reduce((total, n) => total + n, 0);
}
useRestParameter(1, 2, 3);

// p.63 this 한정하기
function formDate(this: Date) {
  return `${this.getDate()} / ${this.getMonth()}`;
}

// formDate(); // The 'this' context of type 'void' is not assignable to method's 'this' of type 'Date'.
formDate.call(new Date());

// p.71 문맥적 타입화
function times(f: (index: number) => void, n: number) {
  for (let i = 0; i < n; i++) {
    f(i);
  }
}
times((n) => console.log(`${n}!`), 4);
// 인라인으로 함수를 제공하면 전달하는 함수의 타입을 명시할 필요가 없다.

// function callback(n) {
//   console.log(`${n}!`);
// };
// Error: Parameter 'n' implicitly has an 'any' type.

// times(callback, 4);
// 인라인으로 제공하지 않을 시 타입스크립트는 타입을 추론할 수 없다.

// p.73 오버로드된 함수
type Reservation = string;
// 오버로드된 함수 시그니쳐 두개를 선언
type Reserve = {
  (from: Date, to: Date, destination: string): Reservation;
  (from: Date, destination: string): Reservation;
};
// Error: Type '(from: any, to: any, destination: any) => string' is not assignable to type 'Reserve'.
// const reserveError: Reserve = (from, to, destination) => {
//   return 'reserved';
// };

// 여러가지 방식으로 함수를 호출할 수 있을 땐, 구체적으로 함수의 호출 방법을 알린다.
const reserveNoError: Reserve = (from: Date, toOrDestination: Date | string, destination?: string) => {
  if (typeof toOrDestination === 'string') {
    return '편도여행';
  } else if (toOrDestination instanceof Date && destination !== undefined) {
    return '왕복여행';
  } else {
    return '가상여행';
  }
};

// p.76 타입을 구체적으로 명시하기
function getMonth1(date: any) {
  return date.getDate(); // 자동완성 기능을 사용하려면 타입스크립트에게 date가 날짜 객체임을 알려야한다.
}

// if문 등으로 타입을 알린 경우
function getMonth2(date: any): number | undefined {
  if (date instanceof Date) {
    return date.getDate(); // 자동완성 기능이 작동한다.
  }
}
// 매개변수의 타입을 명시한 경우
function getMonth3(date: Date): number {
  return date.getMonth(); // 자동완성 기능이 작동한다.
}
