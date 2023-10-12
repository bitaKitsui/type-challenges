// type ArrayType = Array<string | number | symbol>;
//
// type Concat<T extends ArrayType, U extends ArrayType> = [...T, ...U];
//
// type Result = Concat<[1], [2]>; // expected to be [1, 2]
// type Result2 = Concat<['foo'], ['bar']>;
//
// const foo: Result = [1, 2];
// const bar: Result2 = ['foo', 'bar'];
