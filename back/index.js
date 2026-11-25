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
app.put("/api/v1/alterarpessoa/:id", (req,res) => {
    const id = req.params.id;
 
    const altera = db.findIndex(p => p.id == id);
 
    if (altera === -1){
    return res.status(404).json({ message: 'não encontrado'})
    }
 
    db[altera] = req.body;
    res.status(201).json(db[altera])
})
 
//D
app.delete("/api/v1/pessoa/:id", (req,res) => {
    const id = req.params.id;
 
    const alterar = db.findIndex(p => p.id == id);
 
    if (id === -1){
    return res.status(404).json('não encontrado')
    }
 
    db.splice(alterar, 1);
    res.status(201).json({ message: 'excluido com sucesso'})
});
 
app.listen(port, () => {
console.log(`Servidor rodando em http://localhost:${port}`);
});