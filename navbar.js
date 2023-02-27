const liElements = document.querySelectorAll(".navbar li.items")
const hamburgerButton = document.querySelector(".btn")
hamburgerButton.addEventListener("click", (e)=>{
    liElements.forEach(element => {
        element.classList.toggle("hide");
    });
});