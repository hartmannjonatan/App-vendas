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

    if(keys.length === 0){
        var alerta = document.getElementById('null-msg');
        alerta.classList.remove('invisible');
    }

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
        cardheader.innerHTML = "<h2 class='text-center nomeClienteCampo'>"+Venda.cliente_nome+"<br><span class='boldSpan px-5'>"+Venda.data+"</span></h2>";
        var spanEdit = document.createElement('span');
        spanEdit.classList.add('edit');
        spanEdit.id = key;
        spanEdit.dataset.toggle = "modal";
        spanEdit.dataset.target = "#modalEdit"
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
            editVenda(this.id);
        });

        spanDelete.addEventListener('click', function() {
            deleteVenda(this.id);
        });
    }
}
function deleteVenda(key) {
    var storage = window.localStorage;

    let aux = confirm("Você realmente deseja excluir essa venda?");

    if(aux == true){
        storage.removeItem(key);
        document.location.reload(true);
    }
 
}

function editVenda(key){
    var storage = window.localStorage;
    var formEdicao = document.getElementById('formEdicao');
    var Venda = JSON.parse(storage.getItem(key));
    formEdicao.innerHTML = '<form id="form" action="index.html">'
                            + '<div class="card mt-4"> <!-- vendedor -->'
                            + '    <div class="form-group card-body">'
                            + '        <h3 class="card-title">Vendedor</h3>'
                            + '        <div class="py-2">'
                            + '            <label for="vendedor">Nome: </label>'
                            + '            <input type="text" class="form-control" id="vendedor" value="'+Venda.vendedor_nome+'" required>'
                            + '        </div>'
                        + '             <div>'
                        + '                 <label for="cpfvendedor">CPF: </label>'
                        + '                 <input type="text" class="form-control" id="cpfvendedor" value="'+Venda.vendedor_cpf+'" required>'
                        + '             </div>'
                        + '         </div>'
                        + '     </div>'
                        + '     '
                        + '    <div class="card mt-4"> <!-- cliente -->'
                        + '         <div class="form-group card-body">'
                        + '             <h3 class="card-title">Cliente</h3>'
                        + '             <div class="py-2">'
                        + '                 <label for="cliente">Nome: </label>'
                        + '                 <input type="text" class="form-control" id="cliente" value="'+Venda.cliente_nome+'" required>'
                        + '             </div>'
                        + '             <div>'
                        + '                 <label for="cpfcliente">CPF: </label>'
                        + '                 <input type="text" class="form-control" id="cpfcliente" value="'+Venda.cliente_cpf+'" required>'
                        + '             </div>'
                        + '            <div>'
                        + '                <label for="endereco">Endereço: </label>'
                        + '                <input type="text" class="form-control" id="endereco" value="'+Venda.endereco+'" required>'
                        + '            </div>'
                        + '            <div>'
                        + '                <label for="telefone">Telefone: </label>'
                        + '                <input type="tel" class="form-control" id="telefone" value="'+Venda.telefone+'" required>'
                        + '            </div>'
                        + '        </div>'
                        + '    </div>'
                        + ''
                        + '    <div class="card mt-4"> <!-- Venda -->'
                        + '        <div class="form-group card-body">'
                        + '            <h3 class="card-title">Venda</h3>'
                        + '            <div class="py-2">'
                        + '                <label for="data">Data: </label>'
                        + '                <input type="date" class="form-control" id="data" value="'+Venda.data+'" required>'
                        + '            </div>'
                        + '            <div>'
                        + '                <label for="produto">Produto: </label>'
                        + '                <input type="text" class="form-control" id="produto" value="'+Venda.produto+'" required>'
                        + '            </div>'
                        + '            <div>'
                        + '                <label for="quantidade">Quantidade: </label>'
                        + '                <input type="number" class="form-control" id="quantidade" value="'+Venda.quantidade+'" required>'
                        + '            </div>'
                        + '            <div>'
                        + '                <label for="total">Total: </label>'
                        + '                <input type="text" class="form-control" id="total" value="'+Venda.total+'" required>'
                        + '            </div>'
                        + '            <div>'
                        + '                <label for="obs">Observações: </label>'
                        + '                <textarea class="form-control" id="obs" rows="3"  value="'+Venda.obs+'"></textarea>'
                        + '            </div>'
                        + '       </div>'
                        + '    </div>'
                        + '    <button id="btnSubmit" type="submit" class="btn btn-success w-100 mt-4">Salvar mudanças</button>'
                        + '</form>';
                    
    var form = document.getElementById("form");
    form.addEventListener("submit", function(){
        formSubmit(key);
    }, false);
}

function formSubmit(key) {
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

    var value = JSON.stringify(Venda);
    storage.setItem(key, value);
    e.preventDefault();
}

