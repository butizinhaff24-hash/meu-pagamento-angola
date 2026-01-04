const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Configuração para o servidor entender o que é escrito no formulário
app.use(express.urlencoded({ extended: true }));

// 1. Página Inicial com o Formulário de Pagamento
app.get('/', (req, res) => {
  res.send(`
    <body style="font-family: sans-serif; text-align: center; padding: 40px; background-color: #f4f4f4;">
      <div style="background: white; display: inline-block; padding: 30px; border-radius: 15px; shadow: 0px 4px 10px rgba(0,0,0,0.1);">
        <h1 style="color: #d32f2f;">🇦🇴 Pagamentos Angola</h1>
        <p>Preencha os dados abaixo:</p>
        
        <form action="/confirmar" method="POST" style="text-align: left;">
          <label>Nome do Cliente:</label><br>
          <input type="text" name="cliente" required style="width: 100%; padding: 10px; margin: 10px 0;"><br>
          
          <label>Valor do Serviço (Kz):</label><br>
          <input type="number" name="valor" required style="width: 100%; padding: 10px; margin: 10px 0;"><br>
          
          <button type="submit" style="width: 100%; background: #2e7d32; color: white; border: none; padding: 12px; border-radius: 5px; cursor: pointer; font-size: 16px;">
            Gerar Referência
          </button>
        </form>
      </div>
    </body>
  `);
});

// 2. Página que recebe os dados e "processa" o pagamento
app.post('/confirmar', (req, res) => {
  const { cliente, valor } = req.body;
  res.send(`
    <body style="font-family: sans-serif; text-align: center; padding: 40px;">
      <h2 style="color: #2e7d32;">✅ Pedido Registado!</h2>
      <p><strong>Cliente:</strong> ${cliente}</p>
      <p><strong>Valor a Pagar:</strong> ${valor} Kz</p>
      <hr>
      <p>Estamos a processar a sua Referência Multicaixa...</p>
      <a href="/" style="color: #d32f2f;">Voltar ao início</a>
    </body>
  `);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
