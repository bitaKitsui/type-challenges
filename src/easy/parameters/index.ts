// const foo = (arg1: string, arg2: number): void => {};
// const bar = (arg1: boolean, arg2: string, arg3: unknown): void => {};
// const baz = (): void => {}
//
// type MyParameters<T> = T extends (...args: infer P) => any ? P : never;
//
// type FunctionParamsType = MyParameters<typeof foo>; // [arg1: string, arg2: number]
// type BarParamsType = MyParameters<typeof bar>;
// type BazParamsType = MyParameters<typeof baz>
//
// const fooResult: FunctionParamsType = ['string', 0];
// const barResult: BarParamsType = [true, 'string', undefined];
// const bazResult: BazParamsType = []
