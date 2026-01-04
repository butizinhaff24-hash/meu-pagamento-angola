app.jsconst express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Sistema de Pagamento Angola</h1><p>O servidor está online e funcional!</p>');
});

app.listen(port, () => {
  console.log(`Servidor a rodar na porta ${port}`);
});
