const salesTableBody = document.getElementById('sales-table-body');
const newSaleBtn = document.getElementById('new-sale-btn');
const newSaleForm = document.getElementById('new-sale-form');
const overlay = document.getElementById('overlay');
const saleForm = document.getElementById('sale-form');
const cancelBtn = document.getElementById('cancel-btn');
const salesListSection = document.getElementById('sales-list');

// Armazena vendas em memória
const sales = [];

// Exibe o formulário e o overlay
newSaleBtn.addEventListener('click', () => {
  newSaleForm.classList.remove('hidden');
  overlay.classList.remove('hidden');
  salesListSection.classList.add('hidden');
});

// Oculta o formulário e o overlay
cancelBtn.addEventListener('click', () => {
  newSaleForm.classList.add('hidden');
  overlay.classList.add('hidden');
  salesListSection.classList.remove('hidden');
});

// Manipula o envio do formulário
saleForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const product = document.getElementById('product').value;
  const quantity = document.getElementById('quantity').value;
  const price = document.getElementById('price').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const client = document.getElementById('client').value;
  const paymentMethod = document.getElementById('payment-method').value;




  // Adiciona venda à lista
  sales.push({ product, quantity, price, date,time, client, paymentMethod });

  // Atualiza a tabela
  updateSalesTable();

  // Reseta o formulário
  saleForm.reset();
  cancelBtn.click(); // Fecha o formulário
});

// Atualiza a tabela de vendas
function updateSalesTable() {
  salesTableBody.innerHTML = '';
  sales.forEach((sale) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${sale.product}</td>
      <td>${sale.quantity}</td>
      <td>R$ ${parseFloat(sale.price).toFixed(2)}</td>
      <td>${sale.date}</td>
      <td>${time}</td>
      <td>${client}</td>
      <td>${paymentMethod}</td>
      <td><button class="deletar-btn">Deletar</button></td>
    `;
    salesTableBody.appendChild(row);
    
  });
}

// Deletar produto da tabela
salesTableBody.addEventListener("click", (e) => {
  if (e.target && e.target.classList.contains("deletar-btn")) {
      const linha = e.target.closest("tr");
      linha.remove(); // Remove a linha da tabela
  }
});
