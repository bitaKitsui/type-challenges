// type ExampleType = Promise<string>;
//
// type MyAwaited<T> = T extends Promise<infer R> ? MyAwaited<R> : T;
//
// type Result = MyAwaited<ExampleType> // string
// type Result2 = MyAwaited<Promise<ExampleType>>
// type Result3 = MyAwaited<boolean | Promise<number>>
//
// const foo: Result = 'string'
// const bar: Result2 = 'string'
// const baz: Result3 = 3
