let mil = document.getElementById('milil')
let lts = document.getElementById('litros')
let user_meta = document.getElementById('modal_input')
let modal_hide = document.getElementById('modal_box')
let total_lts = 0
let total_mil = 0


function add100(){
    total_mil = total_mil+100
    printResults()
}

function add300(){
    total_mil = total_mil+300
    printResults()
}

function add500(){
    total_mil = total_mil+500
    printResults()
}

function add1k(){
    total_lts = total_lts+1
    printResults()
}

function btn_remove_1l () {
    if (parseInt(lts.value) >0) {
        lts.value = parseInt(lts.value)-1
    }
}

function btn_add_1l () {
    lts.value = parseInt(lts.value)+1
}

function btn_remove_100ml () {
    if (parseInt(mil.value) <100){
        mil.value=0
    } else if (parseInt(mil.value) >0){
        mil.value = parseInt(mil.value)-100
    }
    
}

function btn_add_100ml () {
    mil.value = parseInt(mil.value)+100
}

function meta_milToLts () {
    while (total_mil > 0 || user_meta > 0 ) 
        user_meta = user_meta.value-1   
}

function printResults() {
        let res_user_meta = (parseInt(user_meta.value)*1000)-((total_lts*1000)+total_mil)
        let res_user_meta_lts = parseInt(res_user_meta/1000)
        let res_user_meta_mil = res_user_meta - (res_user_meta_lts*1000)    
        div_limpar.innerHTML = `<input type="button" value="Limpar" class="add_ml_buttons" id="limpar_button" onclick="handleLimpar()">`
        if (user_meta.value > total_lts) {
            res.innerHTML = ' '
            res.innerHTML += `<p>Ao todo, você ingeriu ${total_lts} litros, e ${total_mil} ml hoje. </p>`
            res.innerHTML += `<p>Ainda faltam: ${res_user_meta_lts} litros e ${res_user_meta_mil} ML para alcançar a meta!`
        
        }else {
            res.innerHTML = ' '
            res.innerHTML += `<p>Ao todo, você ingeriu ${total_lts} litros, e ${total_mil} ml hoje. </p>`
            res.innerHTML += 'Parabéns! Meta diária foi alcançada com sucesso!'
        }
}

function adicionar() {
    if (mil.value <0 || lts.value <0 || mil.value == '' || lts.value =='' || lts.value >=10) {
        alert('Adicione um número válido!')  
    } else {
        total_lts = total_lts + parseInt(lts.value)
        total_mil = total_mil + parseInt(mil.value)
        milToLts()
        printResults()
    }

}

function milToLts (){
    while (total_mil >=1000) {
        total_mil = total_mil-1000
        total_lts++
    }
}

function definir_meta_btn() {
    if (modal_hide.style.display === "none") {
        modal_hide.style.display = "block"
    } else {
        modal_hide.style.display = "none"
    }
}


function handleLimpar() {
    res.innerHTML = ' '
    lts.value = 0
    mil.value = 0
    total_lts = 0
    total_mil = 0
    div_limpar.innerHTML = ' '
}

function modal_definir() {
    if (modal_hide.style.display === "none") {
        modal_hide.style.display = "block"
    } else {
        modal_hide.style.display = "none"
    }
}



