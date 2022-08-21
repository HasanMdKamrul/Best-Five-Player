
// ** Section wrapper section

document.getElementById('section-wrapper').addEventListener('click', function(event) {
    

    // ** only button event captured
    
    const isButton = event.target.nodeName;

    if (isButton !== 'BUTTON') {
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

