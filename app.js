import characterData from "./data.js"
import {getDiceRollArray} from "./utils.js"
import Character from "./Character.js"


const wizard = new Character(characterData.hero)
const villain = new Character(characterData.monster)

function render() {
    document.getElementById(wizard.elementId).innerHTML = wizard.getCharacterHtml()
    document.getElementById(villain.elementId).innerHTML = villain.getCharacterHtml()
}

render()

