const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Permite que o servidor entenda dados enviados por formulários
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Página Inicial
app.get('/', (req, res) => {
  res.send(`
    <h1>Sistema de Pagamento Angola</h1>
    <p>Status: <span style="color: green">Online</span></p>
    <button onclick="alert('Integração de pagamento em breve!')">Simular Pagamento</button>
  `);
});

// Uma rota para simular o recebimento de um pagamento
app.post('/pagar', (req, res) => {
  const { valor } = req.body;
  res.json({ mensagem: `Processando pagamento de ${valor} Kz` });
});

app.listen(port, () => {
  console.log(`Servidor a rodar na porta ${port}`);
});
