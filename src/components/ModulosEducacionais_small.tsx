let limit: number = 3;
let page: number = 1;

const url: string = `http://0.0.0.0:3004/cursos?_page=${page}&_limit=${limit}`;

fetch(url)
  .then((res) => res.json())
  .then((jsonBody) => jsonBody.results)
  .then((cursosLista) => {
    for (let index = 0; index < cursosLista.length; index++) {
      const cursos = cursosLista[index];
    }
  });
//.catch((error) => console.log(error));

function listaModulosEducacionaisSmall(cursos: string[]) {
  return (
    <>
      <li className="modulo">
        <img src="" alt="" />
        <div>
          <span>{`${cursos}`}</span>
          <span>a</span>
        </div>
        <div>
          <span>a</span>
          <span>a</span>
          <span>a</span>
        </div>
        <button>a</button>
      </li>
    </>
  );
}

export default function ModulosEducacionais_small() {
  return (
    <>
      <h2>ModulosEducacionais_small</h2>
      <div>
        <div>Mais populares</div>
        {/* Conteúdo paginado */}
        <div>
          <ol id="modulos-lista">
            {`${listaModulosEducacionaisSmall}`}
          </ol>
        </div>
      </div>
      <span>Ver mais</span>
    </>
  );
}
