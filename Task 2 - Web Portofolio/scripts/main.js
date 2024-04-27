// Toogle and Responsive Navigation
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navList = document.querySelector("nav");

    burger.addEventListener("click", () => {
        navList.classList.toogle("nav-active");
        burger.classList,toogle("toogle-burger");
    })
}


// Clear form before unload
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
}