let peso = 100
let altura = 1.80
let ImcRes = 0
ImcRes = 5 //Number((peso / (altura ** 2)).toFixed(2))


console.log(typeof ImcRes)

switch (true) {
    case ImcRes < 6:
        console.log('AQUI!')
        //console.log(`Olá ${nome} seu imc é  ${ImcRes}, o que quer dizer que está abaixo do peso ideal.`)
        break;
    /*
        case (ImcRes < 25):
            console.log(`Olá ${nome} seu imc é  ${ImcRes}, o que quer dizer que você está com o peso ideal, parabéns !!.`)
            break;
    
        case (ImcRes < 30):
            console.log(`Olá ${nome} seu imc é  ${ImcRes}, o que quer dizer que está levemente acima do peso.`)
            break;
    
        case (ImcRes < 35):
            console.log(`Olá ${nome} seu imc é  ${ImcRes}, o que quer dizer que você já está com Obesidade nível 1.`)
            break;
    
        case (ImcRes < 40):
            console.log(`Olá ${nome} seu imc é  ${ImcRes}, o que quer dizer que você já chegoy .`)
            break;
    
        case (ImcRes >= 40):
            console.log(`Olá ${nome} seu imc é  ${ImcRes}, o que quer dizer que está abaixo do peso ideal.`)
            break;*/
    default:
        console.log('Sem registro')
}
