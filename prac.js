// var str = "Radhika Suresh";
// var res = str.split(" ");
// var x = [];
// for (let i = 0; i < res.length; i++) {
//   x.push(res[i].split("").reverse().join(""));
// }
// console.log(x);
// var a = "Radhikaa";
// console.log(a.split("a"));

// ! Fetch API

// const api = "https://644b33bd17e2663b9deab900.mockapi.io/Users";

// async function getData() {
//   try {
//     const response = await fetch(api);
//     const data = await response.json();

//     const withoutid = data.map((val) => {
//       delete val.id;
//       return val;
//     });
//     const sub = withoutid.filter((val) => {
//       let res = val.subject !== "Tamil";
//       return res;
//     });

//     return sub;
//   } catch (error) {
//     console.log(error);
//   }
// }

// getData()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// let array = [1, 2, 3, 4, 5, 6];
// var add = array.reduce((acc, val) => {
//   return acc + val;
// }, 0);
// console.log(add);

// let arr = [1, 2, 3, 4];
// console.log(arr.reduce((a, b) => a + b, 10));

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 2000);
// }
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log("number is ", i), 3000);
// }

// let a = { name: "Radhika" };
// let b = a;
// b.name = "Ash";
// console.log(b);
// console.log(a);

// var a;
// var a = 10;
// console.log(a);

// var x = 2;
// var y = "2";
// console.log(x == y);
// console.log(x === y);

// let number = 0;
// console.log(number++);
// console.log(++number);

// sessionStorage.setItem("store", 123);
// localStorage.setItem("store", 123);

// let obj = { 1: "a", 2: "b", 3: "c" };
// let res = {};
// for (let value in obj) {
//   res[obj[value]] = value;
// }
// console.log(res);

// for (let i = 0; i < 5; i++) {
//   if (i === 3) continue;
//   console.log(i);
// }

// var a = 2;
// var res = [];
// for (let i = 1; i <= 3; i++) {
//   var mul = i * a;
//   res.push(mul);
// }
// console.log(res.join(" "));

// var a = prompt("enter a number");
// if (a % 2 === 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }

// var a = 20;
// var sqrt = Math.sqrt(3);
// var res = (sqrt * Math.pow(a, 2)) / 4;
// console.log(sqrt.toFixed(2));

// let number = 0;
// console.log(++number);
// console.log(number++);
// console.log(number);

// var a = prompt("Enter a number");
// var a = 10;
// var sum = 0;
// for (let i = 0; i <= a; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// var a = 4;
// let mul = 1;
// for (let i = 1; i <= a; i++) {
//   mul = mul * i;
// }
// console.log(mul);

// var a = 6;
// for (let i = 1; i <= a; i++) {
//   if (i % 2 == 0) console.log(i);
// }

// var str = "GUVI";
// var res = str.split("").reverse().join("");
// console.log(res);

// var a = 2;
// var b = 3;
// for (let i = 1; i <= 2 && i <= b; i++) {
//   if (a % i === 0 && b % i === 0) {
//     var hcf = i;
//   }
// }
// console.log(hcf);

// var a = prompt("Enter a number");
// var b = a.split("");
// var odd = [];
// var even = [];
// for (let i = 0; i < b.length; i++) {
//   if (i % 2 === 0) {
//     even.push(b[i]);
//   } else {
//     odd.push(b[i]);
//   }
// }
// console.log(even.join(" "));
// console.log(odd.join(" "));

// !Prime Numbers

// var a = 10;

// for (let i = 2; i <= a; i++) {
//   var count = 0;
//   for (let j = 1; j <= i; j++) {
//     if (i % j === 0) {
//       count++;
//     }
//   }
//   if (count === 2) {
//     console.log(i);
//   }
// }
