import {getDiceRollArray, getDicePlaceholderHtml} from "./utils.js"
import characterData from "./data.js"

// refactor constructor function that sets renderCharacter function as method
function Character(data) {
    // Replace this.blah with an Object.assign() method
    // Object.assign(target, source)
    Object.assign(this, data)
    
    this.diceArray = getDicePlaceholderHtml(this.diceCount)

    // Move getDiceHtml function to method on the Character construction function
    // function that takes diceCount, calls random from first function. Maps through array above and sets the html for each die to the random numbers.
    // Update ~~~ sets currentDiceScore to whatever the diceRollArray puts out
    this.getDiceHtml = function (diceCount) {
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceArray = this.currentDiceScore.map(function(num){
            return `<div class="dice">${num}</div>`
        }).join('')
    }
    
    this.takeDamage = function() {
        console.log(`${this.name} is damaged`)
    }
    

    this.getCharacterHtml = function () {
        const { elementId, name, avatar, health, diceCount, diceArray } = this
        const diceHtml = this.getDiceHtml(diceCount)
        

        return `
        <div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}" />
            <p class="health">health: <b> ${health} </b></p>
            <div class="dice-container">
                ${diceArray}
            </div>
        </div>
    `}
}

export default Character