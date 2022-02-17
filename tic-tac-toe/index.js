const table = document.querySelector('table')
const result = document.getElementById('result')
const cover = document.getElementById('cover')
const resultContent = document.getElementById('result_content')
const btn = document.getElementById('btn')
const x = 'X'
const o = 'O'
let move = 0

table.addEventListener('click', e => {
    if(e.target.className = 'cells') {
        move % 2 === 0 ? e.target.innerHTML = x : e.target.innerHTML = o
        move++
        check()
    }
})

const check = () => {
    const cells = document.getElementsByClassName('cells')
    for (let i = 0; i < 9; i++) {
        if (
            cells[0].innerHTML === x && cells[1].innerHTML === x && cells[2].innerHTML === x ||
            cells[3].innerHTML === x && cells[4].innerHTML === x && cells[5].innerHTML === x ||
            cells[6].innerHTML === x && cells[7].innerHTML === x && cells[8].innerHTML === x ||
            cells[0].innerHTML === x && cells[3].innerHTML === x && cells[6].innerHTML === x ||
            cells[1].innerHTML === x && cells[4].innerHTML === x && cells[7].innerHTML === x ||
            cells[2].innerHTML === x && cells[5].innerHTML === x && cells[8].innerHTML === x ||
            cells[0].innerHTML === x && cells[4].innerHTML === x && cells[8].innerHTML === x ||
            cells[2].innerHTML === x && cells[4].innerHTML === x && cells[6].innerHTML === x  
        ) {
            resultContent.innerHTML = `Выиграли крестики<br> Количество ходов ${move}`
            result.classList.add('open')
            cover.classList.add('open')
        } else if (
            cells[0].innerHTML === o && cells[1].innerHTML === o && cells[2].innerHTML === o ||
            cells[3].innerHTML === o && cells[4].innerHTML === o && cells[5].innerHTML === o ||
            cells[6].innerHTML === o && cells[7].innerHTML === o && cells[8].innerHTML === o ||
            cells[0].innerHTML === o && cells[3].innerHTML === o && cells[6].innerHTML === o ||
            cells[1].innerHTML === o && cells[4].innerHTML === o && cells[7].innerHTML === o ||
            cells[2].innerHTML === o && cells[5].innerHTML === o && cells[8].innerHTML === o ||
            cells[0].innerHTML === o && cells[4].innerHTML === o && cells[8].innerHTML === o ||
            cells[2].innerHTML === o && cells[4].innerHTML === o && cells[6].innerHTML === o 
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