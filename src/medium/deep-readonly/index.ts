// type X = {
//   x: {
//     a: 1;
//     b: 'hi';
//   };
//   y: 'hey';
// };
//
// type Primitive = number | string | boolean | bigint | symbol | undefined | null;
//
// type DeepReadonly<T> = T extends Primitive
//   ? {
//       readonly [Key in keyof T]: T[Key];
//     }
//   : { readonly [Key in keyof T]: DeepReadonly<T> };
//
// type Expected = {
//     readonly x: {
//         readonly a: 1
//         readonly b: 'hi'
//     }
//     readonly y: 'hey'
// }
//
// type Todo = DeepReadonly<X>; // should be same as `Expected`
//
