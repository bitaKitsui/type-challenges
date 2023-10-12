// type Replace<S, From extends string, To extends string> = From extends ''
//   ? S
//   : S extends `${infer L}${From}${infer R}`
//   ? `${L}${To}${R}`
//   : S;
//
// type replaced = Replace<'types are fun!', 'fun', 'awesome'>; // expected to be 'types are awesome!'
//
// const str: replaced = 'types are awesome!';
