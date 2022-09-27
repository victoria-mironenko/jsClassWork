import "./main.scss";

const add123 = (a, b) => a + b;

// const res = add123(222, 3);
// console.log("Helloasda");

// const currency = {
//     usd: 'dollar',
//     blr: 'bel rouble',
//     rus: 'russian rouble'

// }
// let currencyType = prompt('Введите вашу валюту');
// console.log(currency[currencyType]);

// let descriptor = Object.defineProperty(currency, 'usd',{
//     configurable: false,
//     emumerable: false,
// })
// console.log(currency);

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// let sum = 0;
// for(let key in salaries){
//     sum += salaries[key]
//     console.log(sum)
// }
// console.log(sum)

// function Sum(){
//     for (const arg of arguments) {
//         console.log(arg);
//     }
// }
// Sum('Ann','sen','bit');

//  const number = (...param) => {
//      let num = 0;
//      for (const plus of param) {
//          num += plus;

//      }
//      return num;
//  }
//  const res = number(1,2,3,4,5,6)

//  console.log(res)

const min = (a, b) => (a < b ? a : b);

console.log(min(22, 100));

const sumTo = (n) => {
  if (n === 1) return n;
  return n + sumTo(n - 1);
};
console.log(sumTo(4));

function calcSum(a) {
  return function (b) {
    return a + b;
  };
}
let result = calcSum(30)(70);
console.log(result);

const list = {
  a: "a",
  b: "b",
  next: {
    a: "a",
    b: "b",
    next: {
      a: "a",
      b: "b",
      next: null,
    },
  },
};


const print = (list) => {
   
    if (list.next) {
        
        return print(list.next);
        
        return;
       

    }
}
let string = 'aaa bbb ccc';
console.log(string.substr(4, 3));
console.log(string.substring(4,7));
console.log(string.slice(4, 7));
string.length

const str = 'Я учу JavaScript'

