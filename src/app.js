import _, { keyBy } from "lodash";
import "./assets/css/styles.css";
import  "@fortawesome/fontawesome-free/js/all";

import virement from "../components/virement";
// import Icon from './assets/img/';

// ajouter de l'argent
const inputDepot = document.getElementById("inputdepot")
const button = document.getElementById("btndepot")
const result = document.getElementById("result")

// chiffre random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min ) );
  }
  // faire entré le formulaire
    inputDepot.addEventListener("keydown", (key) => {
        if (key.code === "Enter") {
        }
      });
let sold = getRndInteger (0, 1000)
//  let accountNumber = getRndInteger `FR` + (1119481889,1881881151) 
result.innerHTML = sold

const calculate = () => {
    let results = parseInt(inputDepot.value);
    let total = (sold += results);
    result.innerHTML = total;
    return total;
};

button.addEventListener("click",calculate )
// retirer de l'argent
const  btnTake = document.getElementById("btnTake")  
const inputtake = document.getElementById("inputtake")
const negativecalcul = () => {
    let results = parseInt(inputtake.value);
    let total = (sold -= results);
    result.innerHTML = total;
    return total;
};

btnTake.addEventListener("click",negativecalcul )


// results formulaire

let btnFormulaire = document.getElementById("btn-formulaire");
let inputAccount = document.getElementById("input-account");
let inputIban = document.getElementById("input-iban");
let inputRib = document.getElementById("input-rib");
let inputSold = document.getElementById("input-sold");
let inputName = document.getElementById("input-name");
let resultsAccount = document.getElementById("results-account");
let resultsName = document.getElementById("results-name");
let resultsIban = document.getElementById("results-iban");
let resultsRib = document.getElementById("results-rib");
let resultsSold = document.getElementById("results-sold");
const addFormulaire = () => {
  resultsAccount.innerHTML = inputAccount.value;
  resultsIban.innerHTML = inputIban.value;
  resultsRib.innerHTML = inputRib.value;
  resultsSold.innerHTML = inputSold.value;
  resultsName.innerHTML = inputName.value;
};

btnFormulaire.addEventListener("click", addFormulaire);

// virement
let btnBeneficiary = document.getElementById("btn-beneficiary");
let inputBeneficiaryname = document.getElementById("input-beneficiary-name");
let inputIbann = document.getElementById("input-ibann");
let inputRibb = document.getElementById("input-ribb");
let inputAccountnumber = document.getElementById("input-account-number");
let resultsAccountnumber = document.getElementById("results-account-number");
let resultsBeneficiaryname = document.getElementById("results-beneficiary-name");
let resultsIbann = document.getElementById("results-ibann");
let resultsRibb = document.getElementById("results-ribb");

const addBeneficiary = () => {
  resultsAccountname.innerHTML = inputAccountname.value;
  resultsIbann.innerHTML = inputIbann.value;
  resultsRibb.innerHTML = inputRibb.value;
  resultsBeneficiaryname.innerHTML = inputBeneficiaryname.value;
  resultsAccountnumber.innerHTML = inputAccountnumber.value;
};
  btnBeneficiary.addEventListener("click", addBeneficiary);