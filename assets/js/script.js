let tarefa = '';
let lista = [];
let elementoDiv = document.getElementById('listagem');
let checkBox = null;


function adicionar() {
    refreshTela()
}

function observarValor(e) {
    tarefa = e.target.value
    lista.push(tarefa)
    e.target.value = ""
    e.target.focus()
}

function refreshTela() {

    let html = "";

    for (i = 0; i < lista.length; i++) {
        html = html + ` <input type="checkbox" onchange="checar(${i})" name="name_${i}" id="${i}" /> <label id="lbl_${i}" >${lista[i]}</label> <br>`
    }
    elementoDiv.innerHTML = html
}

function checar(id) {

    let lbl = document.getElementById(`lbl_${id}`);


    lbl.className.indexOf('checado') !== -1 ? lbl.classList.remove('checado') : lbl.classList.add('checado');
}



