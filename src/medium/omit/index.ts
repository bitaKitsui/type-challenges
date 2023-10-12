// type Todo = {
//   title: string;
//   description: string;
//   completed: boolean;
// };
//
// type MyOmit<T, K extends keyof T> = {
//   [Key in Exclude<keyof T, K>]: T[Key];
// };
//
// type TodoPreview = MyOmit<Todo, 'description' | 'title'>;
//
// const todo: TodoPreview = {
//   completed: false,
// };
