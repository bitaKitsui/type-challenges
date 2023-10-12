// const fn1 = (v: boolean): number => {
//   if (v) return 1;
//   else return 2;
// };
//
// const fn2 = (v1: string, v2: string): string => {
//   return v1 + v2;
// };
//
// type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
//
// type A = MyReturnType<typeof fn1>; // should be "1 | 2"
// type B = MyReturnType<typeof fn2>;
//
// const a: A = 3;
// const b: B = 2;
