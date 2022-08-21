
// ** Section wrapper section

document.getElementById('section-wrapper').addEventListener('click', function(event) {
    

    // ** only button event captured
    
    const isButton = event.target.nodeName;

    if ( isButton !== 'BUTTON') {
        return;
    };

    // ** get The playerName
    const playerName = event.target.parentNode.children[0].innerText;
    // ** ordered list get
    const orderedListField = document.getElementById('ordered-list');

    // ** create the dynamic li
    const li = document.createElement('li');

    // ** li html injection
    li.innerHTML = `
        ${playerName}
    `;
    // ** logic for max 5 player add + button disabled functionality
    if(orderedListField.childElementCount === 5){
        alert('Maximum five players added');
    } else{
        orderedListField.appendChild(li);
        event.target.setAttribute('disabled',"true");
    }

});


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


// ** calculate total expense

document.getElementById('calculate-total').addEventListener('click',function(){
    // ** getPlayersExpense value 
    const playersExpense = getInnerTextValue('player-expenses');
    // ** get manager expense
    const managerExpense = getInputValue('manager-expense');
    // ** get coach expense
    const coachExpense = getInputValue('coach-expense');

    // * Validation checking

    // ** calculate total expense
    const totalExpense = playersExpense + managerExpense + coachExpense;

    // ** set the totalExpense

    setInnerTextValue('total',totalExpense);
})

