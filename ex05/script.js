function pedraPapelTesoura(poder) {
    let poderBot = Math.floor(Math.random() * 3);
    // 0 = pedra
    // 1 = papel
    // 2 = tesoura
    if (poderBot === 0) { //PEDRA
        let poderBotString = "Pedra";
        if (poder === "pedra") {
            return console.log(`Bot: ${poderBotString} | Você: ${poder} || Empate!!!`);
        }
        if (poder === "papel") {
            return console.log(`Bot: ${poderBotString} | Você: ${poder} || Você ganhou!`);
        }
        else {
            return console.log(`Bot: ${poderBotString} | Você: ${poder} || Você perdeu!`);
        }
    }
    if (poderBot === 1) { //PAPEL
        let poderBotString = "Papel";
        if (poder === "pedra") {
            return console.log(`Bot: ${poderBotString} | Você: ${poder} || Você perdeu!`);
        }
        if (poder === "papel") {
            return console.log(`Bot: ${poderBotString} | Você: ${poder} || Empate!!!`);
        }
        else {
            return console.log(`Bot: ${poderBotString} | Você: ${poder} || Você ganhou!`);
        }
    }
    if (poderBot === 2) {
        let poderBotString = "Tesoura";
        if (poder === "pedra") {
            return console.log(`Bot: ${poderBotString} | Você: ${poder} || Você ganhou!`);
        }
        if (poder === "papel") {
            return console.log(`Bot: ${poderBotString} | Você: ${poder} || Você perdeu!`);
        }
        else {
            return console.log(`Bot: ${poderBotString} | Você: ${poder} || Empate!!!`);
        }
    }
}
pedraPapelTesoura("tesoura");
export {};
