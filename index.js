var $buttonStone1 = document.querySelector('button-stone-1')
var $buttonPaper1 = document.querySelector('.button-paper-1')
var $buttonScissors1 = document.querySelector('.button-scissors-1')

var $buttonStone2 = document.querySelector('button-stone-2')
var $buttonPaper2 = document.querySelector('.button-paper-2')
var $buttonScissors2 = document.querySelector('.button-scissors-2')

var $fieldPlayer1 = document.querySelector('.field-1')
var $fieldPlayer2 = document.querySelector('.field-2')

$buttonStone1.addEventListener('click', function(){
    $fieldPlayer1.innerHTML = "<img class='image-move' src='./images/stone.png'>"
})

$buttonPaper1.addEventListener('click', function(){
    $fieldPlayer1.innerHTML = "<img class='image-move' src='./images/paper.png'>"
})

$buttonScissors1.addEventListener('click', function(){
    $fieldPlayer1.innerHTML = "<img class='image-move' src='./images/scissors.png'>"
})

$buttonStone2.addEventListener('click', function(){
    $fieldPlayer2.innerHTML = "<img class='image-move' src='./images/stone.png'>"
})

$buttonPaper2.addEventListener('click', function(){
    $fieldPlayer2.innerHTML = "<img class='image-move' src='./images/paper.png'>"
})

$buttonScissors2.addEventListener('click', function(){
    $fieldPlayer2.innerHTML = "<img class='image-move' src='./images/scissors.png'>"
})