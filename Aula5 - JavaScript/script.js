// window.alert("Hello")

// function printar() {
//     window.alert("Hello again")
// }
// printar()

//Executa função ao carregar a página
// window.onload = function carregarPagina() {
//     alert("Hello on load")
// }

// function logar() {
    var botao = document.querySelector(".btnLogar")
// var botao = document.getElementById("btnLogar")
// window.location.href = "https://mangadex.org/"
// }

//Recarrega a página
// window.location.reload()

//Navega pelo histórico
// window.history.back()
// window.history.forward()

//Faz uma ação depois de n segundos
// setTimeout(function mensagem() {
//     alert("Compre agora")

// },3000)

// setInterval(function mensagem(){
//     console.log("BOLA!")
// },2000)

function logar() {
    var botao = document.querySelector(".btnLogar")    
    var paragrafo = document.querySelector("#resultado")
    // paragrafo.innerHTML = "Pikachu"
    var cardapio = document.querySelector("#cardapio").value 
    switch(cardapio){
        case 'cafe':
            paragrafo.innerHTML = `
            <h1>Café da manhã</h1>
            <p>Hamburgue<p>
            <a href="#">Compre agora</a>
            `
        break;
        case 'almoco':
            paragrafo.innerHTML = `
            <h1>Almoço</h1>
            <p>Lasanha<p>
            <a href="#">Compre agora</a>
            `
        break;
        case 'janta':
            paragrafo.innerHTML = `
            <h1>Janta</h1>
            <p>Pizza<p>
            <a href="#">Compre agora</a>
            `
        break;
        default:
            paragrafo.innerHTML = "Opção inválida"

    }
}
function trocarImagem(){
    var imagem = document.querySelector("#imagem");
    var botao = document.querySelector("#btnImagem");

    imagem.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpltOWYa9LOYQLGrrNOdY4rZJjth1e1hMiyw&s";
    imagem.width = "200";
    // botao.style.color = "red"
    botao.classList.toggle("active");
}


