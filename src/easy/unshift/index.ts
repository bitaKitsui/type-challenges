// type Unshift<T extends unknown[], U> = [U, ...T];
//
// type Result = Unshift<[1, 2], 0> // [0, 1, 2,]
// type Bar = Unshift<['foo', 'bar'], false>
//
// const foo: Result = [0, 1, 2]
// const bar: Bar = [false, 'foo', 'bar']
