var modal = document.getElementById("myModalregister")
var btn = document.getElementById("header__navbar-item--dk")
var span = document.getElementById('comback')

btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none"
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}

var modallogin = document.getElementById("modal__login")
var btnlogin = document.getElementById("header__navbar-item--reguitr")
var spanz = document.getElementById("combackz")

btnlogin.onclick = function () {
    modallogin.style.display = "block"
}
spanz.onclick = function () {
    modallogin.style.display = "none"
}

