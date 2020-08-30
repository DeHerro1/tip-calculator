const calc = document.querySelector("#calc");
calc.addEventListener("click", (e) => {
  e.preventDefault();

  //Calling the DOM inputs
  const bills = document.querySelector(".decimal-num");
  const users = document.querySelector(".number");
  const service = document.querySelector(".selection");
  const totalBill = document.querySelector(".total-tip");
  const totalPeople = document.querySelector(".total-people");
  const totalserv = document.querySelector(".total-service");

  InvalidInput(bills, users, service);
  calculateTip(bills, users, service);

  //output calculation
  const results = calculateTip(bills, users, service);

  totalBill.textContent = `Tip Amount :$ ${results[0].toFixed(2)}`;
  totalPeople.textContent = `Total Amount :$ ${results[1].toFixed(2)}`;
  totalserv.textContent = `Each person Owes :$ ${results[2].toFixed(2)}`;
});

function InvalidInput(bill, numUsers, selectedService) {
  const feedback = document.querySelector(".feedback");
  let isFeedBack = false;
  feedback.innerHTML = "";

  if (bill.value === "" || bill.value <= "0") {
    feedback.classList.add("showitem");
    feedback.innerHTML += `<p>Bill Amount cannot be blank.</p>`;
    isFeedBack = true;
  }
  if (numUsers.value === "0" || numUsers.value <= "0") {
    feedback.classList.add("showitem");
    feedback.innerHTML += `<p>Number of People must be greate than zero.</p>`;
    isFeedback = true;
  }
  if (selectedService.value === "none") {
    feedback.classList.add("showitem");
    feedback.innerHTML += `<p>You must select a service`;
    isFeedback = true;
  }
  setTimeout(function () {
    feedback.classList.remove("showitem");
    feedback.textContent = "";
    totalBill.innerHTML = "";
    totalPeople.innerHTML = "";
    totalserv.innerHTML = "";
  }, 1000);

  return isFeedBack;
}

const calculateTip = function (billAmount, numUsers, selectedService) {
  let percentTip = 0.1;
  let selected = Number(selectedService.value);
  if (selected === "20") {
    percentTip = 0.2;
  } else if (selected === "10") {
    percentTip = 0.1;
  } else if (selected === "2") {
    percentTip = 0.02;
  }
  const tipAmount = Number(billAmount.value) * percentTip;
  const totalAmount = Number(billAmount.value) + Number(tipAmount);
  const eachPerson = Number(totalAmount) / Number(numUsers.value);
  return [tipAmount, totalAmount, eachPerson];
};
