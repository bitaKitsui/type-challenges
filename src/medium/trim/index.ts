// type Trim<S> = S extends `${' ' | '\n' | '\t'}${infer T}${' ' | '\n' | '\t'}`
//   ? Trim<T>
//   : S;
//
// type trimmed = Trim<'  Hello World  '>; // expected to be 'Hello World'
//
// const str: trimmed = 'Hello World';
