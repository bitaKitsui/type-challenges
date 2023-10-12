// type StringToUnion<T extends string> = T extends `${infer C}${infer T}`
//   ? C | StringToUnion<T>
//   : never;
//
// type Test = '123';
// type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"
//
// const result: Result = '1'
// const foo: Result = 'foo'
