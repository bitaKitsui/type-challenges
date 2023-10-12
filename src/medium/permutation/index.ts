// type Permutation<T, C = T> = [T] extends [never]
//   ? []
//   : C extends infer U
//   ? [U, ...Permutation<Exclude<T, U>>]
//   : [];
//
// type perm = Permutation<'A' | 'B' | 'C'>; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']
//
// const a: perm = ['A', 'B', 'C']
// const b: perm = ['A', 'C', 'B']
// const c: perm = ['foo', 'bar', 'baz']
