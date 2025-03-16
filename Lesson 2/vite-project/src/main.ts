import "./style.css";

// let name = "John";
// A) let name: string = 'John'; +
// B) let name: number = 'John';
// C) let name: boolean = 'John';
// D) let name = 'John';

// let scores = [1, 2, 3];
// A) let scores: number[] = [1, 2, 3]; +
// B) let scores = [1, 2, 3];
// C) let scores: array = [1, 2, 3];
// D) let scores: [number] = [1, 2, 3];

// let id;
// A) let id: string | number; +
// B) let id: string;
// C) let id: number;
// D) let id: any;

// function calculateDistance() {
//   return 42;
// }
// A) function calculateDistance(): number { return 42; }  +
// B) function calculateDistance(): void { return 42; }
// C) function calculateDistance(): any { return 42; }
// D) function calculateDistance() { return 42; }

// function logMessage(message) {
//   console.log(message);
// }
// A) function logMessage(message: string): void { console.log(message); }  +
// B) function logMessage(message: string): string { console.log(message); }
// C) function logMessage(message: any): void { console.log(message); }        
// D) function logMessage(message: string) { console.log(message); }

// Admin', 'User', 'Gues

// a) enum UserRole {    +
//   Admin = "Admin"
//   User = "User"
//   Guest = "Guest"
// }

// b) enum UserRole {
//     Admin = 1,
//     User = 2,
//     Guest = 3
// }

// c) const UserRole = {
//     Admin: 0,
//     User: 1,
//     Guest: 2
// };

// d) let UserRole = ['Admin', 'User', 'Guest'];

//=====================================================================================


// let name:string = 'BOB'

// const numbers = [1,2,3]

// Поясніть, будь ласка, цей приклад. Це тема Custom Types. У яких випадках доцільно
// використовувати такий опис на практиці?

// enum AnimalIds {
//   cat = 'cat',
//   dog = 'dog',
//   fish = 'fish',
// }

// type Animal = {
//   [AnimalIds.cat]: {
//     meow: () => string;
//   };
//   [AnimalIds.dog]: {
//     bark: () => string;
//   };
//   [AnimalIds.fish]: {
//     swim: () => undefined;
//   };
// };

// // type Animal = {
// //   cat: {
// //     meow: () => string;
// //   };
// //   dog: {
// //     bark: () => string;
// //   };
// //   fish: {
// //     swim: () => undefined;
// //   };
// // };

// type Cat = {
//   meow: () => string;
// };

// type Dog = {
//   bark: () => string;
// };

// type Fish = {
//   swim: () => undefined;
// };

// // Створення об'єктів типу Animal
// let cat: Cat = {
//   meow: () => "Meow! I am a cat"
// };

// // let cat: Animal[AnimalIds.cat] = {
// //   meow: () => "Meow! I am a cat",
// // };

// let dog: Dog = {
//   bark: () => 'Woof! I am a dog',
// };

// let fish: Fish = {
//   swim: () => undefined,
// };

//--------------------------------------------------------------------------
// квадратні дужки - значить працюємо з ключем об'єкту props або key

// interface List {
//   [key:string]: number | null
// }

// type Fruits = {    це не є гарне типізування !!!!
//   apples: number;
//   banana: number;
//   oranges: number;
// };

// const fruits: List = {  ось це правильне типізування!!
//   apples: 10,
//   banana: 15,
//   oranges: 25,
//   pinaple: 10,
//   peach: null
// };

// const electro nic: List = {
//   phones: 20,
//   tablets: 10,
//   monitors: 23,
// };

//===========  GENERIC  динамічний тип даних=============================================================
//                       очікую   отримую    повертає   опрацювали позитивний і негативний сценарій функцій
// function getFirstElement<T>(array: T[]): T | undefined {
//   return array[0];
// }

// numberArray  тут для чисел
// function getFirstElement<T>(array: number[]) : number {
//   return array[0];
// }

// stringArray  для рядка
// function getFirstElement<T>(array: string[]) : string {
//   return array[0];
// }

// objectArray  для об'єкту
// function getFirstElement<T>(array: { name: string }[]): { name: string } {
//   return array[0];
// }

// const numberArray = [10, 20, 30];
// const stringArray = ["hello", "world", "typescript"];
// const objectArray = [{ name: "Alice" }, { name: "Bob" }];

// console.log(getFirstElement(numberArray));
// console.log(getFirstElement(stringArray));
// console.log(getFirstElement(objectArray));
//  console.log(getFirstElement(1)); -------  тут буде помилка, бо функція чекає масив!!

//-----------------------------------------------------------------------------
// отримання значення ключа динамічним
ObjectType = Т                        наслідує ключі від Т
// function getProperty<ObjectType, K extends keyof ObjectType>(obj: ObjectType, key: K): ObjectType[K] {
//   return obj[key];
// }

// const person = {
//   name: "John",
//   age: 30,
//   occupation: "Engineer",
//   gender: "male"
// };

// const name = getProperty(person, "name"); // Output: "John"
// const age = getProperty(person, "age"); // Output: 30
// const gender = getProperty(person, "gender"); // undefined

//------------------------------------------------------------------------------------------
//==========>> Partial - всі ключі interface робить необов'язковими
// interface UserProfile {
//   username: string;
//   email: string;
//   age: number;
// }

// const originalProfile: UserProfile = {
//   username: "johndoe",
//   email: "john.doe@example.com",
//   age: 28,
// };

// функ. приймає старі дані profile і нові оновлення updates; Partial<UserProfile> - будь які ключі з цього типу
// function updateProfile(profile: UserProfile, updates: Partial<UserProfile>) {
//   return { ...profile, ...updates };
// }

