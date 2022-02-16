const table = document.querySelector('table')
const result = document.getElementById('result')
const cover = document.getElementById('cover')
const resultContent = document.getElementById('result_content')
const btn = document.getElementById('btn')
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
    let sum = 0
    for (let i = 0; i < 9; i++) {
        sum += 1
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
            resultContent.innerHTML = `Выиграли крестики<br> Количество ходов ${move}`
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
            resultContent.innerHTML = `Выиграли нолики<br> Количество ходов ${move}`
            result.classList.add('open')
            cover.classList.add('open')
        }
    }
}

btn.addEventListener('click', e => {
    if(e.target.className = 'btn') {
        result.classList.remove('open')
        cover.classList.remove('open')
        location.reload()
    }
})