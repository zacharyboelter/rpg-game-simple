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
    // Replace this.blah with an Object.assign() method
    // Object.assign(target, source)
    

   
    //maxHealth with always be the hardCoded health in data because the constructor 
    //function is only called once and that is the value that will be stored in maxHealth
    
    // Move getDiceHtml function to method on the Character construction function
    // function that takes diceCount, calls random from first function. Maps through array above and sets the html for each die to the random numbers.
    // Update ~~~ sets currentDiceScore to whatever the diceRollArray puts out
    

    

    //function that will handle the damage inflicted on each character
    //use reduce method to get sum of diceRoll, store it in totalAttackScore 
    

    

export default Character




// const moduleStats = {
//     module1: {
//         moduleName: 'Learn JS',
//         studentsEnrolled: 2340,
//         studentsCompleted: 2210
//     },
//     module2: {
//         moduleName: 'CSS Basics',
//         studentsEnrolled: 1893,
//         studentsCompleted: 1810
//     },
//     module3: {
//         moduleName: 'Responsive Design',
//         studentsEnrolled: 4600,
//         studentsCompleted: 4357
//     }
// }
// class Module {
// //logic goes inside the constructor method as a property as THIS.____
//     constructor(data){
//         //assign this to data that is being passed as parameter
//         Object.assign(this, data)
//         this.percentCompletedModule = this.studentsCompleted / this.studentsEnrolled * 100
//     }
//     logPercentCompletedModule(){
//         console.log(this.percentCompletedModule)
//     }
// }

// //new instance of module
// const responsiveDesign = new Module(moduleStats.module3)
// responsiveDesign.logPercentCompletedModule()