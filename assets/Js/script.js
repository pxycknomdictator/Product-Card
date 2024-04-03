// menu bar script

const menuButton = document.querySelector("#menubtn");
const crossMenuButton = document.querySelector("#cross");

menuButton.addEventListener("click", () => {
    document.querySelector("#list").style.left = "0"
})

crossMenuButton.addEventListener("click", () => {
    document.querySelector("#list").style.left = "-400px"
})


// Slider script

const slidesContainer = document.querySelector(".mini-images-container");
const slideImages = document.querySelector(".slides")

slidesContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "IMG") {
        slideImages.src = event.target.src;
    }
    return false
})

// close cart script

const crossCart = document.querySelector("#cart-cross");
crossCart.addEventListener("click", () => {
    dropdown.style.display = "none"
})

// increament and decreament script

let counter = 0;
const increamentContainer = document.querySelector("#quantity-boxx");
const cartdesription = document.querySelector(".cart-information")
const amount = document.querySelector(".amount")
let number = document.querySelector("#number");
let points = document.querySelector("#points");
const addToCartBtn = document.querySelector("#btn");
const removeitems = document.querySelector(".deletesvg")

removeitems.addEventListener("click", () => {
    removedescript()
})
addToCartBtn.addEventListener("click", () => {
    showitems()
})


const checkquantity = (value) => {
    if (value > 0) {
        return value++
    } else if (value < 0 || value === 0) {
        counter = 0;
        number.textContent = "0";
        points.textContent = "0"
    }
}

const showitems = () => {
    cartdesription.style.display = "block"
    empty.style.display = "none"
}

const showcart = () => {
    dropdown.style.display = "block"
}


increamentContainer.addEventListener("click", (event) => {
    event.preventDefault()

    if (event.target.className === "plus") {
        points.style.opacity = "1"
        counter += 1
    } else if (event.target.className === "minus") {
        counter -= 1
    } else {
        return false
    }
    number.textContent = checkquantity(counter);
    points.textContent = checkquantity(counter)
    amount.innerHTML = checkquantity(counter)

})


// Add to Cart script

const profile = document.querySelector("#cart");
const dropdown = document.querySelector("#drop-menu");
const empty = document.querySelector(".empty")

profile.addEventListener("click", () => {
    showcart()
})

const removedescript = () => {
    empty.style.display = "block";
    cartdesription.style.display = "none"
    points.style.opacity = "0"
    number.textContent = "0"
}
removedescript()
