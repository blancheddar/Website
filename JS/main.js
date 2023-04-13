const scrollbtn = document.querySelector('.scroll-button');

window.addEventListener('scroll', checkheight)

function checkheight() {
    if(window.scrollY > 300) {
        scrollbtn.style.display = "flex"
    } else {
        scrollbtn.style.display = "none"
    }
}

scrollbtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})