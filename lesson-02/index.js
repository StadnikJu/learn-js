
let userChoice;
let computerChoise;
let isWinner = false;

while(!isWinner) {

    userChoice = prompt("Выбирете ножницы, камень или бумага");
    userChoice = userChoice.toLowerCase();

    let randomNum = Math.floor(Math.random() * 3);
    
    switch(randomNum) {
        case 0: {
            computerChoise = "камень";
            break;
        }
        case 1: {
            computerChoise = "ножницы";
            break;
        }
        case 2: {
            computerChoise = "бумага";
            break;
        }
    }

    if( userChoice === "камень" || userChoice === "ножницы" || userChoice === "бумага") {

        if(userChoice === computerChoise) {
            alert("Ничья. Играем");
        } else {
            let isUserWinner = userChoice === "камень" && computerChoise === "ножницы" ||
                        (userChoice === "ножницы" && computerChoise === "бумага") ||
                        (userChoice === "бумага" && computerChoise === "камень")
            let message = isUserWinner ? 'Ты выиграл!' : "Компьютр победил!";
            alert(message);
            isWinner = true;
        }
    } else {
        alert('Введите коректное значение "Камень", "Ножницы", "Бумага"');
    };
};














