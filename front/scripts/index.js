async function criar() {
    const id = document.getElementById('id').value
    const cpf = document.getElementById('cpf').value
    const email = document.getElementById('email').value
 
    // realizar a req pro back
    const response = await fetch(
        'http://localhost:3000/api/v1/pessoa',
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id, cpf, email })
        }
    )
   
    const data = await response.json()
 
    const resultado = document.getElementById('resultado')
    resultado.innerText = data.message
}
 
async function buscarTodos() {
    const response = await fetch('http://localhost:3000/api/v1/pessoas',)
    const data = await response.json()
 
    console.log(data)
    const lista = document.getElementById('listaUsuarios')
    lista.innerHTML = ""
 
    data.pessoas.forEach(pessoa => {
        const li = document.createElement("li")
        li.innerText = "ID: "+ pessoa.id + " CPF: "+ pessoa.cpf + " Email: " + pessoa.email
        lista.appendChild(li)
    })
}
 
async function alterar() {
    const id = document.getElementById('id').value
    const cpf = document.getElementById('cpf').value
    const email = document.getElementById('email').value
 
    const response = await fetch(
        `http://localhost:3000/api/v1/alterarpessoa/${id}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id, cpf, email })
        }
    )
   
    const data = await response.json()
 
    const resultado = document.getElementById('resultado')
    resultado.innerText = data.message
}
 
async function deletar() {
    const id = document.getElementById('id').value
 
    const response = await fetch(
        `http://localhost:3000/api/v1/pessoa/${id}`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        }
    )
   
    const data = await response.json()
 
    const resultado = document.getElementById('resultado')
    resultado.innerText = data.message
}