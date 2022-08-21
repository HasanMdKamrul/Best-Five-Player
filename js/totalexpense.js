// ** calculate total expense

document.getElementById('calculate-total').addEventListener('click',function(){
    // ** getPlayersExpense value 
    const playersExpense = getInnerTextValue('player-expenses');
    // ** get manager expense
    const managerExpense = getInputValue('manager-expense');
    // ** get coach expense
    const coachExpense = getInputValue('coach-expense');

    // * Validation checking

    if (isNaN(managerExpense) || isNaN(coachExpense) || managerExpense < 0 || coachExpense < 0) {
        alert('Please enter a valid number as input')
        return;
    }

    // ** calculate total expense
    const totalExpense = playersExpense + managerExpense + coachExpense;

    // ** set the totalExpense

    setInnerTextValue('total',totalExpense);
})
