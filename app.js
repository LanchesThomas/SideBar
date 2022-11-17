const sideBarToggle = document.querySelector('.sidebar-toggle');
const sideBar = document.querySelector('.sidebar');
console.log(sideBar, sideBarToggle);

showSideBar();

function showSideBar() {
    sideBarToggle.addEventListener('click', () => {
        sideBar.classList.toggle('show-sidebar');
    });
}
