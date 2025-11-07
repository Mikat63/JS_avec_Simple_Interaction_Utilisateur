const inputAge = document.querySelector("#age");
const submitAge = document.querySelector("#submit");
const pResult = document.querySelector("#p_result");

submitAge.addEventListener("click", function (event) {
  event.preventDefault();

  if (inputAge.value === "") {
    alert("Le champ ne doit pas être vide");
    return;
  }

  const intInputAge = parseInt(inputAge.value);

  if (isNaN(intInputAge)) {
    alert("Vous devez saisir des nombres");
    return;
  }

  if (intInputAge < 18) {
    pResult.textContent = "Vous êtes mineur !";
  } else {
    pResult.textContent = "Vous êtes majeur !";
  }
});
