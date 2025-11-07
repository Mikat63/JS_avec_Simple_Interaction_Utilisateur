const numberToMultiply = document.querySelector("#multiplication_table");
const submitBtn = document.querySelector("#submit");

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  if (numberToMultiply.value === "") {
    alert("Le champ ne doit pas être vide");
    return;
  }

  const intNumberToMultiply = parseInt(numberToMultiply.value);

  if (isNaN(intNumberToMultiply)) {
    alert("Vous devez saisir des nombres");
    return;
  }

  const ulTable = document.createElement("ul");
  ulTable.style.listStyleType = "none";
  document.body.appendChild(ulTable);

  for (let i = 0; i <= 10; i++) {
    const liTable = document.createElement("li");

    let resultCalcul = intNumberToMultiply * i;
    liTable.textContent = `${intNumberToMultiply} x ${i} = ${resultCalcul}`;
    ulTable.appendChild(liTable);
  }
});
