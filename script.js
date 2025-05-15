function contar() {
    let txtini = document.querySelector("#txtini")
    let txtfim = document.querySelector("#txtfim")
    let txtpas = document.querySelector("#txtpas")
    let res = document.querySelector("#result")

    if (txtini.value.length == 0 || txtfim.value.length == 0 || txtpas.value.length == 0) {
        alert("Dados não preenchidos")
        res.innerHTML = `<p class="errorJS">Por favor, preencha <span>todos</span> os dados!!</p>`
    } else {
        const inicio = Number(txtini.value)
        const fim = Number(txtfim.value)
        let passo = Number(txtpas.value)
        let virgula = []

        if (passo == 0) {
            alert("Não é possível contar com passo 0. Considerando passo 1")
            passo = 1
        }

        if (inicio <= fim) {
            res.innerHTML = `Contando de ${inicio} a ${fim}: <br>`

            for(let c = inicio; c <= fim; c += passo) {
                virgula.push(c)
            }
        } else {
            res.innerHTML = `Contando de ${inicio} a ${fim}: <br>`

            for(let c = inicio; c >= fim; c -= passo) {
                virgula.push(c)
            }
        }
        res.innerHTML = res.innerHTML + virgula.join(", ")
    }
}