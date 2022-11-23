const calcular = document.querySelector(`button#bntCalcule`)
let result = document.querySelector(`p#resposta`)
result.textContent = `Não esqueçade prencher todos os campos !!!`
calcular.addEventListener(`click`, imc)


// function teste(){
//     alert(`teste`)
// }

//  function imc2(){
//   var nome = document.formulario.nome.value;
//   alert(nome);
//  }

function imc() {
    let nome = document.querySelector(`input#nome`).value
    let peso = document.querySelector(`input#peso`).value
    let altura = document.querySelector(`input#altura`).value
    // let result = document.querySelector(`p#resposta`)

    if (nome !== `` && peso !== `` && altura !== ``) {
        let ImcRes = Number((peso / (altura ** 2)).toFixed(2))
        console.log(typeof ImcRes)

        switch (true) {
            case (ImcRes < 18.5):

                result.innerHTML = `Olá ${nome} seu imc é  ${ImcRes}, o que quer dizer que está abaixo do peso ideal.`
                break;

            case (ImcRes < 25):
                result.innerHTML = `Olá ${nome} seu imc é  ${ImcRes}, o que quer dizer que você está com o peso ideal, parabéns !!.`
                break;

            case (ImcRes < 30):
                result.innerHTML = `Olá ${nome} seu imc é  ${ImcRes}, o que quer dizer que está levemente acima do peso.`
                break;

            case (ImcRes < 35):
                result.innerHTML = `Olá ${nome} seu imc é  ${ImcRes}, o que quer dizer que você já está com Obesidade nível 1.`
                break;

            case (ImcRes < 40):
                result.innerHTML = `Olá ${nome} seu imc é  ${ImcRes}, o que quer dizer que você já chegou em obesidade nível 2 .`
                break;

            case (ImcRes >= 40):
                result.innerHTML = `Olá ${nome} seu imc é  ${ImcRes}, o que quer dizer que você já chegou em obesidade nível 3 cuidado!!! .`
                break;

            default:
                result.innerHTML = 'Não encontrado'
        }

    } else {
        result.textContent = `Não esqueçade prencher todos os campos !!!`
    }

}