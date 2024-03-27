const menuButton = document.querySelector("#menubtn");
const crossMenuButton = document.querySelector("#cross");

menuButton.addEventListener("click", () => {
    document.querySelector("#list").style.left = "0"
})

crossMenuButton.addEventListener("click", () => {
    document.querySelector("#list").style.left = "-400px"
})