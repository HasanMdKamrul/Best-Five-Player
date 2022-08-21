// ** Calculate Button functionality

document.getElementById('calculate').addEventListener('click',function(){
    // ** per player budget value 

    const perPlayerExpense = getInputValue('per-player-budget');

    // ** checking for is NaN and nagetive value input
    if (isNaN(perPlayerExpense) || perPlayerExpense < 0) {
        alert('Please enter a valid number as input')
        return;
    }


    // ** orderedlist

    const orderedListField = document.getElementById('ordered-list');

    const numberOfPlayers = orderedListField.childElementCount;


    const totalPlayerExpense = perPlayerExpense * numberOfPlayers;

    // ** set the player expense total

    setInnerTextValue('player-expenses',totalPlayerExpense);

})