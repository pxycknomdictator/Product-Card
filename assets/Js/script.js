// menu bar script

const menuButton = document.querySelector("#menubtn");
const crossMenuButton = document.querySelector("#cross");

menuButton.addEventListener("click", () => {
    document.querySelector("#list").style.left = "0"
})

crossMenuButton.addEventListener("click", () => {
    document.querySelector("#list").style.left = "-400px"
})

// increament and decreament script

const increamentContainer = document.querySelector("#quantity-boxx");
let number = document.querySelector("#number");
let counter = 0;

const checkquantity = (value) => {
    return (value >= 0) ? value++ : 0;
}

increamentContainer.addEventListener("click", (event) => {
    event.preventDefault()

    try {
        if (event.target.className === "plus") {
            counter += 1
        } else if (event.target.className === "minus") {
            counter -= 1
        } else {
            return false
        }
        number.innerText = (checkquantity(counter));
    } catch (error) {
        console.log(error);
    }
})


