import { getDiceRollArray, getDicePlaceholderHtml } from "./utils.js"
import characterData from "./data.js"


const getPercentage = (remainingHealth, maximumHealth) =>
    (100 * remainingHealth) / maximumHealth


// refactor constructor function that sets renderCharacter function as method
function Character(data) {
    // Replace this.blah with an Object.assign() method
    // Object.assign(target, source)
    Object.assign(this, data)

    this.diceArray = getDicePlaceholderHtml(this.diceCount)
    //maxHealth with always be the hardCoded health in data because the constructor 
    //function is only called once and that is the value that will be stored in maxHealth
    this.maxHealth = this.health
    // Move getDiceHtml function to method on the Character construction function
    // function that takes diceCount, calls random from first function. Maps through array above and sets the html for each die to the random numbers.
    // Update ~~~ sets currentDiceScore to whatever the diceRollArray puts out
    this.getDiceHtml = function (diceCount) {
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceArray = this.currentDiceScore.map(num => `<div class="dice">${num}</div>`).join('')
    }

    this.getHealthBarHtml = function () {
        const percent = getPercentage(this.health, this.maxHealth)
        return `<div class="health-bar-outer">
            <div class="health-bar-inner ${percent < 26 ? "danger" : ""} " 
                style="width: ${percent}%;">
            </div>
        </div>`
    }

    //function that will handle the damage inflicted on each character
    //use reduce method to get sum of diceRoll, store it in totalAttackScore 
    this.takeDamage = function (attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((total, num) => total + num)
        //decrement health using totalAttackScore
        this.health -= totalAttackScore
        if (this.health <= 0) {
            this.health = 0
            this.isDead = true
            // getPercentage(this.health, this.maxHealth)
        }
    }

    this.getCharacterHtml = function () {
        const { elementId, name, avatar, health, diceCount, diceArray } = this
        const diceHtml = this.getDiceHtml(diceCount)
        const healthBar = this.getHealthBarHtml()

        return `
        <div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}" />
            <p class="health">health: <b> ${health} </b></p>
            ${healthBar}
            <div class="dice-container">
                ${diceArray}
            </div>
        </div>
    `}
}

export default Character