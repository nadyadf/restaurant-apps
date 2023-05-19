const navElement = document.getElementById('navbar');

navElement.addEventListener('click', () => {
    if (navElement.className === "navbar") {
        navElement.classList.add("responsive");
        console.log(navElement.classList)
    } else {
        navElement.classList.remove("responsive");
    }
});