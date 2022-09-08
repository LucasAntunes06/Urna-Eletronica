let codigoCandidato1 = 10
let codigoCandidato2 = 06
let codigoCandidato3 = 79

let nomeCandidato1 = "D'Alessandro"
let nomeCandidato2 = "Fernandão"
let nomeCandidato3 = "Falcão"

let nomePartidoCandidato1 = "Libertadores"
let nomePartidoCandidato2 = "Mundial"
let nomePartidoCandidato3 = "Brasileirão"

let fotoCandidato1 = Dale.png
let fotoCandidato2 = Fernandao.png
let fotoCandidato3 = Falcao.png


function inserir(valor) {
  let num1 = document.getElementById("num1").value
  let num2 = document.getElementById("num2").value
  const hidden = document.getElementById("valorEscondido")

  if (num1 == "") {
      document.getElementById("num1").value = valor;
      document.getElementById("num1").style.border = "solid 2px gray"
  } else if (num2 == "") {
      document.getElementById("num2").value = valor
      document.getElementById("num1").style.border = "solid 1px black"
      document.getElementById("num2").style.border = "solid 2px gray"
  }
  
  var valor1 = parseInt(document.getElementById("num1").value);
  var valor2 = parseInt(document.getElementById("num2").value);
  let candidado = (valor1 * 10) + valor2;

  hidden.innerHTML = candidado

  if(candidado === codigoCandidato1){
    document.getElementById('foto').src = 'Dale.png'
    document.getElementById('foto').style.visibility = "visible"
    //elementoOculto.style.visibility = "visible"
    document.getElementById('nomeCandidato').innerHTML = nomeCandidato1
    // document.getElementById('numPartido').innerHTML = codigoCandidato1
    document.getElementById('partido').innerHTML = nomePartidoCandidato1
  }
  else if(candidado === codigoCandidato2){
    document.getElementById('foto').src = 'Fernandao.png'
    document.getElementById('foto').style.visibility = "visible"
    document.getElementById('nomeCandidato').innerHTML = nomeCandidato2
    // document.getElementById('numPartido').innerHTML = 06
    document.getElementById('partido').innerHTML = nomePartidoCandidato2
  }
  else if(candidado === codigoCandidato3){
    document.getElementById('foto').src = 'Falcao.png'
    document.getElementById('foto').style.visibility = "visible"
    document.getElementById('nomeCandidato').innerHTML = nomeCandidato3
    // document.getElementById('numPartido').innerHTML = codigoCandidato3
    document.getElementById('partido').innerHTML = nomePartidoCandidato3
  }
}

function corrige() {
  document.getElementById("num1").value = ""
  document.getElementById("num2").value = ""
  document.getElementById("foto").src = ""
  document.getElementById("nomeCandidato").innerHTML = ""
  document.getElementById("numPartido").innerHTML = ""
  document.getElementById("partido").innerHTML = ""
  document.getElementById('foto').style.visibility = 'hidden'
}

let codigoCandidatoSelecionado = null
let nomeCandidatoSelecionado = document.getElementsByTagName(image).src = ""
let partidoCandidatoSelecionado = null
let fotoCandidatoSelecionado = null

function votar() {
 // console.log(candidato)
  //console.log(document.getElementById("valorEscondido").innerHTML)
  //console.log(valor2)
  let votoConfirmado = document.getElementById('esquerda')
  if(document.getElementById("valorEscondido").innerHTML == 79 || document.getElementById("valorEscondido").innerHTML == 06 || document.getElementById("valorEscondido").innerHTML == 10){
    esquerda.innerHTML = "Voto Confirmado"
  }
  }

function votoBranco(){
 if(esquerda.innerHTML == "Voto Confirmado"){
  esquerda.innerHTML = "Voto anulado"}
}

// switch(codigo){
  

//   case codigoCandidato1://{
//     codigoCandidatoSelecionado = codigoCandidato1
//     nomeCandidatoSelecionado = nomeCandidato1
//     partidoCandidatoSelecionado = partidoCandidato1

//     nome.innerHTML = nomeCandidato1

//     break;
//  // }
//   case codigoCandidato2://{
//     codigoCandidatoSelecionado = codigoCandidato2
//     nomeCandidatoSelecionado = nomeCandidato2
//     partidoCandidatoSelecionado = partidoCandidato2
//     break;
//  // }
//   case codigoCandidato1://{
//     codigoCandidatoSelecionado = codigoCandidato3
//     nomeCandidatoSelecionado = nomeCandidato3
//     partidoCandidatoSelecionado = partidoCandidato3
//     break;
//   //}
// }



















  // const btn1 = document.getElementsById('btn1')
  // const btn2 = document.getElementsById('btn2')
  // const btn3 = document.getElementsById('btn3')
  // const btn4 = document.getElementsById('btn4')
  // const btn5 = document.getElementsById('btn5')
  // const btn6 = document.getElementsById('btn6')
  // const btn7 = document.getElementsById('btn7')
  // const btn8 = document.getElementsById('btn8')
  // const btn9 = document.getElementsById('btn9')
  // const btn0 = document.getElementsById('btn0')
































// default:{
//     codigo
// }





//console.log(numPartido.value)


    // switch(codigo){
    //     case codigoCandidatoSelecionado === 13
    //     :codigoCandidatoSelecionado = codigoCandidato1
    //     input.value === codigoCandidato1

    // }

