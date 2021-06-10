function llenarCheckbox(){
   
const contenedorSeleccionar = document.querySelector(".contenedorSeleccionar")

let consultaEmpleado = ["Contratar",
    "Novedades", "Licencias remuneradas","Préstamos","Distribución contable","Documentos",
    "Ausentismos","Primas","Certificado de ingresos","Retiros","Modificación de salario","Cesantías",
    "PILA","Nómina electrónica","Nómina de ingresos","Contabilidad","Administración de fondos","Vacaciones",
    "Conceptos fijos", "Retención en la fuente" , "Incapacidades"
]
for (let i = 0; i < consultaEmpleado.length; i++) {

    let contenedorCheckbox = document.createElement("div");
    contenedorCheckbox.classList.add("contenedorCheckbox");

    let labelCheckbox = document.createElement("label");
    labelCheckbox.classList.add("labelCheckbox")
    labelCheckbox.innerText=consultaEmpleado[i];
    contenedorCheckbox.append(labelCheckbox);

    let inputCheckbox = document.createElement("input");
    inputCheckbox.type="checkbox";
    inputCheckbox.classList.add("checkbox");
    contenedorCheckbox.append(inputCheckbox);

    contenedorSeleccionar.append(contenedorCheckbox);
}
return contenedorSeleccionar
}
llenarCheckbox()

let checkbox = document.querySelectorAll('.checkbox');
checkbox.forEach(check => {
    check.addEventListener( 'change', valircheckbox )
});
function valircheckbox(){
    let contenedorCheckbox= document.querySelector('.contenedorCheckbox');
    let labelCheckbox = document.querySelector(".labelCheckbox")
    let checkbox = document.querySelector('.checkbox');
        if(this.checked) {
            contenedorCheckbox.classList.add("colorEmpleado")
            labelCheckbox.style.color="#0784BA"
         }
         else{
            contenedorCheckbox.classList.remove("colorEmpleado")
            labelCheckbox.classList.remove("colorLabel")
         }
    
   
}
