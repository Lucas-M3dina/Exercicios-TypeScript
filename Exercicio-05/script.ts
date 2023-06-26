interface Cursos{
  nome : string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  tags: string[];
  idAulas: number[];
  nivel: 'avancado' | 'iniciante';	

}

async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const data = await response.json();
  mostrarCursos(data);
  console.log(data);
}

fetchCursos();

function mostrarCursos(curso : Cursos[]) {
  curso.forEach((curso) => {
    document.body.innerHTML += `
    <div>
      <h2 style="color :${curso.nivel == 'avancado' ? "red;" : "blue;"}">${curso.nome}</h2>
      <p>Horas: ${curso.horas}</p>
      <p>Aulas: ${curso.aulas}</p>
      <p>${curso.gratuito ? 'Gratuito' : "Pago" }</p>
      <p>${curso.tags.join(", ")}</p>
      <p>${curso.idAulas.join(" | ")}</p>
    </div>
  `;
  })
  

}
