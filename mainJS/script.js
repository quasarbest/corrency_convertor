// Currency converter=======================================================================================
let USDviuw = document.querySelector(".rub");
let KZTviuw = document.querySelector(".kzt");
let usdInput = document.querySelector(".rub-input");
let usdInRub = document.querySelector(".in-rub");
let kzInput = document.querySelector(".kz-input");
let kzInRub = document.querySelector(".kz-in-rub");
let valueSteam = document.querySelector(".steam");
let btnEquals = document.querySelector(".btn-13");
let profitSteam;
let steamPercentage;

let valute = {
   USD: "",
   KZT: "",
};
axios.get("https://www.cbr-xml-daily.ru/daily_json.js").then((res) => {
   valute.USD = res.data.Valute.USD.Value;
   valute.KZT = res.data.Valute.KZT.Value;
   USDviuw.textContent = valute.USD.toFixed(0);
   KZTviuw.textContent = (100 / valute.KZT).toFixed(1);
});

kzInput.addEventListener("change", () => {
   kzInRub.textContent =
      ((kzInput.value / valute.KZT) * 100).toFixed(1) ;
});

usdInput.addEventListener("change", () => {
   usdInRub.textContent =
      (usdInput.value * (valute.KZT / 100)).toFixed(2);
   console.log(valute.USD);
});


btnEquals.addEventListener("click", () => {
   steamPercentage = +usdInput.value * 0.13;
   steamPercentage = (+usdInput.value - steamPercentage)
   valueSteam.value = steamPercentage.toFixed(2);  
})
   
function dobavit(text) {
   kzInput.value = kzInput.value + text;

}
function dob(text) {
   usdInput.value = usdInput.value + text;
}

let calcInput = document.querySelector(".btn-12");
let calcInput2 = document.querySelector(".btn-13");

calcInput.onclick = function () {
   kzInRub.textContent =
      ((kzInput.value / valute.KZT) * 100).toFixed(2) + "  тенге";
};
calcInput2.onclick = function () {
   usdInRub.textContent =
      (usdInput.value * (valute.KZT / 100)).toFixed(2) + "  рублей";
};
let clear1 = document.querySelector(".btn-c");
clear1.onclick = function () {
   kzInput.value = "";
   kzInRub.innerHTML = "";
   
};
let clear2 = document.querySelector(".btn-c2");
clear2.onclick = function () {
   usdInput.value = "";
   usdInRub.innerHTML = "";
   valueSteam.value = "";
};
// Currency converter=======================================================================================

// Калькулятор ====================================================================================================

let valueTabl = document.querySelector(".tabl");

function numberTabl() {
   let btn = document.querySelectorAll(".btn");
   btn.forEach(function (btn) {
      btn.addEventListener("click", function () {
         valueTabl.value += btn.value;
      });
   });
}
numberTabl();



function consider() {
   let consider = document.querySelector(".btn_consider");
   consider.onclick = function () {
      valueTabl.value = eval(valueTabl.value); //.toFixed(3)
      
   };
}
consider();

function clear() {
   document
      .querySelector(".clear_value")
      .addEventListener("click", function () {
         valueTabl.value = "";
      });
}
clear();





   
