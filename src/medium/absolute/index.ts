// type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer N}`
//   ? N
//   : `${T}`;
//
// type Test = -100;
// type Result = Absolute<Test>; // expected to be "100"
//
// const result: Result = '100';
