import express, { request } from 'express';
const app = express()

/*
    GET -> Buscar
    POST -> Salvar
    PUT -> Alterar
    DELETE -> Deletar
    PATCH -> Alteração específica
*/

//http://localhost:3333/users
app.get("/", (request, response) => {
    return response.json({message: "Hello World"});
});

// primeiro parâmetro = rota (recurso API)
//segundo parâmetro = request, responseclear
app.post("/", (request, response) => {
    //recebe os dados para salvar
    return response.json({message:"Dados salvos com sucesso!"});
});

app.listen(3333, () => console.log("Server is running!"));
