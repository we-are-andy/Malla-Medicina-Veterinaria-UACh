async function cargarMalla() {
  const res = await fetch('data.json');
  const data = await res.json();

  const container = document.getElementById('malla-container');
  const maxSemestre = Math.max(...data.map(r => r.semestre));

  for (let s = 1; s <= maxSemestre; s++) {
    const col = document.createElement('div');
    col.className = 'semestre';
    col.innerHTML = `<h3>Semestre ${s}</h3>`;
    data.filter(r => r.semestre === s).forEach(ramo => {
      const div = document.createElement('div');
      div.className = 'ramo';
      div.title = ramo.prerrequisitos.length ? "Prerrequisitos: " + ramo.prerrequisitos.join(", ") : "Sin prerrequisitos";
      div.textContent = ramo.nombre;
      col.appendChild(div);
    });
    container.appendChild(col);
  }
}

cargarMalla();
