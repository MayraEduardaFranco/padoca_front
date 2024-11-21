// Referências aos elementos
const abrirModalBtn = document.getElementById("abrir-modal-btn");
const modal = document.getElementById("modal");
const fecharModalBtn = document.getElementById("fechar-modal-btn");
const formCadastrarProduto = document.getElementById("form-cadastrar-produto");
const estoqueTable = document.getElementById("estoque-table").getElementsByTagName('tbody')[0];

// Função para abrir o modal
abrirModalBtn.addEventListener("click", () => {
    modal.style.display = "flex"; // Exibe o modal
});

// Função para fechar o modal
fecharModalBtn.addEventListener("click", () => {
    modal.style.display = "none"; // Oculta o modal
});

// Adicionar um novo produto ao estoque
formCadastrarProduto.addEventListener("submit", (e) => {
    e.preventDefault();

    const nomeProduto = document.getElementById("produto").value.trim();
    const quantidade = document.getElementById("quantidade").value.trim();
    const preco = document.getElementById("preco").value.trim();
    const data = document.getElementById("data").value.trim();

    // Validação simples dos campos
    if (!nomeProduto || !quantidade || !preco || !data || preco <= 0 || quantidade <= 0) {
        alert("Por favor, preencha todos os campos corretamente!");
        return;
    }

    // Adiciona o novo produto na tabela
    const novaLinha = document.createElement("tr");
    novaLinha.innerHTML = `
        <td>${nomeProduto}</td>
        <td>${quantidade}</td>
        <td>R$ ${parseFloat(preco).toFixed(2)}</td>
        <td>${data}</td>
        <td><button class="deletar-btn">Deletar</button></td>
    `;
    estoqueTable.appendChild(novaLinha);

    // Fechar o modal
    modal.style.display = "none";

});

// Deletar produto da tabela
estoqueTable.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("deletar-btn")) {
        const linha = e.target.closest("tr");
        linha.remove(); // Remove a linha da tabela
    }
});
