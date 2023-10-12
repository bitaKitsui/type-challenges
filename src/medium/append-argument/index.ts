// type AppendArgument<Fn, A> = Fn extends (...args: infer P) => infer R
//   ? (...args: [...P, A]) => R
//   : never;
//
// type Fn = (a: number, b: string) => number;
//
// type Result = AppendArgument<Fn, boolean>;
// // expected be (a: number, b: string, x: boolean) => number
//
// const result: Result = () => 5;
//
// result(4, '3', false);
