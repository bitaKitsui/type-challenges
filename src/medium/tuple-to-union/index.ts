// type TupleToUnion<T extends unknown[]> = T[number];
//
// type Arr = ['1', '2', '3'];
//
// type Test = TupleToUnion<Arr>; // expected to be '1' | '2' | '3'
//
// const a: Test = '1'
// const b: Test = '2'
// const c: Test = '3'
// const d: Test = '4' // Type '"4"' is not assignable to type '"1" | "2" | "3"'.
