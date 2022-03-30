function calcularprimeira() {
    let valor1 = parseFloat(document.getElementById('txtn1').value)
    let valor2 = parseFloat(document.getElementById('txtn2').value)
    let calcularPrimeira = valor1 / valor2;
    console.log(calcularPrimeira)
    let msg = `Resultado da primeira operação é ${calcularPrimeira}`
    res.innerText = msg;
}

function calcularsegunda() {
    let valor3 = parseFloat(document.getElementById('txtn3').value)
    let calcularsegunda = valor3 * 100;
    console.log(calcularsegunda)
    let msg2 = `O resultado da segunda operação é ${calcularsegunda.toFixed(2)}%`
    res2.innerText = msg2;
}

