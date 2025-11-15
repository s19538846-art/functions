/////#1//////
// function  sayName() {
//     const name = prompt("");
//     console.log("Привет," + [name] + "!")
// }
// sayName()
//////#2/////
// const square = (number) => console.log(number * number)
// square(4)
/////////#3///////
// const compare = (a,b) => {
//     if (a > b){
//     console.log(a)
//    } else {
//         console.log(b)
//    }
//    return a, b
// }
// compare(4,6)
//////////#4//
// const myarray = [1,2,3,4];
// let zero = 0;
// const sumArray = (myarray) => {
//     for (let index = 0; index < myarray.length; index++) {
//         zero += myarray[index];
//     }
//     console.log(zero);
// }
// sumArray([4,5,5])
///////////#5//////////
// const  greetUser = (name,age) => {
//     if (age < 18 ) {
//         console.log("Привет," + [name] + "! Доступ ограничен.")
//     } else {
//         console.log("Добро пожаловать," +  [name] + "!")
//     }
// }
// greetUser("wwww", 6)
/////#6/////
// function calculate(a, b, callback) {
//     const result = a * b;
//     callback(result);

// }
// calculate(3,5,(result) => console.log("Произведение:", result))
///#7/////
// const users = [
//   { name: "Аня", age: 17 },
//   { name: "Иван", age: 21 },
//   { name: "Вика", age: 19 }
// ];
// const filterAdults = (users) => {
//     for (let user of users) {
//         if (user.age >= 18){
//             console.log(`${user.name}, возраст: ${user.age}`);
//         } else{ 
//         }
//     }
// }
// filterAdults([
//   { name: "Аня", age: 67 },
//   { name: "Иван", age: 3 },
//   { name: "Вика", age: 90 }
// ])