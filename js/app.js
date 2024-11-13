
let valorTotal = 0;


function adicionar(){
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = parseInt(produto.split('R$')[1]);
    let quantidade = document.getElementById('quantidade').value;
    let valorSomado = quantidade * valorUnitario;   
    let carrinho =  (document.getElementById('lista-produtos'));
   
    carrinho.innerHTML =  carrinho.innerHTML + `<section class="carrinho__produtos" id="lista-produtos">
    <section class="carrinho__produtos__produto">
      <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorSomado}</span>
    </section>
  </section>`;



  valorTotal += valorSomado;
  document.getElementById('valor-total').innerHTML = `R$${valorTotal}`;
    console.log(valorTotal);
     
   
}
function limpar(){
   
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = `<section class="carrinho__produtos" id="lista-produtos">
    <section class="carrinho__produtos__produto">
    </section>
  </section>`;


  valorTotal = document.getElementById('valor-total');
  valorTotal.innerHTML = `<p class="carrinho__total">
  Total: <span class="texto-azul" id="valor-total">R$${0}</span>
</p>`;
valorTotal = 0;

}