const calcular = document.querySelector(`button#bntCalcule`)


function imc() {
    const nome = document.querySelector(`input#nome`).value
    const peso = document.querySelector(`input#peso`).value
    const altura = document.querySelector(`input#altura`).value
    const result = document.querySelector(`span#resposta`)

    if (nome !== `` && peso !== `` && altura !== ``) {
        const ImcRes = (peso / (altura ** 2)).toFixed(2)

        switch (ImcRes) {
            case (ImcRes < 18.5):
                result.textContent = ImcRes
                break
        }
    } else {
        result.textContent = `Não esqueçade prencher todos os campos !!!`
    }

}


calcular.addEventListener(`click`, imc)