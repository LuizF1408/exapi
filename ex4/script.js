var input = document.getElementById("input");
input.addEventListener("keyup",function(event) {
    if (event.keyCode === 13) {
     
 document.getElementById("btn").click()
 ;}});
function cep(){
    var dados = document.getElementById("input")
    var cep = dados.value
axios.get(`https://api.postmon.com.br/v1/cep/${cep}`)
.then((resposta)=>{
var cep = resposta.data
console.log(cep)
// var cidade2 = cep.cidade
var bairro = cep.logradouro
// var rua = cep.logradouro
document.getElementById("bairro").innerText = cep.bairro

// 
document.getElementById("rua").innerText = cep.logradouro



document.getElementById("cidade").innerText = cep.cidade

// console.log(rua)
// console.log(cidade2)
// console.log(bairro)
})
.catch((erro)=>{console.log(erro)})
}
