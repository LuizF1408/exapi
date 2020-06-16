function carregaFrase() {

    axios.get('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
        .then((resposta) => {
            var bb = resposta.data
            console.log(bb)
            var frase = bb[0].quote
            var autor = bb[0].author
            console.log(frase)
            console.log(autor)
            document.getElementById("frase").innerText = frase
            document.getElementById("autor").innerText = autor
           

        })

        .catch((erro) => { console.log(erro) })
}