import { produtos } from "./Modulos/produtos.js";
import { clientes } from "./Modulos/clientes.js";

var menu = document.querySelectorAll(".menu");
var setaAvancaCliente = document.querySelector("#avancaCli");
var setaVoltaCliente = document.querySelector("#voltaCli");
var setaAvancaProduto = document.querySelector("#avancaProd");
var setaVoltaProduto = document.querySelector("#voltaProd");
var novoCliente = document.querySelector("#novoCli");
var salvarCliente = document.querySelector ("#salvarCli");
var novoProduto = document.querySelector ("#novoProd");
var salvarProduto = document.querySelector ("#salvarProd");
var codClientePedido = document.querySelector("#codClientePedido");
var nomeClientePedido = document.querySelector("#nomeClientePedido");
var lancaPedido = document.querySelector("#lancaPedido");
var inputCodProdPedido = document.querySelector("#inputCodProdPedido");
var inputDescProdPedido = document.querySelector("#inputDescProdPedido");
var valorProdPedido = document.querySelector("#valorProdPedido");
var qntPedido = document.querySelector("#QntPedido");
var form = document.forms;
var valorClientes;
var valorProduto;

for(let i = 0; i < menu.length; i++){
    menu[i].addEventListener('click', function(){
        
        if(menu[i] == menuCliente){
            Product.classList.add('desativo');
            Pedidos.classList.add('desativo');
            Client.classList.remove('desativo');
            dadosCliente(0);
        }
        
            if(menu[i] == menuProduto){
                Client.classList.add('desativo');
                Pedidos.classList.add('desativo');
                Product.classList.remove('desativo');
                dadosProduto(0)
            }
            
            if(menu[i] == menuPedido){
                Client.classList.add('desativo');
                Product.classList.add('desativo');
                Pedidos.classList.remove('desativo');
            }
        })
        
    }
    
    function dadosCliente(codigo){
        form[0][1].value = clientes[codigo]["codCliente"];
        form[0][2].value = clientes[codigo]["nomeCliente"];
        form[0][3].value = clientes[codigo]["dataCadCli"];
        valorClientes = codigo
    } 
    
    function dadosProduto(codigo){
        form[1][1].value = produtos[codigo]["codProduto"];
        form[1][2].value = produtos[codigo]["descProduto"];
        form[1][3].value = produtos[codigo]["precoProduto"];
        form[1][4].value = produtos[codigo]["qtdEstoqueProd"];
   valorProduto = codigo
    }

