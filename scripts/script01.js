function maiorDosDois() {
    let n1 = window.document.getElementById('tn1').value
    let n2 = window.document.getElementById('tn2').value
    if ( n1 > n2 ) {
        window.alert( `O maior número é: ${n1}` );        
    } else if ( n2 > n1 ) {
        window.alert( "O maior número é: " + n2 );

    } else if (n1 == n2) {
        window.alert("Os valores sao iguais")
    } else {
        window.alert("Valores invalidos")
    }
}