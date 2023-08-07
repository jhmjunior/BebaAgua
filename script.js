let mil = document.getElementById('milil')
let lts = document.getElementById('litros')
let total_lts = 0
let total_mil = 0


function adicionar() {
    if (mil.value <0 || lts.value <0 || mil.value == '' || lts.value =='') {
        alert('Adicione um número válido!')  
    }
    
    else {
        total_lts = total_lts + parseInt(lts.value)
        total_mil = total_mil + parseInt(mil.value)
        milToLts()
        res.innerHTML = ' '
        res.innerHTML += `<p>Ao todo, foi ingerido ${total_lts} litros, e ${total_mil} ml hoje. </p>`
    }
}

function milToLts (){
    while (total_mil >=1000) {
        total_mil = total_mil-1000
        total_lts++
    }
}



