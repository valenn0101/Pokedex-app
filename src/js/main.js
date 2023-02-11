const tipoBtn = document.querySelector('#tipoBtn');
const generacionBtn = document.querySelector('#generacionBtn');
const tipoList = document.querySelector('#tipo');
const generacionList = document.querySelector('#generacion');

tipoBtn.addEventListener('click', function() {
  tipoList.style.display = tipoList.style.display === 'none' ? 'block' : 'none';
});

generacionBtn.addEventListener('click', function() {
  generacionList.style.display = generacionList.style.display === 'none' ? 'block' : 'none';
});
