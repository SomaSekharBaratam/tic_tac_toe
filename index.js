let players = [];
// let turn = 0;
let turn = Math.round(Math.random());
let gameOver = false;
const randomColor1 = Math.floor(Math.random()*16777215).toString(16);
const randomColor2 = Math.floor(Math.random()*16777215).toString(16);
let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

const startGame = () => {
  let input1 = document.getElementById("p1");
  let input2 = document.getElementById("p2");
  let player1 = input1.value; //player1 value
  let player2 = input2.value; //player2 value

  // if(player1 === "" || player2 === "") //if any player not there it will return
  // return;                              //but it wont work for only spaces
  if (isEmpty(player1) || isEmpty(player2)) {
    alert("player name is required");
    return;
  }

  input1.setAttribute("disabled", true);
  input2.setAttribute("disabled", true);

  let game = document.getElementById("game-container");
  game.classList.remove("hide");

  players.push(player1);
  players.push(player2);

  document.getElementById("turn").innerHTML = player1 + "'s turn";
};

const calculateWinner = () => {
  if (turn < 4) {
  return false;
  }
  const winnerCombinations = [
    ["00", "01", "02"],
    ["10", "11", "12"],
    ["20", "21", "22"],
    ["00", "10", "20"],
    ["01", "11", "21"],
    ["02", "12", "22"],
    ["00", "11", "22"],
    ["20", "11", "02"]
  ];

  for (let i = 0; i < winnerCombinations.length; i++) {
    let val1 = winnerCombinations[i][0];
    let val2 = winnerCombinations[i][1];
    let val3 = winnerCombinations[i][2];

    if (
      board[val1[0]][val1[1]] !== "" &&
      board[val1[0]][val1[1]] === board[val2[0]][val2[1]] &&
      board[val1[0]][val1[1]] === board[val3[0]][val3[1]]
    ) {
      return true;
    }
  }
    return false;
};
const handleClick = (el) => {
  // el.innerHTML = "X";
  if (el.innerHTML !== "" || gameOver){
     return;
  }

  let id = el.id;
  let i = parseInt(id[0]);
  let j = parseInt(id[1]);

  // let currentPlayer = turn%2;
  // el.innerHTML = (turn%2 === 0) ? "X" : "O";

  board[i][j] = turn % 2 === 0 ? "X" : "O";
  
  // el.innerHTML = board[i][j];
  // X.style.color = green;
  if(board[i][j] === "X"){
  // el.innerHTML = board[i][j];
el.style.backgroundColor = "#" + randomColor1;
  }
  else{
    // el.style.backgroundColor = "orange";
    el.style.backgroundColor = "#" + randomColor2;
  }

  if (calculateWinner()) {
    alert("Hurraayyyyy " + players[turn % 2] + "'s won");
    gameOver = true;
    return;
  }
  turn++;
  // document.getElementById("turn").innerHTML = (turn % 2 === 0) ? player1 turn : player2
  document.getElementById("turn").innerHTML = players[turn % 2] + "'s turn";
  // console.log("Clicked");

  //checking for winner
};

const isEmpty = (value) => !value || !value.trim();

//button code start
$( document ).ready(function() {
  // Bounce button
  $("#animatebutton").click(function(){
  const element = document.querySelector('.animatebutton');
  element.classList.add('animated', 'swing');
  setTimeout(function() {
  element.classList.remove('swing');
  }, 1000);
  });
  
  
  });
  //button code end