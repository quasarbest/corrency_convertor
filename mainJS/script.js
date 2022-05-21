// Currency converter=======================================================================================
let USDviuw = document.querySelector(".rub");
let KZTviuw = document.querySelector(".kzt");
let usdInput = document.querySelector(".rub-input");
let usdInRub = document.querySelector(".in-rub");
let kzInput = document.querySelector(".kz-input");
let kzInRub = document.querySelector(".kz-in-rub");
let valute = {
   USD: "",
   KZT: "",
};
axios.get("https://www.cbr-xml-daily.ru/daily_json.js").then((res) => {
   valute.USD = res.data.Valute.USD.Previous;
   valute.KZT = res.data.Valute.KZT.Previous;
   USDviuw.textContent = valute.USD.toFixed(1);
   KZTviuw.textContent = (100 / valute.KZT).toFixed(1);
});

kzInput.addEventListener("change", () => {
   kzInRub.textContent =
      ((kzInput.value / valute.KZT) * 100).toFixed(2) + "  тенге";
   console.log(valute.KZT);
});

usdInput.addEventListener("change", () => {
   usdInRub.textContent =
      (usdInput.value * (valute.KZT / 100)).toFixed(2) + "  рублей";
   console.log(valute.USD);
});

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
