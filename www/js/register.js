
window.onload = function() {
    var form = document.getElementById("form");
    form.addEventListener("submit", formSubmit, false);
}

function formSubmit() {
    var storage = window.localStorage;

    var Venda = new Object();

    alert("Salvo!");

    Venda.vendedor_nome = document.getElementById("vendedor").value;
    Venda.vendedor_cpf = document.getElementById("cpfvendedor").value;
    Venda.cliente_nome = document.getElementById("cliente").value;
    Venda.cliente_cpf = document.getElementById("cpfcliente").value;
    Venda.endereco = document.getElementById("endereco").value;
    Venda.telefone = document.getElementById("telefone").value;
    Venda.data = document.getElementById("data").value;
    Venda.produto = document.getElementById("produto").value;
    Venda.quantidade = document.getElementById("quantidade").value;
    Venda.total = document.getElementById("total").value;
    Venda.obs = document.getElementById("obs").value;
    if(!Venda.obs){
        Venda.obs = "Sem observação.";
    }

    var key = createKey();
    var value = JSON.stringify(Venda);
    storage.setItem(key, value);
    e.preventDefault();
}

function createKey() {
    var date = new Date();
    return date.getFullYear().toString() + date.getMonth().toString() + date.getDate().toString() + date.getHours().toString() + date.getMinutes().toString() + date.getSeconds().toString();
}
