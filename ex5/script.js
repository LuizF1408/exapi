var input = document.getElementById("caixaDeTexto");
input.addEventListener("keyup",function(event) {
    if (event.keyCode === 13) {
     
 document.getElementById("btn").click()
 ;}});

function pegaDados(){
var pego = document.getElementById("caixaDeTexto");
var equa = pego.value
axios.get(`https://newton.now.sh/simplify/${equa}`)
.then((resposta)=>{
res = resposta.data
var impriResul = res.result
console.log(impriResul)

document.getElementById("resultado").innerText = impriResul
})





}