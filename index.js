import express from 'express'

const app = express()

app.get("/api/soma", (req, res) => {
    const num1 = Number(req.query.num1)
    const num2 = Number(req.query.num2)

    res.send({ soma: num1 + num2 })
})

app.get("/api/sub/:num1/:num2", (req, res) => {
    const num1 = Number(req.params.num1)
    const num2 = Number(req.params.num2)

    res.send({ sub: num1 - num2 })
})

app.get("/api/pessoa/:id", (req, res) => {
    res.json({ message: "Hello World!" });
})

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000")
})

app.get("/api/salario/:valHr/:qntHr", (req, res) => {
    const valHr = Number(req.params.valHr)
    const qntHr = Number(req.params.qntHr)

    res.send({ salario: valHr * qntHr })
})

app.get("/api/pesomedio/:peso1/:peso2/:peso3/:peso4/:peso5", (req, res) => {
    const peso1 = Number(req.params.peso1)
    const peso2 = Number(req.params.peso2)
    const peso3 = Number(req.params.peso3)
    const peso4 = Number(req.params.peso4)
    const peso5 = Number(req.params.peso5)

    res.send({ Média: (peso1 + peso2 + peso3 + peso4 + peso5) / 5 })
})

app.get("/api/temp/:celsius", (req, res) => {
    const celsius = Number(req.params.celsius)

    res.send({ Fahrenheit: (9 * celsius + 160) / 5 })
})

app.get("/api/distancia/:milha", (req, res) => {
    const milha = Number(req.params.milha)

    res.send({ Distancia: milha * 1.6 })
})