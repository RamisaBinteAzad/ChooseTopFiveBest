const playerList = [];
document.getElementById('btn-calculate-player-expenses').addEventListener('click', function () {

    const perPlayerBudgets = getInputFieldValueById('input-field_perPlayer');
    const totalPlayers = showPlayerList();

    const playerExpenses = totalPlayers * perPlayerBudgets;
    setElementValueById('playerExpenses', playerExpenses);







})
document.getElementById('btn-calculate-total').addEventListener('click', function () {

    const managerBudgets = getInputFieldValueById('payForManager');
    const coachBudgets = getInputFieldValueById('payForCoach');
    const playerExpenses = getElementValueById('playerExpenses');
    const totalExpenses = managerBudgets + coachBudgets + playerExpenses;
    setElementValueById('total-expenses', totalExpenses);





})
// const managerBudgets =getInputFieldValueById('payForManager');
//     console.log(managerBudgets);

// function calculateBudgets(totalPlayers) {

// }
function showPlayerList() {
     
    const totalPlayers = playerList.length;
    const fivePlayersList = document.getElementById('bestFivePlayersList');
    fivePlayersList.textContent = '';
   
    for (let i = 0; i < playerList.length; i++) {

         
        const div = document.createElement("div");

        if (totalPlayers > 5) {
            alert('Sorry!!You Have already added Five Players.You cannot added any players now');
            return;
        }

        div.innerHTML = `
        
        <ol start="${i + 1}" class=" pt-3">
                <li>${playerList[i]}</li>
        
        </ol>
        
        `;
        fivePlayersList.appendChild(div);
    }

    // calculateBudgets(totalPlayers);
    return totalPlayers;


}

function addToPlayerList(player) {
    const playerName = player.parentNode.children[0].innerText;
   
    
    playerList.push(playerName);

    showPlayerList();
   

}
