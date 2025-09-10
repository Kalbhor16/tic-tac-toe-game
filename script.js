console.log("Welcome to Tic Toc Toe ")
let music = new Audio("music.mp3")
let audioTurn = new Audio("tig.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "x"
let isgameover =false;
//function to change the turn
const changeturn =() => {
  return turn ==="x"? "0": "x"
}
//function to check for a win
const checkWin = () => {
  let boxtext =document.getElementsByClassName('boxtext')
  let wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  wins.forEach (e => {
    if ((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
      document.querySelector('.info').innerText =boxtext[e[0]].innerText+"Won"
      isgameover = true
      //document.querySelector('.vidiobox').getElementsByTagName('vidio')[0].style.width="6px"
    }
      
    
  })
  }
//game logic
music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
  let boxtext = element.querySelector('.boxtext');
  element.addEventListener ('click', () => {
       if(boxtext.innerText===''){
          boxtext.innerText =turn;
          turn = changeturn();
          audioTurn.play();
          checkWin();
          if(!isgameover){
            document.getElementsByClassName("info")[0].innerText = "Turn for"+ turn;
          }
       }
  })
  
})
//add onclick listener to reset button
reset.addEventListener('click',()=>{
  let boxtexts = document.querySelectorAll('.boxtext');
  Array.from(boxtexts).forEach(element => {
    element.innerText=""
  });
  turn = "x";
  isgameover = false
  document.getElementsByClassName("info")[0].innerText = "Turn for"+ turn;
})