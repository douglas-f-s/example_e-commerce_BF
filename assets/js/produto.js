const form = document.querySelector('#cep');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  setValorFrete();
});

function setValorFrete (msg) {
  const valorFrete = document.querySelector('#valorfrete');
  valorfrete.innerHTML ='';
  const p = document.createElement('p');
  p.classList.add('v-frete');
  p.innerHTML= 'Entrega em 3 dias úteis no valor de R$ 8,00';
  valorfrete.appendChild(p);
}
