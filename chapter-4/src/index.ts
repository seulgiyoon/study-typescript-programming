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
