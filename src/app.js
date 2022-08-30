import _ from "lodash";
import "./assets/css/styles.css";
import  "@fortawesome/fontawesome-free/js/all";
// import Icon from './assets/img/';

// function component() {
//   const element = document.createElement('div');

//   // Lodash, currently included via a script, is required for this line to work
//   element.innerHTML = _.join(['', ''], ' ');
//   element.classList.add("text-3xl");

//   const myIcon = new Image();
//   myIcon.src = Icon;

//   element.appendChild(myIcon);

//   return element;
// }

// document.body.appendChild(component());

// darkMode
// let button = document.getElementById("dark-mode");
// let body = document.querySelector("body");

// function darkMode() {
//  body.classList.toggle("bg-black");
//  body.classList.toggle("text-white")
// }
// button.addEventListener("click",darkMode);

let user = {
    numberAccount: 12456789, 
    iban: FR12345678,
    codeBank: 456789,
    codeGuichet: "00345",
    keyRib: 45,
    };

    let resultAccount = document.getElementById("results-account");

    resultAccount,append(user.numberAccount);

    class User {
        constructor(numberAccount, iban , codeBank , codeGuichet , keyRib) { 
        this. numberAccount = numberAccount;
        this. iban = iban;
        this.codeBank = codeBank;
        this. codeGuichet = codeGuichet;
        this.keyRib = keyRib;
    };
};

let warren = new User(12456789,"FR12345678", 456789, "00345", 45 );

let resultsIban = ducument.getElementById("results-iban");

resultsIban.append(user1.user2)

// let initial = 0;
// let array = [ 1, 2, 3, 4,];
// let array2 = [5];
// // fusionner 
// let array.concat(array2); 
// // ajouter un élement tableau
// array.push(5);
// // enlever un élement du tableau
// array.pop();

// array.map((value => value));
// // réduire les valeur
// console.log(array.reduce((previousValue, currentValue) => previousValue +currentValue, initial));
// // récuperer le valeur du tableau operateur Spread
// [...array] = [...array,6];
// console.log(array[0]);

// let arrayObject = [ {id: 0},{id: 1,userName: "user"}];
// console.log(arrayObject[1].userName);
// class User { 
//     constructor(accountNumber) {
//         this.accountNumber = accountNumber;
        
//     };
// };
// import User from "./components/user";
//  let test = new User("salut");
//  console.log(test);
 

// const submitUser = document.getElementById("submit-user");
// const accountNumber = doccument.getElementById("account-number");
// const resultsAccount = document.getElementById("results-account");

//  function addUser() {
//      let user = new User(accountNumber.value);
// resultAccount.append(accountNumber.value);

// }
// submitUser.addEventListener("click", addUser);


// class User {
//     constructor(accountNumber, iban ) {
//         this.accountNumber = accountNumber ;
//         this. iban = iban ;
//     }
// }
// faire du html  en javascript 
//     const input = (type) => {
//         let input = document.createElement("input ");
//         input.type = type;
//         return input;
//     }
//     export default input; 

//     import input from './components/input';
//     import Button from './compenents/button';

// import { javascript } from "webpack";

//     let input1 = input("number");
//     let input2 = input("text");
//     let btn = Button("Button","envoyer")
//     const root = document.getElementById("root");
//     root.append(input1);
//     root.append (input2);

//     const Button = () => {
//         let btn = document.createElement("button");
//         btn.type = "type";
//         btn.textContent = value;
//         return btn;

//         export default Button;
//     } 