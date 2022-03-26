import characterData from "./data.js"
import Character from "./Character.js"

const wizard = new Character(characterData.hero)
const villain = new Character(characterData.monster)

function render() {
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
    document.getElementById('monster').innerHTML = villain.getCharacterHtml()
}

render()

function attack() {
    wizard.getDiceHtml()
    villain.getDiceHtml()
    wizard.takeDamage(villain.currentDiceScore)
    villain.takeDamage(wizard.currentDiceScore)
    render()

}

document.getElementById('attack-button').addEventListener('click', attack)





// const rainJanByWeek = [75, 83, 66, 43, 55, 99, 87, 16, 89, 64, 70, 80, 94, 77, 66, 73]

// const totalRainfallJan = rainJanByWeek.reduce(function(total, currentEl) {
//     return total + currentEl
// })

// console.log(totalRainfallJan)