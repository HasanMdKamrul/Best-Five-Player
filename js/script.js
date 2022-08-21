
// ** Section wrapper section

document.getElementById('section-wrapper').addEventListener('click', function(event) {
    
    // ** only button event capture

    const isButton = event.target.nodeName;

    if ( isButton !== 'BUTTON') {
        return;
    };
    
    const playerName = event.target.parentNode.children[0].innerText;

    console.log(playerName)

    const orderedListField = document.getElementById('ordered-list');

    // ** create the dynamic li

    const li = document.createElement('li');

    li.innerHTML = `
        ${playerName}
    `;

    console.log(orderedListField.childElementCount);

    if(orderedListField.childElementCount === 5){
        alert('Maximum five players added');
       
    } else{
        orderedListField.appendChild(li);
        event.target.setAttribute('disabled',"true");
    }

})