
let btnMenu = document.getElementById('hamburgerMenuIcon');
let getMenu = document.getElementById("menu");
let toggleMenuVisible = false;
let toggleHover = false

const setVisible = function () {
    getMenu.classList.remove('menuClose');
    getMenu.classList.add('menuOpen');
}
const setHidden = function () {
    getMenu.classList.remove('menuOpen');
    getMenu.classList.add('menuClose');
}

btnMenu.addEventListener('click', function (e) {
    if (toggleHover === true && toggleMenuVisible === false) {
        setVisible();
        toggleMenuVisible = true;
    }

    else {
        setHidden();
        toggleMenuVisible = false;
    }
});

btnMenu.addEventListener('mouseover', function (e) {
    setVisible()
    toggleHover = true
});

btnMenu.addEventListener('mouseout', function (e) {
    if (toggleMenuVisible === true) { }
    else {
        setHidden()
        toggleHover = false
    }
});

var menuColor = document.getElementById("menu")
var liColor = document.querySelectorAll('#menu li')

liColor.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        document.body.style.backgroundColor = e.target.children[0].value
        document.getElementById("textColor").innerHTML = "The color of the background is: " + e.target.children[0].value;
        e.target.children[0].checked = true;
        setHidden()
        toggleMenuVisible = false;
    });
});

document.addEventListener('keypress', function (e) {
    const colorByNumber = menuColor.children[e.key - 1].children[0]
    document.body.style.backgroundColor = colorByNumber.value
    document.getElementById("textColor").innerHTML = "The color of the background is: " + colorByNumber.value;
    colorByNumber.checked = true;
});

