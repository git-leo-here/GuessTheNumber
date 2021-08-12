let ans=document.querySelector('.number')
let checkBtn=document.querySelector('.check');
let input=document.querySelector('.guess');
let score=document.querySelector('.score');
let hiscore=document.querySelector('.highscore')
let againBtn=document.querySelector('.again');
let message=document.querySelector('.message')

let number = Math.floor((Math.random()*20)+1)

let curr_score=20

checkBtn.addEventListener('click', ()=>{
    let guess = parseInt(input.value)
    if (guess===number){
        message.innerHTML = "Perfect ! You won"
        if (curr_score>(parseInt(hiscore.innerHTML))){
            hiscore.innerHTML = curr_score
        }
        ans.innerHTML = number
        ans.style.background = 'green'
    }
    else{
        if (guess>number){
            message.innerHTML = "Too high"
        }
        else{
            message.innerHTML = "Too low"
        }
        curr_score -=1
        score.textContent = curr_score
    }
})

againBtn.addEventListener("click", againFunc )

function againFunc(){
    number = Math.floor((Math.random()*20)+1)
    curr_score=20
    score.textContent = curr_score
    ans.innerHTML='?'
    ans.style.background = '#eee'
}