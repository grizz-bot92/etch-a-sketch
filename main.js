
const container = document.querySelector('#container');
const btnContainer = document.createElement('div');

const reset = document.createElement('button');
const clear = document.createElement('button');

clear.textContent = 'Clear Grid'
reset.textContent = 'Reset Grid';


btnContainer.appendChild(reset);
btnContainer.appendChild(clear);


document.body.appendChild(btnContainer);

function makeRows(size){ 
    
    container.style.setProperty('--grid-size', size);

        for(let i=0; i < size * size; i++){
            let row = document.createElement('div');
            row.className = 'row';
            container.appendChild(row);

            row.addEventListener("mouseover", (e) =>{
                let randomColor = Math.floor(Math.random()*16777215).toString(16);
                e.target.style.backgroundColor = '#' + randomColor;
            });
        };
    };

makeRows(16);

reset.addEventListener('click', resetSquares);
clear.addEventListener('click', clearGrid)


function clearGrid(){
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => row.style.backgroundColor = '');
}

function resetSquares() {
    let numberOfSquares = prompt("Enter a number of squares (max = 100): ")
    numberOfSquares = parseInt(numberOfSquares);

    if(isNaN(numberOfSquares) || numberOfSquares < 1 || numberOfSquares > 100){
        alert('Invalid number, please try again!');
        return;
    };

    let rows = document.querySelectorAll('.row');
    rows.forEach(row => row.remove());
    makeRows(numberOfSquares);
};

