// ** Calculate Button functionality

document.getElementById('calculate').addEventListener('click',function(){

    // ** Get per player budget value 
    const perPlayerExpense = getInputValue('per-player-budget');

    // ** checking for is NaN and nagetive value input
    if (isNaN(perPlayerExpense) || perPlayerExpense < 0) {
        alert('Please enter a valid number as input')
        return;
    };

    // ** orderedlist field
    const orderedListField = document.getElementById('ordered-list');

    // ** get the total number of players
    const numberOfPlayers = orderedListField.childElementCount;

    // ** calculate the total number of players expense
    const totalPlayerExpense = perPlayerExpense * numberOfPlayers;

    // ** set the players expense total
    setInnerTextValue('player-expenses',totalPlayerExpense);

})