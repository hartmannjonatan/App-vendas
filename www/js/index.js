
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
}

window.onload = function() {
    listar();
}

function listar() {
    var storage = window.localStorage;

    var keys = Object.keys(storage);

    var section = document.getElementById('vendas');
    section.innerHTML = '';

    for(var key of keys){
        var Venda = JSON.parse(storage.getItem(key));
        var card = document.createElement('div');
        card.classList.add('card');
        card.classList.add('p-1');
        card.classList.add('mt-2'); 
        card.classList.add('border-dark'); 
        var cardheader = document.createElement('div');
        cardheader.classList.add('card-header');
        cardheader.classList.add('position-relative');
        card.appendChild(cardheader);
        cardheader.innerHTML = "<h2 class='text-center'>"+Venda.cliente_nome+"<span class='boldSpan px-5'>"+Venda.data+"</span></h2>";
        var spanEdit = document.createElement('span');
        spanEdit.classList.add('edit');
        spanEdit.id = key;
        cardheader.appendChild(spanEdit);
        spanEdit.innerHTML = "<img src='img/edit.png'>";
        var spanDelete = document.createElement('span');
        spanDelete.classList.add('deleteVenda');
        spanDelete.id = key;
        cardheader.appendChild(spanDelete);
        spanDelete.innerHTML = "<img src='img/delete.png'>"
        var cardbody = document.createElement('details');
        cardbody.classList.add('card-body');
        card.appendChild(cardbody);
        cardbody.innerHTML = "<summary>Veja os detalhes</summary>"
                            + "<h3>Vendedor</h3>"
                            + "<span class='boldSpan'>Nome: </span><span>"+Venda.vendedor_nome+"</span><br>"
                            + "<span class='boldSpan'>CPF: </span><span>"+Venda.vendedor_cpf+"</span><br>"
                            + "<hr>"
                            + "<h3>Cliente</h3>"
                            + "<span class='boldSpan'>Nome: </span><span>"+Venda.cliente_nome+"</span><br>"
                            + "<span class='boldSpan'>CPF: </span><span>"+Venda.cliente_cpf+"</span><br>"
                            + "<span class='boldSpan'>Endereço: </span><span>"+Venda.endereco+"</span><br>"
                            + "<span class='boldSpan'>Telefone: </span><span>"+Venda.telefone+"</span><br>"
                            + "<hr>"
                            + "<h3>Venda</h3>"
                            + "<span class='boldSpan'>Data: </span><span>"+Venda.data+"</span><br>"
                            + "<span class='boldSpan'>Produto: </span><span>"+Venda.produto+"</span><br>"
                            + "<span class='boldSpan'>Quantidade: </span><span>"+Venda.quantidade+"</span><br>"
                            + "<span class='boldSpan'>Total: </span><span>"+Venda.total+"</span><br>"
                            + "<span class='boldSpan'>Observações: </span><span>"+Venda.obs+"</span><br>";
        section.appendChild(card);

        spanEdit.addEventListener('click', function() {
            editVenda(key);
        });
        spanDelete.addEventListener('click', function() {
            deleteVenda(key);
        });
    }
}

function editVenda(key) {
    alert("editando"+key);
}

function deleteVenda(key) {
    alert("deletando"+key);
}
