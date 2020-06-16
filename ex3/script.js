const { default: Axios } = require("axios");
const { link } = require("fs");

function pegaDados() {
    var n = document.getElementById("input")
    var ep = n.value
    axios.get(`https://www.breakingbadapi.com/api/episodes/${ep}`)
        .then((resposta) => {
            bb = resposta.data
            console.log(bb)

            var titulo = bb[0].title
            document.getElementById("title").innerText = titulo

            var season = bb[0].season
            document.getElementById("season").innerText = `Temporada ${season}`
            var lista = []
            bb[0].characters.forEach(pessoas => {
                lista.push(pessoas)

            });
            console.log(lista)
            document.getElementById("char").innerText = `${lista.join("\n")}`




        })
        .catch((erro) => { console.log(erro) })


}
