window.addEventListener('load', startGame);

let boardEl = document.getElementById('board');
let modalEl = document.getElementById('modal');
let resetButtons = document.getElementsByClassName('reset');

let panelStart = document.getElementById('modalStart'); //Внесены изменения
let btnstart = document.querySelector('.btnstart');    //Внесены изменения

for (let btn of resetButtons) {
  btn.addEventListener('click', function () {
    if (!modalEl.classList.contains('hidden')) {
      modalEl.classList.add('hidden');
    }
    panelStart.classList.remove('hidden');  //Внесены изменения
    panelStart.classList.add('activ')       //Внесены изменения
    //startGame();                          //Внесены изменения
    
  });
}

boardEl.addEventListener('click', function (event) {
  let targetClasses = event.target.classList;
  let targetData = event.target.dataset;
  if (targetClasses.contains('field') && !targetClasses.contains('busy')) {
    click(targetData.row, targetData.col);
  }
});

btnstart.addEventListener('click', function () {
  let sizeText = panelStart.querySelector('#exampleFormControlInput1');
  size = sizeText.value;

  let playerText = panelStart.querySelector('#exampleFormControlInput2');
  activePlayer = playerText.value;

  console.log(size, activePlayer);
  if (!size || !activePlayer) {              //Внесены изменения - Принимает значение поля и игрока по умолчанию
    size = 3;                                //Внесены изменения
    activePlayer = 0;                        //Внесены изменения
  }                                          //Внесены изменения
    panelStart.classList.remove('activ');    //Внесены изменения
    panelStart.classList.add('hidden');      //Внесены изменения
    startGame();                             //Внесены изменения
});

function showWinner(winner) {
  let header = modalEl.getElementsByTagName('h2')[0];
  header.textContent = `🍾 Победил игрок № ${winner} - ${players[winner]}! 🍾`;  //Внесены изменения
  modalEl.classList.remove('hidden');
}

function renderBoard(board) {
  const fields = [];
  for (let [i, row] of board.entries()) {
    for (let [j, value] of row.entries()) {
      fields.push(`
        <div class="field ${value ? 'busy' : 'free'}" 
            data-row="${i}" 
            data-col="${j}"
            style="grid-row:${i + 1};grid-column:${j + 1};"
        >
          ${value || ''}
        </div>
      `);
    }
  }
  boardEl.innerHTML = fields.join('');
}
