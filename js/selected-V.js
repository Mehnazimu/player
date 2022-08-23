let selectFive = [];



function disable(btn) {
    btn.disabled = true;
}

function addToList(element) {
    const playerName = element.parentNode.parentNode.children[0].innerText;


    const playersList = document.getElementById("players-list");


    const li = document.createElement("li");
    li.innerText = playerName;
    playersList.appendChild(li);

    for (let i = 0; i <= 5; i++) {
        selectFive.push(playerName);
        console.log(selectFive);
        if (selectFive.length > 4) {
            alert('you can not add more than five')
        }

        return;

    }




}


