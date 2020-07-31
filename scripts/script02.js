function sort() {
    let n1 = window.document.getElementById('tn1').value
    let n2 = window.document.getElementById('tn2').value
    let num = []

    if (!areNull(n1, n2)) {
        if (areEquals(n1, n2)) {
            window.alert("Os valores precisam ser diferentes")
        } else {
            num.push(n1, n2)
            window.alert(num.sort())
        }
    } else {
        window.alert("Os valore sao obrigatorios")
    }
}

function areEquals(n1,n2){
    return n1 == n2
}

function areNull(n1, n2) {
    return n1 == 0 || n2 == 0
}