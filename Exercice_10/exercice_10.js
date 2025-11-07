const userInputWord = document.querySelector("#user_input_word");
const submitBtn = document.querySelector("#submit");

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const wordArray = userInputWord.value.split("");

  const ulList = document.createElement("ul");
  ulList.style.listStyleType = "none";
  document.body.appendChild(ulList);

  for (let i = 0; i < wordArray.length; i++) {
    const listLi = document.createElement("li");
    listLi.textContent = wordArray[i];
    ulList.appendChild(listLi);
  }
});
