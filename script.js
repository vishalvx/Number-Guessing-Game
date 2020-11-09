let CorrectNum = RandomCreate()
let guesses = []

window.onload = function () {
    document.getElementById("check").addEventListener("click", playgame);
    document.getElementById("restart").addEventListener("click", restartgame);
}

function playgame() {
    let NumberGuess = document.getElementById("input").value;
    // console.log(NumberGuess)
    DisplayResult(NumberGuess)
    AddGuess(NumberGuess)
    ShowHistory()
}

function RandomCreate() {
    let RandomNumber = Math.floor(Math.random() * 100) + 1
    return RandomNumber
}

function DisplayResult(NumberGuess) {
    if (NumberGuess==CorrectNum) {
        showWin()
    }else if(NumberGuess>CorrectNum){
        showAbove()
    }else{
        showBelow()
    }
}

function showWin() {
    const text = "Awesome Job You Got It !!"
    insruction = dialog("won",text)
    document.getElementById("result").innerHTML = insruction
}

function showAbove() {
    const text = "Your Guess Is Too High!!"
    insruction = dialog("warning",text)
    document.getElementById("result").innerHTML = insruction
}

function showBelow() {
    const text = "Your Guess Is Too Low!!"
    insruction = dialog("warning",text)
    document.getElementById("result").innerHTML = insruction
}

function dialog(dialogType,text){
    let dia;
    switch (dialogType) {
        case "won":
            dia = '<div class="alert alert-info mt-3" role="alert">' + text + "</div>"
            break;

        case "warning":
            dia = '<div class="alert alert-warning mt-3" role="alert">' +text  + "</div>"
            break;
    
        default:
            break;
    }
    return dia
}

function AddGuess(NumberGuess){
    guesses.unshift(NumberGuess);
}

function ShowHistory(){
    let historyText = '<ul class="list-group">'
    for (let i = 0; i < guesses.length ; i++) {
        historyText += '<li class="list-group-item list-group-item-secondary mt-1"> You Guessed ' + guesses[i] + '</li>'
    }
    historyText += "</ul>"
    document.getElementById("history").innerHTML = historyText
}

function restartgame(){
    CorrectNum = RandomCreate()
    guesses = []
    document.getElementById("history").innerHTML = ""
    document.getElementById("result").innerHTML = ""
}