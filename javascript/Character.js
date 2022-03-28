import { getDiceRollArray, getDicePlaceholderHtml, getPercentage } from "./utils.js"
import characterData from "./data.js"




// refactor constructor function that sets renderCharacter function as method
// refactor constructor function into a class
class Character{
        constructor(data){
            Object.assign(this, data)
            this.diceArray = getDicePlaceholderHtml(this.diceCount)
            this.maxHealth = this.health
        }
        getDiceHtml(diceCount) {
            this.currentDiceScore = getDiceRollArray(this.diceCount)
            this.diceArray = this.currentDiceScore.map(num => `<div class="dice">${num}</div>`).join('')
        }
        getHealthBarHtml() {
            const percent = getPercentage(this.health, this.maxHealth)
            return `<div class="health-bar-outer">
                <div class="health-bar-inner ${percent < 26 ? "danger" : ""} " 
                    style="width: ${percent}%;">
                </div>
            </div>`
        }
        takeDamage(attackScoreArray) {
            const totalAttackScore = attackScoreArray.reduce((total, num) => total + num)
            //decrement health using totalAttackScore
            this.health -= totalAttackScore
            if (this.health <= 0) {
                this.health = 0
                this.isDead = true
            }
        }
        getCharacterHtml() {
            const { elementId, name, avatar, health, diceCount, diceArray } = this
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



