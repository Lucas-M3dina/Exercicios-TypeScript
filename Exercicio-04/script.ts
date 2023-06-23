interface Produto {
  descricao: string;
  garantia: string;
  preco: number;
  nome: string;
  seguroAcidentes: boolean;
  empresaFabricante: Empresa;
  empresaMontadora: Empresa
}

interface Empresa {
  pais: string;
  fundacao: number;
  nome: string;
}




async function fetchProduct() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const data = await response.json();
  showProduct(data);
}

fetchProduct();

function showProduct(data : Produto) {
  document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
      <p>${data.preco}</p>
      <div>
        <h3>Montadora: ${data.empresaMontadora.nome}</h3>
      </div>

      <div>
        <h3>Fabricante: ${data.empresaFabricante.nome}</h3>
      </div>
    </div>
  `;
}

