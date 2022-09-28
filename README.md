# api-entrega-nodejs

### 1 - Sobre

Este projeto consiste na criação de uma api de gerenciamento de entregas, onde o cliente poderá solicitar que a entrega de um item, e um deliveryman poderá escolher realizar esta entrega.

### 2 - Executando a API

Para executar a API, deverá seguir os seguintes passos.

#### 1. Clonando o repositório

```git clone```

#### 2. Carregando as dependências instaladas

```yarn```

#### 3. Subindo o container(docker) do banco de dados OBS: Para subir o container o mesmo deverá ter o docker instalado e configurado na máquina, caso o contrário utilizar outras ferramentas para subir o banco de dados instituido.

```docker-compose up```

#### 4. Rodando o servidor

```yarn dev```

### 3 - Utilizando a API

#### Criando um client 

Rota: ```localhost:8888/client```

Com o método POST, o client deverá ser criado pelo corpo da requisição com os seguintes parâmetros no request body:

```js
{
"username": "feunari",
"password": "batatinha123"
}
```
Não será possível criar um client, caso o username já tenha sido cadastrado.

#### Criando um deliveryman

Rota: ```localhost:8888/deliveryman```

Com o método POST, o deliveryman deverá ser criado pelo corpo da requisição com os seguintes parâmetros no request body:

```js
{
"username": "marcos",
"password": "batatinha123"
}
```

Não será possível criar um deliveryman, caso o username já tenha sido cadastrado.

#### Authenticando o usuário client:

Rota: ```localhost:8888/client/authenticate```

Com o método POST, o client poderá efetuar o login(authenticar) gerando um token authenticação, enviando os seguintes parâmetros no request body:

```js
"username": "feunari"
"password": "batatinha123"
```

#### Authenticando o usuário deliveryman:

Rota: ```localhost:8888/deliveryman/authenticate```

Com o método POST, o deliveryman poderá efetuar o login(authenticar) gerando um token authenticação, enviando os seguintes parâmetros no request body:

```js
"username": "marcos"
"password": "batatinha123"
```


#### Solicitando uma entrega

Rota: ```localhost:8888/delivery```

Com o método POST, o cliente poderá solicitar uma entrega,com o ```token Bearer``` (token de authenticação) enviado no header da requisição poderá ser adicionado os seguintes parâmetros  no request body:

```js
{
	"item_name": "Hamburguer de Siri"
}
```

#### Listando as entregas do cliente:

rota: ```localhost:8888/client/deliveries```

Com o método GET, o cliente poderá listar todas as entregas que ele solicitou, para isso o ```token Bearer``` (token de authenticação) deverá ser enviado no header da requisição.

#### Listando as entregas em abertas:

rota: ```localhost:8888/delivery/available```

Com o método GET, o deliveryman poderá listar todas as entragas que estão em abertas, para isso o ```token Bearer``` (token de authenticação) deverá ser enviado no header da requisição.


#### Pegando uma entrega para ser efetuada:

rota: ```localhost:8888/delivery/updateDeliveryman/:id_delivery```

Com o método PUT o deliveryman poderá pegar a entrega que escolheu, para isso o ```token Bearer``` (token de authenticação) deverá ser enviado no header da requisição, e o id do delivery escolhido deverá ser passado no request params.

#### Encerrando a entrega:

rota: ```localhost:8888/delivery/updateEndDate/:id_delivery```

Com o método PUT, o deliveryman poderá da encerramento em uma entrega, para isso o ```token Bearer``` (token de authenticação) deverá ser enviado no header da requisição, e o id do delivery escolhido deverá ser passado no request params.


#### Listando as entregas para serem efetuadas:

rota: ```localhost:8888/deliveryman/deliveries```

Com o método GET, o deliveryman poderá listar todas as entregas que ele efetuou ou que ele irá efetuar, para isso o ```token Bearer``` (token de authenticação) deverá ser enviado no header da requisição.













