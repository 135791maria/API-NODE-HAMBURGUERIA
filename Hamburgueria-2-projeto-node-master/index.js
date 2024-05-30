const express = require("express");
const uuid = require("uuid");
const cors = require("cors")
const port = 3001; // Alterado para um número de porta válido

const app = express();
app.use(express.json());
app.use(cors())

const order = []

const checkOrderId = (request, response, next) => {
  const { id } = request.params;
  const index = order.findIndex(orde => orde.id === id);
  if (index < 0) {
    return response.status(404).json({ error: "Order not found" });
  }
  request.ordeIndex = index; // Corrigido para atribuir o índice correto
  request.ordeId = id;
  next();
};

const myFirstMiddleware = (request, response, next) => {
  console.log("Request URL:", request.originalUrl);
  console.log("Request Type:", request.method);
  next();
};
app.use(myFirstMiddleware);

app.get("/order", (request, response) => {
  console.log("GET /order");
  return response.json(order);
});

app.post("/order", (request, response) => {
  console.log("POST /order");

  const { pedido, clientName, price, status } = request.body;

  const orde = { id: uuid.v4(), pedido, clientName, price, status };
  order.push(orde);
  return response.status(201).json(orde);
});

app.put("/order/:id", checkOrderId, (request, response) => {
  console.log("PUT /order/:id");
  const { pedido, clientName, price } = request.body;
  const index = request.ordeIndex;
  const id = request.ordeId;
  const updateOrde = { id, pedido, clientName, price };
  order[index] = updateOrde;
  return response.json(updateOrde);
});

app.delete("/order/:id", checkOrderId, (request, response) => {
  console.log("DELETE /order/:id");
  const { id } = request.params;
  const index = request.ordeIndex;
  order.splice(index, 1);
  return response.status(204).json();
});

app.get("/order/:id", (request, response) => {
  console.log("GET /order/:id");
  const { id } = request.params;
  const orde = { id, pedido: "1 x salada 1 batata palha 1 coca-cola" };
  return response.json(orde);
});
app.patch("/order/:id", checkOrderId, (request, response) => {
  console.log("PATCH /order/:id");
  const { id } = request.params;
  const { pedido, clientName, price, status } = request.body;
  const patchOrde = { id, pedido, clientName, price, status: "pronto" };
  const index = request.ordeIndex;
  order[index] = patchOrde;
  return response.json(patchOrde);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

