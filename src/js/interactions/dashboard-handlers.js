const adicionarProduto = document.getElementById("add-product");
const removerProduto = document.getElementById("remove-product");
const cancelarProduto = document.getElementById("cancelar-produto");
const formProduto = document.getElementById("form-adicionar-produto");
const painelForm = document.querySelector(".info-add-item-oculto");

adicionarProduto.addEventListener("click", function () {
  painelForm.classList.add("info-add-item-ativo");
});

cancelarProduto.addEventListener("click", function () {
  painelForm.classList.remove("info-add-item-ativo");
});

formProduto.addEventListener("submit", function (event) {
  event.preventDefault(); // impede o recarregamento da página

  const produtosContainer = document.querySelector(".produtos");
  const nomeProduto = document.getElementById("nome-produto").value;
  const descricaoProduto = document.getElementById("descricao-produto").value;
  const valorProduto = document.getElementById("valor-produto").value;
  const arquivo = document.getElementById("importar-img").files[0];
  const urlImagem = arquivo ? URL.createObjectURL(arquivo) : "";

  const novoProduto = document.createElement("div");
  novoProduto.classList.add("produtos-exemplos");
  novoProduto.innerHTML = `
    <img src="${urlImagem}" alt="Imagem do produto ${nomeProduto}" class="produto-img" />
    <p>${nomeProduto}</p>
    <p>${descricaoProduto}</p>
    <p>R$ ${valorProduto}</p>`;

  // Botão de selecionar, criado junto com o produto
  const botaoSelecionar = document.createElement("button");
  botaoSelecionar.type = "button";
  botaoSelecionar.textContent = "Selecionar";
  botaoSelecionar.addEventListener("click", function () {
    const selecionado = novoProduto.classList.toggle("produtos-exemplos-selecionado");
    novoProduto.classList.toggle("produtos-exemplos", !selecionado);
    botaoSelecionar.textContent = selecionado ? "Selecionado" : "Selecionar";
  });
  novoProduto.appendChild(botaoSelecionar);

  produtosContainer.appendChild(novoProduto);

  // Limpa o formulário e fecha o painel
  formProduto.reset();
  painelForm.classList.remove("info-add-item-ativo");
});

removerProduto.addEventListener("click", function () {
  document
    .querySelectorAll(".produtos-exemplos-selecionado")
    .forEach(function (produto) {
      produto.remove();
    });
});