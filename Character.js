import {getDiceRollArray} from "./utils.js"

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

export default Character