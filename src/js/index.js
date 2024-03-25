const buttons = document.querySelectorAll(".button");
const characters = document.querySelectorAll(".character");

buttons.forEach((button, index) => {
	button.addEventListener("click", () => {
		disableButton();
		disableCharacter();

		button.classList.add("selected");
		characters[index].classList.add("selected");
	});
});

function disableCharacter() {
  const characterSelected = document.querySelector(".character.selected");
  characterSelected.classList.remove("selected");
}

function disableButton() {
  const buttonSelected = document.querySelector(".button.selected");
  buttonSelected.classList.remove("selected");
}