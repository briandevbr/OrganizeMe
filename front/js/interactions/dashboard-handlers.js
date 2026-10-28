 const adicionarProduto = document.getElementById("add-product");
 const confirmarProduto = document.getElementById("confirmar-produto");
 const cancelarProduto = document.getElementById("cancelar-produto");

 // Quando o botão "add" é clicado, exibe o formulário de adição de produto
 adicionarProduto.addEventListener("click", function () { 
     document.querySelector(".info-add-item-oculto").classList.add("info-add-item-ativo");
 })
 // Quando o botão "cancelar" dentro for formulario é clicado, oculta o formulário de adição de produto
 cancelarProduto.addEventListener("click", function () {
     document.querySelector(".info-add-item-oculto").classList.remove("info-add-item-ativo");
 })     

// Adiciona o produto à lista de produtos dependo do que foi preenchido no formulário
confirmarProduto.addEventListener("click", function () { 
     const produtosContainer = document.querySelector(".produtos");
     const novoProduto = document.createElement("div");
     const nomeProduto = document.getElementById("nome-produto").value;
     const descricaoProduto = document.getElementById("descricao-produto").value;
     const valorProduto = document.getElementById("valor-produto").value;
        novoProduto.classList.add("produto-exemplo");
        novoProduto.innerHTML = `<p>${nomeProduto}</p><p>${descricaoProduto}</p><p>R$ ${valorProduto}</p>`;//
        produtosContainer.appendChild(novoProduto);

    // Limpar os campos do formulário após adicionar o produto
    document.getElementById("nome-produto").value = "";
    document.getElementById("descricao-produto").value = "";
    document.getElementById("valor-produto").value = "";
 });
 