var fechar = document.querySelectorAll(".fechar");
    for(let kfechar of fechar){
        kfechar.addEventListener('click', function(){
            Product.classList.add('desativo');
            Pedidos.classList.add('desativo');
            Client.classList.add('desativo');
 })
}

 setaAvancaCliente.addEventListener('click', function(){
        if(valorClientes < clientes.length -1){
            valorClientes++;
            dadosCliente(valorClientes);
        }else{
            alert("Limite da lista de clientes alcançado");
        }
 })
    
 setaVoltaCliente.addEventListener('click', function(){
        if(valorClientes > 0){
            valorClientes--;
            dadosCliente(valorClientes);
        }else{
            alert("Começo da lista de clientes ja alcançado");
        }
 })


 setaAvancaProduto.addEventListener('click', function(){
    if(valorProduto < produtos.length-1){
        valorProduto++;
        dadosProduto(valorProduto);
    }else{
        alert("Fim da lista de produtos alcançado");
    }
 })

 setaVoltaProduto.addEventListener('click', function(){
    if(valorProduto > 0){
        valorProduto--;
        dadosProduto(valorProduto);
    }else{
        alert("Inicio da lista de produtos ja alcançado");
    }
 })
 
 novoCliente.addEventListener('click', function(){
    let data = new Date();
    let dia = data.getUTCDate();
    let mes = data.getUTCMonth() +1;
    let ano = data.getUTCFullYear();

    form[0][1].value = clientes.length +1;
    form[0][2].value = nomeCliente.classList.remove('desativaCursor');
    document.getElementById('nomeCliente').value='';
    form[0][3].value = `${dia}/${mes}/${ano}`;
 })

 salvarCliente.addEventListener('click', function(){
    let arrayCli = {};

    arrayCli.codCliente = document.getElementById('codCliente').value;
    arrayCli.nomeCliente = document.getElementById('nomeCliente').value;
    arrayCli.dataCadCli = document.getElementById('dataCadastro').value;

    if(arrayCli.codCliente > clientes.length && arrayCli.nomeCliente != ""){
        clientes.push(arrayCli);
        form[0][2].value = nomeCliente.classList.add('desativaCursor');
        alert("Cliente cadastrado com sucesso!!!");
        dadosCliente(0);
    }else{
        alert("Clique em NOVO ou digite um nome para ser possivel salvar um cliente")
    }
    
 })


 novoProduto.addEventListener('click', function(){
    form[1][1].value = produtos.length +1;
    form[1][2].value = desProduto.classList.remove('desativaCursor');
    document.getElementById('desProduto').value='';
    form[1][3].value = precoProduto.classList.remove('desativaCursor');
    document.getElementById('precoProduto').value='';
    form[1][4].value = Quantidade.classList.remove('desativaCursor');
    document.getElementById('Quantidade').value='';
 })

 salvarProduto.addEventListener('click', function(){
    let arrayProd = {};

    arrayProd.codProduto = document.getElementById('codProduto').value;
    arrayProd.descProduto = document.getElementById('desProduto').value;
    arrayProd.precoProduto = document.getElementById('precoProduto').value;
    arrayProd.qtdEstoqueProd = document.getElementById('Quantidade').value;

    
      if(arrayProd.codProduto > produtos.length && arrayProd.descProduto != "" && arrayProd.precoProduto != "" && arrayProd.qtdEstoqueProd != ""){
        produtos.push(arrayProd);
        form[1][2].value = desProduto.classList.add('desativaCursor');
        form[1][3].value = precoProduto.classList.add('desativaCursor');
        form[1][4].value = Quantidade.classList.add('desativaCursor');  
        alert("Produto cadastrado com sucesso!!!");
        dadosProduto(0)    
    }else{
        alert("Clique em NOVO ou preencha os espaços para ser possivel salvar um produto")
    }
 })

 codClientePedido.addEventListener('blur', function(){

    for(let indiceCliPedido of clientes){
        if(codClientePedido.value == indiceCliPedido["codCliente"]){
            nomeClientePedido.value = clientes[indiceCliPedido["codCliente"]-1]["nomeCliente"];
            break
        }else{
            nomeClientePedido.value = "Usuario nao encontrado"
        }
    }
    

 })

 inputCodProdPedido.addEventListener('blur', function(){
    
    for(let indiceProdPedido of produtos){
        if(inputCodProdPedido.value == indiceProdPedido["codProduto"]){
            inputDescProdPedido.value = produtos[indiceProdPedido["codProduto"]-1]["descProduto"];
            valorProdPedido.value = produtos[indiceProdPedido["codProduto"]-1]["precoProduto"];
            break;
        }else{
            inputDescProdPedido.value = "Produto nao encontrado";
            valorProdPedido.value = "00.00";
        }
    }
    
 })


 lancaPedido.addEventListener('click', function(){
    let td_cod = document.querySelector(".codigo");
    
    for(let indiceQnt of produtos){
            if(inputCodProdPedido.value == indiceQnt["codProduto"]){
                if(qntPedido.value <= produtos[indiceQnt["codProduto"] -1]["qtdEstoqueProd"] && qntPedido.value != "" && qntPedido.value > 0 ){
                    addLista();
                }else{
                    alert("Quantidade desejada indisponivel")
                }
            }
        }
        
        
 })
    
 function addLista (){

    let Total = document.getElementById('Total')
    let tableBody = document.getElementById('tableBody');
    
    
    for(let i of tableBody.rows){
        if(inputCodProdPedido.value == i.cells[0].textContent){
            alert("Esse pedido ja esta na lista")
            zerarPedidos();
            return
        }
    }
    
    let tr = tableBody.insertRow();
    tr.classList.add('tablePedidos')

    let td_itens = tr.insertCell();
    let td_desc = tr.insertCell();
    let td_Preco = tr.insertCell();
    let td_Qnt = tr.insertCell();
    let td_SubTotal = tr.insertCell();

   

    td_itens.innerText = inputCodProdPedido.value;
    td_desc.innerText = inputDescProdPedido.value;
    td_Preco.innerText = valorProdPedido.value;
    td_Qnt.innerText = qntPedido.value;
    td_SubTotal.innerText = (Number(valorProdPedido.value) * Number(qntPedido.value)).toFixed(2);
    Total.innerHTML = (Number(Total.innerHTML) + Number(td_SubTotal.innerHTML)).toFixed(2);

    zerarPedidos();
 }

 function zerarPedidos(){
    inputCodProdPedido.value = "";
    inputDescProdPedido.value = "";
    valorProdPedido.value = "";
    qntPedido.value = "";
 }
