let guess=Math.floor((Math.random()*100)+1)
console.log(guess)
let game=1
let count=0
let attempts=document.getElementById("attempt")
let buttons=document.getElementById("check_btn")
let hints=document.getElementById("hint")
let box=document.getElementById("input1")
function check()
{
    if(game == 1)
    {
        count++
        let val=document.forms[0]['val'].value
        console.log(val)
        if(val == guess)
        {
            hints.innerHTML="Guess is correct"
            attempts.innerHTML="Attempt : "+count
            buttons.innerHTML="reset"
            game=0
        }
        else if(val>guess)
        {
            hints.innerHTML="Guess is higher"
            attempts.innerHTML="Attempt : "+count
        }
        else
        {
            hints.innerHTML="Guess is lower"
            attempts.innerHTML="Attempt : "+count
        }
    }
    else
    {
        reset()
    }
}

function reset()
{
    guess=Math.floor((Math.random()*100)+1)
    console.log(guess)
    buttons.innerHTML="check"
    game=1
    count=0
    attempts.innerHTML="Attempt : "+count
    box.value = "";
}
