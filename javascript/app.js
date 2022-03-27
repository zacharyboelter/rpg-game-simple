import characterData from "./data.js"
import Character from "./Character.js"


const getnewMonster = () => {
    const nextMonsterData = characterData[monstersArray.shift()]
    return nextMonsterData ? new Character(nextMonsterData) : {}
}
let monstersArray = ["mim", "crocodile", "dragon"];
const wizard = new Character(characterData.hero)
let monster = getnewMonster()
let isWaiting = false


function render() {
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
    document.getElementById('mim').innerHTML = monster.getCharacterHtml()

}
render()

function attack() {
    if(!isWaiting){
        wizard.getDiceHtml()
        monster.getDiceHtml()
        wizard.takeDamage(monster.currentDiceScore)
        monster.takeDamage(wizard.currentDiceScore)
        render()
        if (wizard.isDead) {
            endGame()
        } 
        else if (monster.isDead) {
            isWaiting = true
            if (monstersArray.length > 0) {
                setTimeout( () => {
                    monster = getnewMonster()
                    render()
                    isWaiting= false
                }, 1000)
            } else {
                endGame()
            }
        }
    }   
}

// ternary that states if both are dead, no victors. Wiz health more than 0, wiz won. else villain.
function endGame() {
    isWaiting = true
    const endMessage = wizard.health === 0 && monster.health === 0 ? 
    'No victors - all creatures are dead'
        : wizard.health > 0 ? `${wizard.name} has defeated ${monster.name}` 
        : `${monster.name} has defeated ${wizard.name}` 
        
        const endEmoji = wizard.health > 0 ? "🔮" : "☠️"
        setTimeout(()=>{
            document.body.innerHTML = `
                <div class="end-game">
                    <h2>Game Over</h2> 
                    <h3>${endMessage}</h3>
                    <p class="end-emoji">${endEmoji}</p>
                </div>
                `
        }, 1500)
    
}

document.getElementById('attack-button').addEventListener('click', attack)
