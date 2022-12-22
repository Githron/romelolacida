
const toggleButton = document.getElementsByClassName('ri-menu-line')[0]
const sideBar = document.getElementsByClassName('sidebar')[0]


toggleButton.addEventListener('click', () => {
    sideBar.classList.toggle('active')
})