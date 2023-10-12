// type capitalized = Capitalize<'hello world'>; // expected to be 'Hello world'
//
// type CapitalizedChars = {
//   f: 'F';
// };
//
// type MyCapitalize<S> = S extends `${infer C}${infer T}`
//   ? `${C extends keyof CapitalizedChars ? CapitalizedChars[C] : C}${T}`
//   : S;
//
// type myCapitalized = MyCapitalize<'foo bar'>;
// const str: myCapitalized = 'Foo bar';
