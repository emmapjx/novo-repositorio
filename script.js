function verificarDia() {
    var dia = document.getElementById('dia').value.toLowerCase().trim();
    var respostaDia = document.getElementById('respostaDia');

    switch (dia) {
        case "segunda":
        case "segunda-feira":
            respostaDia.innerHTML = "Na segunda o vinicius dá a bunda";
            break;
        
        case "terça":
        case "terça-feira":
        case "terca-feira":
        case "terca":
            respostaDia.innerHTML = "na terça eu te xingo e você me agradeça";
            break;
        
        case "quarta":
        case "quarta-feira":
            respostaDia.innerHTML = "Na quarta o vinicius dá e nem se farta";
            break;
        
        case "quinta":
        case "quinta-feira":
            respostaDia.innerHTML = "Na quinta o vinicius brinca com a Jacinta";
            break;
        
        case "sexta":
        case "sexta-feira":
            respostaDia.innerHTML = "slk, a semana toda em";
            break;
        
        case "sábado":
        case "sabado":
            respostaDia.innerHTML = "No sabado vinicius toma banho e morre afogado";
            break;
        
        case "domingo":
            respostaDia.innerHTML = "No domingo o vini come as veia do bingo";
            imagemDia.src"imagens/domingo.jpg
            break;
        
        default:
            respostaDia.innerHTML = "Digite outro.";
            break;
    }
}
