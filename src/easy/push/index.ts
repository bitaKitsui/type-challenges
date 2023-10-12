// type Push<T extends unknown[], U> = [...T, U];
//
// type Result = Push<[1, 2], '3'>; // [1, 2, '3']
// type Bar = Push<['foo', 'bar'], false>;
//
// const foo: Result = [1, 2, '3'];
// const bar: Bar = ['foo', 'bar', false];
