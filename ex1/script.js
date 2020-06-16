
// var input = document.getElementById("resp");
// input.addEventListener("keyup",function(event) {
//     if (event.keyCode === 13) {
//      event.preventDefault();
//  document.getElementById("btn").click()
//  ;}});



// var axios = require('axios');
function respostaUsuario(){
axios.get(`https://yesno.wtf/api`)
    .then((resposta)=>{
       
        var yN = resposta.data
        console.log(yN)
        var an = yN.answer.toString()
        
        var imagem = yN.image
            console.log(imagem)
            var link =`${imagem}`
            // console.log(an)
        console.log(link)
        
    var resp = document.getElementById("resp")
    var text = resp.value
    // typeof(text)
    // typeof(an)
// console.log(text)

        if(an==text){
            
            document.getElementById("yes").src = link


        }
        else {
            alert("Você errou")

        }
    })
.catch((erro)=>{console.log(erro)})




}
