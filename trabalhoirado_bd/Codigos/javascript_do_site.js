const giggitydiv = document.getElementById("giggity")

async function fotodoscara() {
    giggitydiv.innerHTML = "<p>Espera carregar :)</p>";

    try {
        const response = await fetch('../Codigos/abobora.json')
        const abobora = await response.json()
        console.log(abobora)

        if(abobora.error){
            giggitydiv.innerHTML = "<p>Não foi :(</p>";
        }
        giggitydiv.innerHTML = '';

        abobora.forEach(foto => {
            const card = document.createElement("div")
            card.className = "card"
            card.innerHTML = `
                <img class = "img" src = "${foto.imagem}" alt = "${foto.nome}"/>
                <h2>${foto.nome}</h2>
                <h2>${foto.descricao}</h3>
                <h3>${foto.categoria}<h4>
                <h4>${foto.setor}</p>
            `
            giggitydiv.appendChild(card)
        });

    } catch (error) {
        giggitydiv.innerHTML = "<p>Não deu pra procurar os funcionarios</p>";
    }
}

fotodoscara()