let mil = document.getElementById('milil')
let lts = document.getElementById('litros')
let total_lts = 0
let total_mil = 0

function add100(){
    total_mil = total_mil+100
    res.innerHTML = ' '
    res.innerHTML = '<p>Adicionado 100ml!</p>'
}

function add300(){
    total_mil = total_mil+300
    res.innerHTML = ' '
    res.innerHTML = '<p>Adicionado 300ml!</p>'
}

function add500(){
    total_mil = total_mil+500
    res.innerHTML = ' '
    res.innerHTML = '<p>Adicionado 500ml!</p>'
}

function add1k(){
    total_lts = total_lts+1
    res.innerHTML = ' '
    res.innerHTML = '<p>Adicionado 1 litro!</p>'
}

function btn_remove_1l () {
    lts.value = parseInt(lts.value)-1
    
}

function btn_add_1l () {
    lts.value = parseInt(lts.value)+1
}

function btn_remove_100ml () {
    mil.value = parseInt(mil.value)-100
    
}

function btn_add_100ml () {
    mil.value = parseInt(mil.value)+100
}


function adicionar() {
    if (mil.value <0 || lts.value <0 || mil.value == '' || lts.value =='') {
        alert('Adicione um número válido!')  
    }
    
    else {
        total_lts = total_lts + parseInt(lts.value)
        total_mil = total_mil + parseInt(mil.value)
        milToLts()
        div_limpar.innerHTML = `<input type="button" value="Limpar" class="add_ml_buttons" id="limpar_button" onclick="handleLimpar()">`
        res.innerHTML = ' '
        res.innerHTML += `<p>Ao todo, você ingeriu ${total_lts} litros, e ${total_mil} ml hoje. </p>`
    }
}

function milToLts (){
    while (total_mil >=1000) {
        total_mil = total_mil-1000
        total_lts++
    }
}



function handleLimpar() {
    res.innerHTML = ' '
    total_lts = 0
    total_mil = 0
    div_limpar.innerHTML = ' '
}

