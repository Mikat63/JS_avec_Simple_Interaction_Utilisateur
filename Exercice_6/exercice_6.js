const firstNumber = document.querySelector("#firstNumber");
const secondNumber = document.querySelector("#secondNumber");
const submitBtn = document.querySelector("#submit");
const pResult = document.querySelector("#p_result");

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (firstNumber.value === "" || secondNumber.value === "") {
    alert("Les champs ne doivent pas être vides");
    return;
  }

  const intFirstNumber = Number(firstNumber.value);
  const intSecondNumber = Number(secondNumber.value);

  if (isNaN(intFirstNumber) || isNaN(intSecondNumber)) {
    alert("Veuillez entrer des nombres valides");
    return;
  }

  if (intSecondNumber === 0) {
    alert("Division par zéro impossible");
    return;
  }

  const divideResult = intFirstNumber / intSecondNumber;

  const showResult = document.createElement("p");
  pResult.textContent = `Le résultat de la division des deux nombres est ${divideResult}`;
});
