function createGame(player1, hour, player2) {
    return `
        <li>
            <img src="./assets/icons/icon-${player1}.svg" title=${player1} alt="Bandeira do ${player1}" />
            <strong>${hour}</strong>
            <img src="./assets/icons/icon-${player2}.svg" title=${player2} alt="Bandeira da ${player2}" />            
        </li>                 
    `
}

let delay = -0.3;
function createCard(date, day, games) {
    delay += 0.3;
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span></h2>                
            <ul> 
                ${games}                     
            </ul>
        </div>
    `
}

document.querySelector('#cards').innerHTML = 
        createCard("24/11", "quinta", 
        createGame("switzerland", "07:00", "cameroon") + 
        createGame("portugal", "13:00", "ghana") + 
        createGame("brazil", "16:00", "serbia")) +

        createCard("28/11", "segunda", 
        createGame("south-korea", "10:00", "ghana") + 
        createGame("brazil", "13:00", "switzerland") + 
        createGame("portugal", "16:00", "uruguay")) +
        
        createCard("02/12", "sexta", 
        createGame("south-korea", "07:00", "portugal") + 
        createGame("ghana", "12:00", "uruguay") + 
        createGame("brazil", "16:00", "cameroon"))
