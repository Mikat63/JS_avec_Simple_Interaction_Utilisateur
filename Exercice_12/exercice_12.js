const userInputNumber = document.querySelector("#user_input_number");
const submitBtn = document.querySelector("#submit");

function squareCalc (n) {
    return n * n;
}

submitBtn.addEventListener("click", function(event) {
event.preventDefault();

     if (userInputNumber.value === "") {
        alert("Ce champ ne peut être vide");
        return;
    };

    const userInputNumberConvertion = parseInt(userInputNumber.value);

    if (isNaN(userInputNumberConvertion)) {
        alert("saisie impossible, veullez saisir un nombre");
        return;
    };

    const result = squareCalc(userInputNumberConvertion);

    alert(`Le carré de ${userInputNumberConvertion} est de ${result}`);
})