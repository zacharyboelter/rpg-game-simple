
const heroElementId = 'hero'
const heroName = 'Wizard'
const heroAvatar = './images/wizard.png'
const heroHealth = '60'
const heroDiceRoll = 6

const monsterElementId = 'orc'
const monsterName = 'Orc'
const monsterAvatar = './images/orc.png'
const monsterHealth = '10'
const monsterDiceRoll = 4


renderCharacter(heroElementId, heroName, heroAvatar, heroHealth, heroDiceRoll) {
    return
}




document.querySelector('#hero').innerHTML = `
    <div class="character-card">
        <h4 class="name"> Wizard </h4>
        <img class="avatar" src="./images/wizard.png" />
        <p class="health">health: <b> 60 </b></p>
        <div class="dice-container">
            <div class="dice"> 6 </div>
        </div>
    </div>
`
document.querySelector('#monster').innerHTML = `
    <div class="character-card">
        <h4 class="name"> Orc </h4>
        <img class="avatar" src="./images/orc.png" />
        <p class="health">health: <b> 10 </b></p>
        <div class="dice-container">
            <div class="dice"> 4 </div>
        </div>
    </div>
`