fetch('../produtos.json')
.then(response =>response.json())
.then(json => loadProdutos(json));

 function loadProdutos(json){
   var cardProdutos = document.getElementById('produtos');
   json.map((produtos) => {
   cardProdutos.innerHTML += `
    <a href="../assets/pages/produto.html">
        <div class= "col-lg-3 col-md-4 col-sm-6 mb-3">
          <div class="card container-fluid card-parametros">
            <div class="img-container">
              <img src="`+produtos.img+`" class="card-img-center img-fluid img-card-parametros">
            </div>        
          <div class="card-body">
            <h6 class="card-title">`+produtos.tipo+`</h6>
            <p class="card-text">`+produtos.descricao+`</p>
          </div>
                <h5>`+produtos.valor+`</h5>
                <h6>Em até 3 x de `+produtos.parcela+`</h6>
        </div>  
    </a>
   `; 
 })
}
loadProdutos();