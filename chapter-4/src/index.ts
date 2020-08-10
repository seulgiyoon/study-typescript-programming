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
