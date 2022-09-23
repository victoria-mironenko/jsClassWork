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

 const min = (a, b) =>  (a < b)? a: b;
    
console.log(min(22,100));