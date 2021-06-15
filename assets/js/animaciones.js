let checkbox = document.querySelectorAll('.checkbox');
checkbox.forEach(check => {
    check.addEventListener('change', valircheckbox)
});

function valircheckbox() {
    let contenedorCheckbox = document.querySelector('.contenedorCheckbox');
    let labelCheckbox = document.querySelector(".labelCheckbox")
    let checkbox = document.querySelector('.checkbox');
    console.log(this.checked)
    if (this.checked) {
        contenedorCheckbox.classList.add("colorEmpleado")
        labelCheckbox.style.color = "#0784BA"
    } else {
        contenedorCheckbox.classList.remove("colorEmpleado")
        labelCheckbox.classList.remove("colorLabel")
    }


}