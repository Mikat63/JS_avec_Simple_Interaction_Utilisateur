const inputAge = document.querySelector("#age");
const submitAge = document.querySelector("#submit");

submitAge.addEventListener("click", function (event) {
  event.preventDefault();

  const intInputAge = parseInt(inputAge.value);

  const ShowAge = document.createElement("p");

  if (intInputAge < 18) {
    ShowAge.textContent = "Vous êtes mineur !";
    document.body.appendChild(ShowAge);
  } else {
    ShowAge.textContent = "Vous êtes majeur !";
    document.body.appendChild(ShowAge);
  }
});
