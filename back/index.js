import express from 'express';
import db from './repository/index.js';
import cors from 'cors';
 
const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;
//CRUD - Métodos
 
//C - Método Criar
app.post("/api/v1/pessoa", (req,res) => {
    //id , cpf, emaik
    const {id, cpf, email} = req.body
 
    if(!id || !cpf || !email){
        //avisa que é para enviar tudo
        res.send({ message: "Envie todos oas dados"})
        return
    }  
       
    //Cadastrar no banco
    db.push({ id, cpf, email })
    res.send({ message: "Pessoa criada com sucesso"})
})
 
//R - read - ler uma informação
app.get("/api/v1/pessoas", (req, res) => {
    res.send({ pessoas: db })
})
 
//U - update - atualizar
app.put("/api/Alterarpessoa/:id", (req,res) => {
})
 
//D
app.delete("/api/pessoa:id", (req,res) => {
});
 
app.listen(port, () => {
console.log(`Servidor rodando em http://localhost:${port}`);
});