const table = document.querySelector('table')
const result = document.getElementById('result')
const cover = document.getElementById('cover')
const resultContent = document.getElementById('result_content')
let move = 0

table.addEventListener('click', e => {
    if(e.target.className = 'cells') {
        move % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = 'O'
        move++
        check()
    }
})

const check = () => {
    const cells = document.getElementsByClassName('cells')
    for (let i = 0; i < 9; i++) {
        if (
            cells[0].innerHTML === 'X' && cells[1].innerHTML === 'X' && cells[2].innerHTML === 'X' ||
            cells[3].innerHTML === 'X' && cells[4].innerHTML === 'X' && cells[5].innerHTML === 'X' ||
            cells[6].innerHTML === 'X' && cells[7].innerHTML === 'X' && cells[8].innerHTML === 'X' ||
            cells[0].innerHTML === 'X' && cells[3].innerHTML === 'X' && cells[6].innerHTML === 'X' ||
            cells[1].innerHTML === 'X' && cells[4].innerHTML === 'X' && cells[7].innerHTML === 'X' ||
            cells[2].innerHTML === 'X' && cells[5].innerHTML === 'X' && cells[8].innerHTML === 'X' ||
            cells[0].innerHTML === 'X' && cells[4].innerHTML === 'X' && cells[8].innerHTML === 'X' ||
            cells[2].innerHTML === 'X' && cells[4].innerHTML === 'X' && cells[6].innerHTML === 'X'  
        ) {
            resultContent.innerHTML = 'x - win'
            result.classList.add('open')
            cover.classList.add('open')
        } else if (
            cells[0].innerHTML === 'O' && cells[1].innerHTML === 'O' && cells[2].innerHTML === 'O' ||
            cells[3].innerHTML === 'O' && cells[4].innerHTML === 'O' && cells[5].innerHTML === 'O' ||
            cells[6].innerHTML === 'O' && cells[7].innerHTML === 'O' && cells[8].innerHTML === 'O' ||
            cells[0].innerHTML === 'O' && cells[3].innerHTML === 'O' && cells[6].innerHTML === 'O' ||
            cells[1].innerHTML === 'O' && cells[4].innerHTML === 'O' && cells[7].innerHTML === 'O' ||
            cells[2].innerHTML === 'O' && cells[5].innerHTML === 'O' && cells[8].innerHTML === 'O' ||
            cells[0].innerHTML === 'O' && cells[4].innerHTML === 'O' && cells[8].innerHTML === 'O' ||
            cells[2].innerHTML === 'O' && cells[4].innerHTML === 'O' && cells[6].innerHTML === 'O' 
        ) {
            resultContent.innerHTML = 'o - win'
            result.classList.add('open')
            cover.classList.add('open')
        }
    }
}