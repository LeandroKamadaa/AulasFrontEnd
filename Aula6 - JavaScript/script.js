function adicionarQuadrado() {
    // Pega os elementos do HTML
    const tarefas = document.querySelector("#tarefas").value
    const lista = document.querySelector("#lista")
    const imagem = document.querySelector("#imagem").value

    //Cria e formata a div
    const div = document.createElement("div");
    div.style.backgroundColor = "red"
    div.style.width = "500px"
    div.style.height = "500px"
    div.innerHTML = `
    <p>${tarefas}<p/>`

    //Cria um img
    const foto = document.createElement("img")
    foto.setAttribute("src", imagem)
    foto.style.width = "500px"
    foto.style.height = "500px"

    //Cria um botão
    const botao = document.createElement('button')
    botao.addEventListener("click", function(){
        alert("Gol do caleri")
    })
    botao.textContent = "Clique"

    //Adiciona no html
    div.append(foto)
    div.append(botao)
    lista.append(div)



}