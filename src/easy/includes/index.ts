// type Includes<T extends readonly unknown[], U> = U extends T[number]
//   ? true
//   : false;
//
// type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
// type Bar = Includes<[1, 2, 3, 4], 4>
// type Baz = Includes<['foo', 2, true], true>
//
// const foo: isPillarMen = false
// const bar: Bar = true
// const baz: Baz = true
