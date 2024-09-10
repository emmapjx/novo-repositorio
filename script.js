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
            respostaDia.innerHTML = "na terça eu te xingo e você que me agradeça";
            break;
        
        case "quarta":
        case "quarta-feira":
            respostaDia.innerHTML = "Na quarta o vinicius rebola igual uma lagarta";
            break;
        
        case "quinta":
        case "quinta-feira":
            respostaDia.innerHTML = "Na quinta o vinicius brinca com a Jacinta";
            break;
        
        case "sexta":
        case "sexta-feira":
            respostaDia.innerHTML = "Na sexta o vinicius se faz de besta";
            break;
        
        case "sábado":
        case "sabado":
            respostaDia.innerHTML = "No sabado o vinicius toma banho e morre afogado";
            break;
        
        case "domingo":
            respostaDia.innerHTML = "No domingo o Vini come as véias do bingo";
            break;
        
        default:
            respostaDia.innerHTML = "Digite outro.";
            break;
    }
}
