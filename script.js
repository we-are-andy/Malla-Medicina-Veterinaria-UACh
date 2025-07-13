const datos = {
    "1° Semestre": [
        "BIOLOGIA CELULAR", "ZOOLOGIA Y ECOLOGIA APLICADA", "EDUCACIÓN FÍSICA Y SALUD",
        "OPTATIVO DE FORMACION GENERAL I", "ELEMENTOS DE CALCULO",
        "PRACTICA INTRODUCCION A LA MEDICINA VETERINARIA I", "QUIMICA GENERAL"
    ],
    "2° Semestre": [
        "ANATOMIA VETERINARIA", "EMBRIOLOGIA VETERINARIA", "OPTATIVO DE FORMACION GENERAL II",
        "BIOQUIMICA VETERINARIA", "HISTOLOGIA", "PRACTICA INTRODUCCION A LA MEDICINA VETERINARIA II"
    ],
};

const prerrequisitos = {
    "ANATOMIA VETERINARIA": ["BIOLOGIA CELULAR"],
    "EMBRIOLOGIA VETERINARIA": ["BIOLOGIA CELULAR"],
    "BIOQUIMICA VETERINARIA": ["BIOLOGIA CELULAR"],
    "HISTOLOGIA": ["BIOLOGIA CELULAR"],
    "PRACTICA INTRODUCCION A LA MEDICINA VETERINARIA II": ["PRACTICA INTRODUCCION A LA MEDICINA VETERINARIA I"]
};

const container = document.querySelector(".semestres-container");

for (const [semestre, ramos] of Object.entries(datos)) {
    const col = document.createElement("div");
    col.className = "semestre";
    col.innerHTML = `<h2>${semestre}</h2>`;
    ramos.forEach(ramo => {
        const div = document.createElement("div");
        div.className = "ramo";
        div.textContent = ramo;
        div.dataset.nombre = ramo;
        div.onclick = () => marcarHabilitados(ramo);
        col.appendChild(div);
    });
    container.appendChild(col);
}

function marcarHabilitados(nombre) {
    document.querySelectorAll(".ramo").forEach(el => {
        el.classList.remove("habilitado");
    });

    for (const [ramo, pre] of Object.entries(prerrequisitos)) {
        if (pre.includes(nombre)) {
            const selector = `.ramo[data-nombre="${ramo}"]`;
            const el = document.querySelector(selector);
            if (el) el.classList.add("habilitado");
        }
    }
}

