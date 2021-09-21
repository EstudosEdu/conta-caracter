const res = document.querySelector('#resCaracter');
const limite = 256;
let c;

function contagem(){
  let inputPega = document.querySelector('#inputPega').value
  let arr1 = inputPega.split('')

  if(arr1.length == ''){
    res.innerText = "Coloque algo valido!"; 
  }
  else if(arr1.length > limite){
    c = arr1.length - Number(limite)

    res.innerText = `Limite de Caracter Exedido!\n maximo é ${limite}, você colocou ${c} á mais`;
  }
  else if(arr1.length != ''){
    res.innerText = `Caracteres: ${arr1.length}`;
  }
}

function limpa(){
  document.querySelector('#inputPega').value = ''
}