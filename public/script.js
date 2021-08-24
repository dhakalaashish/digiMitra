//nav-toggle
const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

navToggle.addEventListener('click', () => {
    links.classList.toggle('show-links')
})

//sticky-scroll
const nav = document.querySelector('.nav')

window.addEventListener('scroll', () => {
    const navHeight = nav.getBoundingClientRect().height;
    const scrollHeight = window.scrollY;
    if (scrollHeight >= navHeight) {
        nav.classList.add('sticky-nav')
    }
    if (scrollHeight < navHeight) {
        nav.classList.remove('sticky-nav')
    }
})

nav.addEventListener('click', () => {
    nav.classList.remove('sticky-nav');
})
