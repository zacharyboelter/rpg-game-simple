


// refactor from for loop to array constructor that fills with '0', then maps over and creates random number to take the place of '0'.
function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(function () {
        return Math.floor(Math.random() * 6) + 1
    })
}


// join() at end to get rid of commas.
// function getDiceHtml(diceCount) {
//     return getDiceRollArray(diceCount).map(function (num) {
//         return `<div class="dice">${num}</div>`
//     }).join('')
// }

// Amalgamation of the two different character objects into one object

const characterData = {
    hero: {
        elementId: 'hero',
        name: 'Merlin',
        avatar: './images/wizard.png',
        health: 60,
        diceCount: 3
    },
    monster: {
        elementId: 'monster',
        name: 'Madam Mim',
        avatar: './images/madam-mim.png',
        health: 10,
        diceCount: 1
    }
}



// refactor constructor function that sets renderCharacter function as method
function Character(data) {
    // Replace this.blah with an Object.assign() method
    // Object.assign(target, source)
    Object.assign(this, data)
    // Move getDiceHtml function to method on the Character construction function
    // function that takes diceCount, calls random from first function. Maps through array above and sets the html for each die to the random numbers.
    this.getDiceHtml = function (diceCount) {
        return getDiceRollArray(diceCount).map(function (num) {
            return `<div class="dice">${num}</div>`
        }).join('')
    }

    this.getCharacterHtml = function () {
        const { elementId, name, avatar, health, diceCount } = this
        const diceHtml = this.getDiceHtml(diceCount)

        return `
        <div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}" />
            <p class="health">health: <b> ${health} </b></p>
            <div class="dice-container">
                ${diceHtml}
            </div>
        </div>
    `}
}


//create 2 new instances of Character
const wizard = new Character(characterData.hero)
const villain = new Character(characterData.monster)

//Render them on the page.
function render() {
    document.getElementById(wizard.elementId).innerHTML = wizard.getCharacterHtml()
    document.getElementById(villain.elementId).innerHTML = villain.getCharacterHtml()
}

render()

// function that declares empty array, take the diceCount (hard code for now) 
// as param, generates random number until diceCount. Returns new loaded array.

// let newDiceRolls = [];
//     for (let i = 0; i < diceCount; i++) {
//         newDiceRolls.push(Math.floor(Math.random() * 6) + 1);
//     }
//     return newDiceRolls;





// refactor function into the constructor function above
// function renderCharacter(data) {

//     const { elementId, name, avatar, health, diceCount } = data

//     // set diceHtml to the above function, using the diceCount as param(diceCount is availiable due to destructuring of data ^^^^)
//     const diceHtml = getDiceHtml(diceCount)

//     document.getElementById(elementId).innerHTML = `
//     <div class="character-card">
//         <h4 class="name"> ${name} </h4>
//         <img class="avatar" src="${avatar}" />
//         <p class="health">health: <b> ${health} </b></p>
//         <div class="dice-container">
//             ${diceHtml}
//         </div>
//     </div>
// `
// }

// renderCharacter(hero)
// renderCharacter(monster)

