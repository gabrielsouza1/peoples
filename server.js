const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
  const customers = [
   {"id": 1,"name": "My name 1","cpf": "04080757247","phone": "11987654321","email": "myemail1@test.com.br"},
    {"id": 2,"name": "My name 2","cpf": "77797584192","phone": "11987654321", "email": "myemail2@test.com.br"},
    {"id": 3,"name": "My name 3","cpf": "45486737688","phone": "11987654321","email": "myemail3@test.com.br"},
    {"id": 4,"name": "My name 4","cpf": "74668869066","phone": "11987654321","email": "myemail4@test.com.br"},
  ];

  res.json(customers);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
