//1 задание


// let user = 'admin'
//
// if (user === 'admin') {
//     console.log("Welcome, 'user'")
// } else {
//     console.log("False, not correct user")
// }


//2 задание


// function checkDayOfFebruary(day) {
//     if (day >= 1 && day <= 28) {
//         console.log(Today is ${day} of February);
//     } else {
//         console.log(On February, there are only 28 days. Your day is ${day} of another month);
//     }
// }
//
//
// let day = 29; //or another num
// checkDayOfFebruary(day);


//3 задание



//function checkNum (num) {
//     if (num === 50) {
//         console.log('correct')
//     }
//     else   {
//         console.log('uncorrect')
//     }
// }
//
// let num = 30
// checkNum (num)


//4 задание


// function checkUserAge(user, age) {
//     if (age >= 18) {
//         console.log(${user} ${age} old, welcome);
//     } else {
//         console.log(${user} ${age} old, rejected);
//     }
// }
//
//
// let user = 'Bek';
// let age = 16;
// checkUserAge(user, age);


//5 задание


// function checkUserName (user) {
//     if (user.length >= 3) {
//         console.log('${user}' name is accepted)
//     } else {
//         console.log('${user}' name is too short (min 3))
//     }
// }
//
//
// let user = 'Ali'
// checkUserName(user)



//6 задание


// function checkUserName (user) {
//     if (user.length <= 5) {
//         console.log('${user}' name is accepted)
//     } else {
//         console.log('${user}' name is too long (max 5))
//     }
// }
//
//
// let user = 'Alinaa'
// checkUserName(user)


//7 задание



// function checkAge(age) {
//     if (typeof age === 'number') {
//         console.log(age must to be only a "number" - ${age})
//     } else {
//         console.log('age' is not a number)
//     }
// }
//
//
// let age = 20
// checkAge(age)


//8 задание



// function checkAge(age) {
// //     if (typeof age === 'string') {
// //         console.log('age' must be a string (${age}))
// //     } else if (typeof age === 'number') {
// //         if (age > 23) {
// //             console.log('age' must be older than 23)
// //         } else {
// //             console.log('age' is not older than 23)
// //         }
// //     } else {
// //         console.log('age' is not valid)
// //     }
// // }
// //
// // let age1 = "20"
// // let age2 = 25
// // let age3 = true
// // checkAge(age1)
// // checkAge(age2)
// // checkAge(age3)



//9 задание


// function checkDayOfWeek(day) {
//     if (day === 'monday'  day === 'tuesday'  day === 'wednesday'  day === 'thursday'  day === 'friday') {
//         console.log(Today is ${day}, it's a weekday)
//     } else if (day === 'saturday'  day === 'sunday') {
//         console.log(`Today is ${day}, it's a weekend`)
//     } else {
//         console.log(`Invalid day`)
//     }
// }
//
// let today = 'monday' //ЛЮБОЙ ЛЕНЬ НЕДЕЛИ
// checkDayOfWeek(today)


// 10 задание
//
// function processString(input) {
//     let trimmed = input.trim()
//     let swapped = trimmed.replace(/hello world/, "world hello")
//
//     let replaced = swapped.replace('o', 'a')
//     return replaced;
// }
//
// let str = "   hello world    "
// let processedStr = processString(str)
// console.log(processedStr)



// 11 задание
// function processString(str) {
//     if (typeof str !== 'string') {
//         return "Ошибка: параметр 'str' должен быть строкой"
//     }
//
//     if (str.length % 2 !== 0) {
//         return "Ошибка: длина строки должна быть четной"
//     }
//
//     if (str.length < 4  str.length > 10) {
//         return "Ошибка: длина строки должна быть от 4 до 10 символов"
//     }
//
//     let trimmedStr = str.replace(/\s/g, '')
//
//     return trimmedStr
// }
//
// let inputStr = " lort "
// let processedStr = processString(inputStr)
// console.log(processedStr)