// script.js

// Base de dados simulada
let users = [];
let userId = 1;

// Elementos da interface
const userList = document.getElementById("user-list");
const modal = document.getElementById("modal");
const openFormBtn = document.getElementById("open-form-btn");
const closeFormBtn = document.getElementById("close-form-btn");
const userForm = document.getElementById("user-form");

// Função para renderizar usuários na tabela
function renderUsers() {
    userList.innerHTML = "";
    users.forEach(user => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td><button class="deletar-btn">Deletar</button></td>
        `;
        userList.appendChild(row);
    });
}

// Abrir o modal de cadastro
openFormBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
});

// Fechar o modal de cadastro
closeFormBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
});

// Salvar novo usuário
userForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = userForm.name.value;
    const email = userForm.email.value;
    const phone = userForm.phone.value;
    const password = userForm.password.value;

    // Adiciona o novo usuário (senha não será exibida)
    users.push({ id: userId++, name, email, phone });

    // Atualiza a tabela
    renderUsers();

    // Limpa o formulário e fecha o modal
    userForm.reset();
    modal.classList.add("hidden");

    console.log("Usuário cadastrado com sucesso:", { name, email, phone, password });
});

// Deletar produto da tabela
userList.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("deletar-btn")) {
        const linha = e.target.closest("tr");
        linha.remove(); // Remove a linha da tabela
    }
});