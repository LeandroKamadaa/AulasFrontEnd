// alert("hello")
// var nome = "Caio"
// console.log(`Seu nome é ${nome}`)

// function clicar() {
    // var nome = prompt("Digite seu nome")
    // var nome = parseFloat(document.getElementById("inputTexto").value) converte em numero
//     var nome = document.getElementById("inputTexto").value

//     if (nome === "Caio" || nome === "Fiap") { //|| == or && == and
//         alert("Sextou")
//     } 
//     else if (nome === ""){
//         alert("Vazio")
//     }
//     else {
//         alert("Não")
//     }

// }

// function clicar(){
//     var login = document.getElementById("inputLogin").value
//     var senha = document.getElementById("inputSenha").value

//     if ((login === "1234" || senha === "1234") ||
//         (login === "Leandro" || senha === "Leandro") ||
//         (login === "Caio" || senha === "Caio")
//     )   
//     {
//         alert("Sucesso")
//     }
//     else if (senha.length < 5){
//         alert("A senha deve conter no minimo 5 caracteres")
//     }
//     else if (login === "" || senha === ""){
//         alert("Espaço vazio")
//     }
//     else {
//         alert("Inválido")
//     }
// }
function clicar(){
var refeicoes = document.getElementById('refeicoes').value

switch(refeicoes){
    case 'cafe':
        console.log("Pão com ovo")
        break;
    case 'almoco':
        console.log("Lasanha")
        break;
    case 'jantar':
        console.log("Pizza")
        break;
    default:
        console.log("Invalid item")
        break;
}
}