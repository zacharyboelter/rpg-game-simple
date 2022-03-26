// refactor from for loop to array constructor that fills with '0', then maps over and creates random number to take the place of '0'.
function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(function () {
        return Math.floor(Math.random() * 6) + 1
    })
}

function getDicePlaceholderHtml(diceCount) {
    return new Array(diceCount).fill(0).map(function(){
        return `<div class="placeholder-dice"></div>`
    }).join('')
}

export {getDiceRollArray, getDicePlaceholderHtml}