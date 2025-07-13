const materias = document.querySelectorAll('.materia');
let seleccionadas = new Set();

materias.forEach(materia => {
    materia.addEventListener('click', () => {
        // Alternar selección
        if (seleccionadas.has(materia.id)) {
            seleccionadas.delete(materia.id);
            materia.classList.remove('seleccionada');
        } else {
            seleccionadas.add(materia.id);
            materia.classList.add('seleccionada');
        }
    });
});

document.getElementById('boton').addEventListener('click', () => {
    materias.forEach(materia => {
        const prereqs = materia.dataset.prereq;
        if (prereqs === 'none') {
            materia.classList.add('habilitada');
        } else {
            const prereqArray = prereqs.split(',');
            const cumple = prereqArray.every(pr => seleccionadas.has(pr));
            if (cumple) {
                materia.classList.add('habilitada');
            } else {
                materia.classList.remove('habilitada');
            }
        }
    });
});
