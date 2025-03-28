const clickedButton = document.querySelector("button");

const popUp = document.querySelector(".desc__profile--hidden");

function displayBox (){
    popUp.style.display = "flex";
}

clickedButton.addEventListener("click", displayBox);