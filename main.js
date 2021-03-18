// Main cards display
const expenses1 = document.querySelector(".title .expenses-value");
const remaining1 = document.querySelector(".remaining-value");
const income1 = document.querySelector(".income-value");

// input expense section
const addExpense = document.querySelector("#expense-button");
const expenseAmount = document.getElementsByID("expense-input");

// input income section
const addIncome = document.querySelector("#income-button");
const incomeAmount = document.getElementsByID("income-input");

let ENTRY_LIST = [];

addIncome.addEventListener("click", function () {
  if (!incomeAmount.value) return;
  let income = {
    type: "income",
    amount: parseFloat(incomeAmount.value),
  };
  ENTRY_LIST.push(income);
  updateUI();
  clearInput(incomeAmount);
});

function clearInput(inputsArray) {
  inputsArray.forEach((input) => {
    input.value = "";
  });
}
console.log(ENTRY_LIST);
