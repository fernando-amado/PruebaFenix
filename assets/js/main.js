let contenedorMain = [{
        titulo: "Liquidar",
        subtitulo: "Seleccione las opciones a las que su nuevo rol tendrá acceso al momento de liquidar.",
        color: "#0784BA",
        contenedoresDivs: [{
                titulo: "Consulta de empleados",
                checkbox: ["Contratar",
                    "Novedades", "Licencias remuneradas", "Préstamos", "Distribución contable", "Documentos",
                    "Ausentismos", "Primas", "Certificado de ingresos", "Retiros", "Modificación de salario", "Cesantías",
                    "PILA", "Nómina electrónica", "Nómina de ingresos", "Contabilidad", "Administración de fondos", "Vacaciones",
                    "Conceptos fijos", "Retención en la fuente", "Incapacidades"
                ],
                descripcion: "Opciones de administración a información de empleado",
                icono: "./assets/img/icon_empleados.svg",
            },
            {
                titulo: "Descarga de reportes",
                checkbox: ["Contratar",
                    "Novedades", "Licencias remuneradas", "Préstamos", "Distribución contable", "Documentos",
                    "Ausentismos", "Primas", "Certificado de ingresos", "Retiros", "Modificación de salario", "Cesantías",
                    "PILA", "Nómina electrónica", "Nómina de ingresos", "Contabilidad", "Administración de fondos", "Vacaciones",
                    "Conceptos fijos", "Retención en la fuente", "Incapacidades"
                ],
                descripcion: "",
                icono: "./assets/img/icon_descargas.svg",
            },
            {
                titulo: "Procesos periódicos",
                checkbox: ["Primas semestrales",
                    "Cálculo porcentaje retención en la fuente", "Generar certificadosde ingresos y retenciones", 
                    "Aumentos de salario mínimo", "Cesantías anualese"
                ],
                descripcion: "",
                icono: "./assets/img/icon_descargas.svg",
            }
        ]

    },
    {
        titulo: "Pagar",
        subtitulo: "Seleccione las opciones a las que su nuevo rol tendrá acceso al momento de pagar.",
        color: "#056087",
        contenedoresDivs:[ {
            titulo: "Pagar",
            checkbox: ["Tesorería",
                "Contabilidad", "Generar PILA"
            ],
            descripcion: "Cerrar el periodo, generar PILA, realizar pagos de tesorería y cerrar contabilidad.",
            icono: "./assets/img/icon_pagar.svg",
        },
    
    ]

    },
    {
        titulo: "Configurar y gestionar",
        subtitulo: "Acceso a configuraciones del sistema, configuración de ítems y configuraciones de gestión",
        color: "#013B68",
        contenedoresDivs:[ {
            titulo: "Opciones de gestión",
            checkbox: ["Gestionar usuarios",
                "Gestionar permisos", "Gestionar nóminas"
            ],
            descripcion: "Agregar y gestionar usuarios, gestionar los permisos de usuarios a empresas, crear nóminas y gestionarlas.",
            icono: "./assets/img/icon_gestion.svg",
        },
        {
            titulo: "Opciones de configuración",
            checkbox: ["Configuración de items",
                "Maestros de configuración", "Configuración del sistema"
            ],
            descripcion: "Realizar todas las configuraciones del sistema.",
            icono: "./assets/img/icon_config.svg",
        },
    
    ]

    }
]

const llenarDivsMain = (informaciónDivs, sectionPrincipal) => {

    for (let i = 0; i < informaciónDivs.length; i++) {

        let divsSectionPago = document.createElement("div");
        divsSectionPago.classList.add("divsSectionPago");

        let header = document.createElement("header");
        divsSectionPago.append(header);

        let img = document.createElement("img");
        img.src = informaciónDivs[i].icono;
        header.append(img);

        let divHeaderTexto = document.createElement("div");
        divHeaderTexto.classList.add("headerTexto");
        header.append(divHeaderTexto);

        let divTextoPrincipal = document.createElement("div");
        divTextoPrincipal.classList.add("textoPrincipal");
        divHeaderTexto.append(divTextoPrincipal);

        let tituloHeader = document.createElement("h4");
        tituloHeader.innerText = informaciónDivs[i].titulo;
        divTextoPrincipal.append(tituloHeader);

        let parrafoHeader = "";

        informaciónDivs[i].descripcion === "" ? "No hay descripcion" :
            parrafoHeader = document.createElement("p");
        parrafoHeader.innerText = informaciónDivs[i].descripcion;

        divTextoPrincipal.append(parrafoHeader);

        let divseleccionarDeshacer = document.createElement("div");
        divseleccionarDeshacer.classList.add("seleccionarDeshacer");
        divHeaderTexto.append(divseleccionarDeshacer);

        let spanSeleccionar = document.createElement("span");
        spanSeleccionar.innerText = "Seleccionar todos";
        let spanDeshacer = document.createElement("span");
        spanDeshacer.innerText = "Deshacer todos";
        divseleccionarDeshacer.append(spanSeleccionar, spanDeshacer)

        sectionPrincipal.append(divsSectionPago);
        let checkbox = informaciónDivs[i].checkbox;
        llenarCheckbox(checkbox, divsSectionPago)
    }



    return sectionPrincipal;

}


const llenarMain = (contenedorMain) => {
    let mainContenedorPermisos = document.querySelector('.seleccionarPermisos');
    for (let i = 0; i < contenedorMain.length; i++) {
        let sectionPagos = document.createElement("section");
        sectionPagos.classList.add("seccionesPagos");

        let headerPrincipal = document.createElement("header");
        headerPrincipal.classList.add("headerSecciones","margenHeader")
        headerPrincipal.style.backgroundColor = contenedorMain[i].color;
        let tituloPrincipal = document.createElement("h3");
        tituloPrincipal.classList.add("tituloSeccionesPago");
        tituloPrincipal.innerText = contenedorMain[i].titulo;
        headerPrincipal.append(tituloPrincipal);

        let parrafoPrincipal = document.createElement("p");
        parrafoPrincipal.classList.add("parrafoSeccionesPago");
        parrafoPrincipal.innerText = contenedorMain[i].subtitulo;
        headerPrincipal.append(parrafoPrincipal);

        sectionPagos.append(headerPrincipal);
        let contenedoresDivs = contenedorMain[i].contenedoresDivs

        llenarDivsMain(contenedoresDivs, sectionPagos)

        mainContenedorPermisos.append(sectionPagos);

    }
    return mainContenedorPermisos;

}
llenarMain(contenedorMain)




function llenarCheckbox(checkbox, divsSectionPago) {
    let contenedorSeleccionar = document.createElement("section");
    contenedorSeleccionar.classList.add("contenedorSeleccionar");
    for (let i = 0; i < checkbox.length; i++) {

        let contenedorCheckbox = document.createElement("div");
        contenedorCheckbox.classList.add("contenedorCheckbox");

        let labelCheckbox = document.createElement("label");
        labelCheckbox.classList.add("labelCheckbox")
        labelCheckbox.innerText = checkbox[i];
        contenedorCheckbox.append(labelCheckbox);

        let inputCheckbox = document.createElement("input");
        inputCheckbox.type = "checkbox";
        inputCheckbox.classList.add("checkbox");
        contenedorCheckbox.append(inputCheckbox);

        contenedorSeleccionar.append(contenedorCheckbox);
    }
    divsSectionPago.append(contenedorSeleccionar)
    return divsSectionPago;

}

