// type TrimLeft<S> = S extends `${' ' | '\n' | '\t'}${infer T}` ? TrimLeft<T> : S;
//
// type trimed = TrimLeft<'  Hello World  '>; // expected to be 'Hello World  '
// const str: trimed = 'Hello World  ';
