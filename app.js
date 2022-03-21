
const hero = {
    elementId: 'hero',
    name: 'Wizard',
    avatar: './images/wizard.png',
    health: 60,
    diceCount: 3
}

const monster = {
    elementId: 'monster',
    name: 'Orc',
    avatar: './images/orc.png',
    health: 10,
    diceCount: 1
}


// function that declares empty array, take the diceCount (hard code for now) 
// as param, generates random number until diceCount. Returns new loaded array.
function getDiceRollArray(diceCount) {
    const newDiceRolls = []
    for (i = 0; i < diceCount; i++) {
       newDiceRolls.push(Math.floor(Math.random() * 6) + 1)
    }
    return newDiceRolls
}

// function that takes diceCount, calls random from first function. Maps through array above and sets the html for each die to the random numbers.
// join() at end to get rid of commas.
function getDiceHtml(diceCount) {
    return getDiceRollArray(diceCount).map(function(num) {
        return `<div class="dice">${num}</div>`
    }).join('')
}

function renderCharacter(data) {

    const {elementId, name, avatar, health, diceCount} = data

    // set diceHtml to the above function, using the diceCount as param(diceCount is availiable due to destructuring of data ^^^^)
    const diceHtml = getDiceHtml(diceCount)

    document.getElementById(elementId).innerHTML = `
    <div class="character-card">
        <h4 class="name"> ${name} </h4>
        <img class="avatar" src="${avatar}" />
        <p class="health">health: <b> ${health} </b></p>
        <div class="dice-container">
            ${diceHtml}
        </div>
    </div>
`
}

renderCharacter(hero)
renderCharacter(monster)

