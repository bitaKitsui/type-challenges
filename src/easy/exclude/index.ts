// type MyExclude<T, U> = T extends U ? never : T;
//
// type Result = MyExclude<'a' | 'b' | 'c', 'a'>; // 'b' | 'c'
//
// const result1: Result = 'b';
// const result2: Result = 'c';
//
// type Foo = MyExclude<'1' | '2', '3'>;
//
// const result3: Foo = '2';