// const updatedProfile = updateProfile(originalProfile, { age: 29 });
//====================================================================================
// interface User {
//   id: number;
//   name: string;
// }

// const user: Readonly<User> = {
//   id: 100,
//   name: "Bob",
// };

// user.id = 201;  буде помилка
// user.name = "John"; буде помилка
//=====================================================================
// Pick <T, K>  приймає будь скільки аргументів, показує вибіркові поля початкового об'єкту 

// interface Employee {
//   id: number;
//   name: string;
//   email: string;
//   department: string;
//   hireDate: Date;
// }

// const fullEmployeeInfo: Employee = {
//   id: 101,
//   name: "John Doe",
//   email: "john.doe@example.com",
//   department: "Engineering",
//   hireDate: new Date("2020-01-10"),
// };
//                                     повертає - показує дані працівника: 1аргум.- інтерфейс, 2-що саме хочемо побачити.
// function displayInfo(fullEmployeeInfo: Employee): Pick<Employee, "name" | "email"> {
//   return {
//     name: fullEmployeeInfo.name,
//     email: fullEmployeeInfo.email,
//   };
// }    створюється новий інтерфейс!!!


// АЛЕ МОЖНА створити новий interface і тоді в функцію підставити замість Pick лише назву нового інтерфейсу BasicInfo 
// // interface BasicInfo {
// //   name: string;
// //   email: string;
// // }
                                                    теж саме, що і вище
// // function displayInfo(fullEmployeeInfo: Employee): BasicInfo {
// //   return {
// //     name: fullEmployeeInfo.name,
// //     email: fullEmployeeInfo.email,
// //   };
// // }
//===========================================================================
// interface Employee {
//   id: number;
//   name: string;
//   email: string;
//   department: string;
//   hireDate: Date; // hide info
// }

// const fullEmployeeInfo: Employee = {
//   id: 101,
//   name: "John Doe",
//   email: "john.doe@example.com",
//   department: "Engineering",
//   hireDate: new Date("2020-01-10"),
// };
  вирізаю з Employee що саме: "hireDate" | "name". Метод Omit вирізає з інтерфейсу те, що треба
// function displayInfo(fullEmployeeInfo: Employee): Omit<Employee, "hireDate" | "name"> {
//   return {
//     name: fullEmployeeInfo.name,
//     email: fullEmployeeInfo.email,
//     department: fullEmployeeInfo.department,
//     id: fullEmployeeInfo.id,
//   };
// }
//========================      RECORD    ================================
// interface List {
//   [key:string]: number | null
// }

// Record<string, number>;  для збора даних
                                                      ключ   тип даних, що отримаю
// function recordTemperatures(temps: number[]): Record<string, number> {
//   let temperatureRecord: Record<string, number> = {};

//   temps.forEach((temp, index) => {
//     temperatureRecord[`day${index + 1}`] = temp;
//   });

//   return temperatureRecord;
// }

// // Example usage:
// const weeklyTemps = [22, 24, 23, 25, 24, 26, 27];
// const tempRecord = recordTemperatures(weeklyTemps);
// console.log(tempRecord); //  {day1: 22, day2: 24, day3: 23, day4: 25, day5: 24, …}

        ---- 2 приклад ------
type Weekdays = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';
type Weekend = 'Sat' | 'Sun';

type Day = Weekdays | Weekend;

type DayTranslations = Record<Day, string>;

const translations: DayTranslations = {
  Mon: 'Понеділок',
  Tue: 'Вівторок',
  Wed: 'Середа',
  Thu: 'Четверг',
  Fri: "П'ятниця",
  Sat: 'Субота',
  Sun: 'Неділя',
};

    ----- 3 приклад з enum ---------
enum UserRoles {
  admin = 'admin',
  manager = 'manager',
  employee = 'manager',
}

type UserRolesStatuses = Record<UserRoles, boolean>;

const userRoleStatuses: UserRolesStatuses = {
  [UserRoles.admin]: true,
  [UserRoles.manager]: false,
  [UserRoles.employee]: true,
};

    -------4 приклад розширяю type можливими помилками ----
type InitialFormType = {
  name: string;
  email: string;
  password: string;
};

export type Form = InitialFormType & {
  errors: Partial<Record<keyof InitialFormType, [string]>>;
};


//=====================================================================================
// interface Employee {
//   id: number;
//   name: string;
//   email: string;
//   department: string;
//   hireDate: Date; // hide info
// }
МЕТОДи МОЖУ ВИКОРИСТ не лише в функціях, але і для типізації нових змінних, так беремо Employee і з нього вирізаємо hireDate, тепер тут буде все крім дати!!
// type EmployeeBasicInfo = Omit<Employee, "hireDate">;
//=======================================================================================
interface User {
  id: number;
  name: string;
  email: string;
}

// async function fetchUser(): Promise<User> { 
//   try {
//     const response = await fetch("https://api.user.com");
//     const user = await response.json();
//     return user;
//   } catch (error) {
//     console.log("fetch error");
//     throw error;
//   }
// }

// async function fetchUser<T>(url: string): Promise<T> {
//   try {
//     const response = await fetch(url);
//     const user: T = await response.json();
//     return user;
//   } catch (error) {
//     console.log("fetch error");
//     throw error;
//   }
// }


// async function fetchUser<T>(url: string): Promise<T> {
//   try {
//     const response: T = await axios.get(url);
//     return response;
//   } catch (error) {
//     console.log("fetch error");
//     throw error;
//   }
// }

// const user = {
//   id: 1,
//   name: "Bob",
//   email: "user@gmail.com",
// };
