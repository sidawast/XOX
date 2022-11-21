let players = ['x', 'o'];
let activePlayer = 0;

let arr = [];
let arrInverted = [];
let arr45 = [];
let arr135 = [];

let score = 0;
let win = false;
let playerSymbol = null;
let size;
 
function playersChanges() {
activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
console.log(activePlayer);
}

function startGame() {
    score = 0;
    let flag = 0;
    arr = [];
    arrInverted = [];
    
    if (flag == 0) {
    size = prompt("Выбирете размер игрового поля", 3);
    activePlayer = prompt("Выбирете игрока", 1);
    for (let i=0; i<size; i++) {
       arr.push(['']);
       arrInverted.push(['']);
       for (let j=0; j<size-1; j++) {
          arr[i].push('');
          arrInverted[i].push('');
       }
      }
      flag = 1;
      renderBoard(arr);
    }
  alert ('Игрок №1 играет за : ' + players[activePlayer]);
 
  
}

function click(row, column) {
  playerSymbol = players[activePlayer]
  arr[row][column] = playerSymbol;
  
  renderBoard(arr);
  arrCopy(column, row, playerSymbol);
  arrNext(); // НОВАЯ ЧАСТЬ КОДА
  arrNext135(); // НОВАЯ ЧАСТЬ КОДА
  checkPlayer(arr[row][column],arr);// НОВАЯ ЧАСТЬ КОДА
  checkPlayer(arr[row][column],arrInverted);// НОВАЯ ЧАСТЬ КОДА
  checkPlayer(arr[row][column],arr45);// НОВАЯ ЧАСТЬ КОДА
  //checkPlayer(arr[row][column],arr135);// НОВАЯ ЧАСТЬ КОДА - не рабочая часть кода
  playersChanges();
  score++;
}

function checkPlayer(player, arr) {

let playerS = [player,player,player];
let flagA = playerS.join().replace(/\,/g,"");
if(flagA != '') {

  for (let i = 0; i < arr.length; i++) {
    let a = arr[i].join().replace(/\,/g,"");
    if(a.includes(flagA)) {
      showWinner(activePlayer)
      console.log('Получилось')
    } else {console.log('Надо еще попробывать')}
  }
}
}  

function arrCopy(column, row, playerSymbol) {
    arrInverted[column][row] = playerSymbol;
}

//НОВАЯ ЧАСТЬ КОДА
function arrNext() {
  arr45 = [];
  let n = size * 2 - 1;
  let x = size - size + 1;
  let y = 0;
  let check = true;
  for(let i = 0; i < n; i++) {
    arr45.push([]);
    if(x < size +1 && check == true) {
      for (let a = 0, b = x-1; a < x && b <= x && b > -1; a++, b--) {
        if (arr[a] !== undefined && arr[a][b] !== undefined) {
        arr45[i].push(arr[a][b]);   
        }     
      }
    x +=1;
    continue;
    }
  }  
  console.log(arr45);
}

function arrNext135() {
  arr135 = [];
  let n = size * 2 - 1;
  let x = size - 1;
  let y = 0;
  let check = true;
  for(let i = 0; i < n; i++) {
    arr135.push([]);
    if(x < size +1 && check == true) {
      for (let a = 0, b = x-1; a < x && b <= x && b > -1; a++, b--) {
        if (arr[b] !== undefined && arr[a][b] !== undefined) {
        arr135[i].push(arr[a][b]);   
        }     
      }
    x -=1;
    continue;
    }
  }  
  console.log(arr135);
}
    
//let str = 'sidawast';
//console.log(Object.entries(str))