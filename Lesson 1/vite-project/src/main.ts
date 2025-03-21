import "./style.css";

// let isDone: boolean = false;

// const name: string = "Bob";
// const lastName: string = "Jonson";
// const age: number = '12';
// const isHappy: boolean = true;
// const budget: null = null;
// const status: undefined = undefined;

// Create a TypeScript function named displayUserProfile that takes a user profile object as an argument.
// The user profile object should have the following properties: username(string), age(number), and
// isActive(boolean).The function should return a string summarizing the user's profile details

// type userProfile = {
//   userName: string;
//   age: number;
//   isActive: boolean;
// };

// function displayUserProfile(user: userProfile) {
//   return `User name is ${user.userName} hi is ${user.age} years old and his is ${user.isActive}`;
// }

// const user = {
//   userName: "Bob",
//   age: 12,
//   isActive: true,
// };

// console.log(displayUserProfile(user));

// function logName(name: string) {
//   return `${name}`;
// }

// type User = {
//   name: string;
//   age: number;
// };
// function calcTotal(arr: object[]) {
//   // return arr.reduce((acc, el) => acc + el, 0);
// }

// function calcTotal(arr: {name: string;age: number}[]) {
//   // return arr.reduce((acc, el) => acc + el, 0);
// }

// function calcTotal(arr: User[]) {
//   // return arr.reduce((acc, el) => acc + el, 0);
// }

// const numbersArray = [10, 20, 30, 40];
// console.log(calcTotal(numbersArray)); // Output: 100

// const users = [
//   { name: "bob", age: 12 },
//   { name: "bob", age: 23 },
//   { name: "bob", age: 34 },
// ];

// console.log(calcTotal(users)); // Output: 100
//==============================================================================================

//          unknown               для отримання даних з беккенду 

// function safelyParseJson(jsonString: string) {
//     try {
//         const result: unknown = JSON.parse(jsonString);
//         if (typeof result === "object" && result !== null) {
//             return result;  // Type is verified as an object (non-null)
//         }
//     } catch (error: string): never {
//         console.error("Failed to parse JSON:", error);
//     }
//     return null;  // Return null if parsing fails or type is incorrect
// }
//==========================================================================================

// any  коли швидко треба написати пробний код

// function logDetails(value: any) {
//   console.log(`Value: ${value}, Type of value: ${typeof value}`);
// }

//=========      enum       це як бібліотека сталих значень  =========================================== 

// enum VehicleType {
//     Car = "Audi",
//     Truck = "Scania",
//     Motorcycle = "Ducati"
// }

// function getVehicleType(vehicle: VehicleType) {
//     return `The vehicle type is: ${vehicle}.`;
// }

// // Example usage:
// console.log(getVehicleType(VehicleType.Car));        // Output: "The vehicle type is: Audi."
// console.log(getVehicleType(VehicleType.Motorcycle)); // Output: "The vehicle type is: Ducati."
//============================================================================================================

// Union Types    для одній змінній різні типи, для Реакта буде більше стрінг(набер) або андефайнд

// function formatInput(input: string | number | null) {
//     if (typeof input === 'number') {
//         return input.toFixed(2); // Formats the number to two decimal places
//     } else {
//         return input.toUpperCase(); // Converts the string to uppercase
//     }
// }
//============================================================================================

//     Literal     можна перерахувати сталі значення, всі інші будуть помилкою, напр. розміри кнопки

// function lightShower(color: "green" | "yellow" | 'red') {
//   if (color === "green") {
//     console.log("go");
//   } else if (color === "yellow") {
//     console.log("ready");
//   } else if (color === "red") {
//     console.log("ready");
//   }
// }

// lightShower('black')   // не валідне значення 
//====================================================================

//  для запитів на бекенд

// function logName(name: string): string {
//   return `${name}`;
// }

//      для он-Кліків, аддІвентЛіснер
// function logName(name: string): void {
//   console.log(`${name}`);
// }

//================ never  ===========================================================

// function errorHandler(message: string): never {
//   throw new Error(message);
// }

// errorHandler("Critical error occurred!");  // Throws an Error with the provided message


//=====   interface  для створення класів===========================================

interface User {
  name: string;
  age: number;
  lastName?: string; // опціональне значення
  sayHello(): string;
  sayBye(): void;
  showAge(userAge: number): string;
}
//    type   не можна для створення класів 
// type User = {
//   name: string;
//   age: number;
// };

// const user = {
//   name: "Bob",
//   age: 12,
//   sayHello() {
//     return "Hello";
//   },
//   sayBye() {
//     console.log("Bye");
//   },
//   showAge(userAge: number) {    // не був підв'язаний interface User, тому пропс userAge треба типізувати
//     return `My age is ${userAge}`;
//   },
// };

const student : User = {
  name: "Bob",
  age: 12,
  sayHello() {
    return "Hello";
  },
  sayBye() {
    console.log("Bye");
  },
  showAge(userAge) {
    return `My age is ${userAge}`;
  },
};
