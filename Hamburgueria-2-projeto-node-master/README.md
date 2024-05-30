<h1> API de hamburgueria </h1> Olá boa noite, quero aqui mostar meu desafio node concluido.
Nesse desafio o nosso mentor Rodolfo Mori pediu para que nos 
fizessemos assim,
criar uma aplicação que fara o cadastro dos pedidos de uma hamburgueri, e voce deve itilizar NODE e EXPRESS.

<h2>ROTAS</h2>
<br>
<br>
POST /order: A rota deve receber o pedido do cliente, o nome do cliente e o valor do pedido, essas informaçoes devem
ser passadas dentro do corpo(body) da requisiçao e com essas informaçoes voce deve registrar o novo pedido dentro 
de um array no seguinte formato: {id: order: clientName: staus: "em preparaçao" }. Nao se esqueca que o id deve ser gerado por voce,
dentro do código utilizando uuid v4, assim que o pedido é criado, vocé deve sempre colocar o status em preparação. 
<br>
<br>
GET /order: Rotas que listas todos os pedidos ja feitos.
<br>
<br>
PUT /order/:id: essa rota deve alterar um pedido ja feito. pode alterar um ou todos os dados dos pedido. o id do pedido deve ser
enviado nos parametros da rota.
<br>
<br>
DELETE /order/:id:essa rota deve deletar um pedido ja feito com id enviadonos parametros dav rota.
<br>
<br>
GET/order/:id:Essa rota recebe o id nos parametros e deve retornar um pedido especifico.
<br>
<br>
PATCH /order/:id: Essa rota recebe o id nos parametros e assim quela for chamada, deve colocar o status do pedido como  pronto. 
<img src="Insomnia 17_12_2023 21_55_11.png"
,br>
<img src="Insomnia 17_12_2023 21_53_12.png">
<br>
<img src="Insomnia 17_12_2023 21_53_05.png">
