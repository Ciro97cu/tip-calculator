// ~~~~~~~~~~ START FUNCTIONS ~~~~~~~~~~
function operation(percentage) {
    let totalCost = (inputBill.value * percentage).toFixed(2);
    let totalPerPerson = (totalCost / inputPeople.value).toFixed(2);
    tipAmount.innerText = `$ ${totalCost}`;
    total.innerText = `$ ${totalPerPerson}`;
}

function resetColorButtons() {
    buttonTip5.classList.remove("button-active");
    buttonTip10.classList.remove("button-active");
    buttonTip15.classList.remove("button-active");
    buttonTip25.classList.remove("button-active");
    buttonTip50.classList.remove("button-active");
    buttonReset.removeAttribute("disabled");
}
// ~~~~~~~~~~ END FUNCTIONS ~~~~~~~~~~
const inputBill = document.getElementById("bill_js");

const buttonTip5 = document.getElementById("button_js5");
const buttonTip10 = document.getElementById("button_js10");
const buttonTip15 = document.getElementById("button_js15");
const buttonTip25 = document.getElementById("button_js25");
const buttonTip50 = document.getElementById("button_js50");

const inputCustom = document.getElementById("custom_js");

const inputPeople = document.getElementById("people_js");

const tipAmount = document.getElementById("tipAmount_js");
const total = document.getElementById("total_js");

const buttonReset = document.getElementById("reset_js");

buttonReset.setAttribute("disabled", true);

buttonTip5.addEventListener("click", () => {
    resetColorButtons();
    buttonTip5.classList.add("button-active");
    let percentage = 0.05;
    operation(percentage);
})

buttonTip10.addEventListener("click", () => {
    resetColorButtons();
    buttonTip10.classList.add("button-active");
    let percentage = 0.1;
    operation(percentage);
})

buttonTip15.addEventListener("click", () => {
    resetColorButtons();
    buttonTip15.classList.add("button-active");
    let percentage = 0.15;
    operation(percentage);
})

buttonTip25.addEventListener("click", () => {
    resetColorButtons();
    buttonTip25.classList.add("button-active");
    let percentage = 0.25;
    operation(percentage);
})

buttonTip50.addEventListener("click", () => {
    resetColorButtons();
    buttonTip50.classList.add("button-active");
    let percentage = 0.50;
    operation(percentage);
})

inputCustom.addEventListener("input", () => {
    inputCustom.addEventListener("click", () => {
        resetColorButtons();
        let percentage = inputCustom.value / 100;
        operation(percentage);
    })
})

buttonReset.addEventListener("click", () => {
    tipAmount.innerText = "$0.00";
    total.innerText = "$00.00";
    inputBill.value = "";
    inputCustom.value = "";
    inputPeople.value = "";
    resetColorButtons();
})