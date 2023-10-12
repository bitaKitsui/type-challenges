// type LookUp<U, T> = U extends { type: T } ? U : never;
//
// type Cat = {
//   type: 'cat';
//   breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal';
// };
//
// type Dog = {
//   type: 'dog';
//   breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer';
//   color: 'brown' | 'white' | 'black';
// };
//
// type MyDogType = LookUp<Cat | Dog, 'dog'>; // expected to be `Dog`
// const myDog: MyDogType = {
//   type: 'dog',
//   breeds: 'Hound',
//   color: 'brown',
// };
