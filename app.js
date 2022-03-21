import characterData from "./data.js"
import Character from "./Character.js"

const wizard = new Character(characterData.hero)
const villain = new Character(characterData.monster)

function render() {
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
    document.getElementById('monster').innerHTML = villain.getCharacterHtml()
}

render()

