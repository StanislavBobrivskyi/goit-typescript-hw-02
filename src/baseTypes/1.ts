// Перетворіть цей код на TypeScript, вказавши відповідні типи для всіх змінних.

// let age = 50;
// let name = 'Max';
// let toggle = true;
// let empty = null;
// let notInitialize;
// let callback = (a) => { return 100 + a };

// export {};
let age: number = 50; // age - це число
let name: string = "Max"; // name - це рядок
let toggle: boolean = true; // toggle - це булеве значення
let empty: null = null; // empty - це null
let notInitialize: undefined; // notInitialize - це undefined
let callback: (a: number) => number = (a: number) => {
  return 100 + a;
};
export {};
// callback - це функція, яка приймає число та повертає число
