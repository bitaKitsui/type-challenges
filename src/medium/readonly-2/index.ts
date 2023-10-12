// type Todo = {
//   title: string;
//   description: string;
//   completed: boolean;
// };
//
// type MyReadonly2<T, K extends keyof T = keyof T> = {
//   readonly [Key in K]: T[Key];
// } & { [Key in Exclude<keyof T, K>]: T[Key] };
//
// const todo: MyReadonly2<Todo, 'title' | 'description'> = {
//     title: "Hey",
//     description: "foobar",
//     completed: false,
// }
//
// const foo: MyReadonly2<Todo> = {
//     title: 'Hello',
//     description: 'World',
//     completed: false
// }
//
// todo.title = "Hello" // Error: cannot reassign a readonly property
// todo.description = "barFoo" // Error: cannot reassign a readonly property
// todo.completed = true // OK
//
// foo.title = 'foo'
// foo.description = 'bar'
// foo.completed = true
