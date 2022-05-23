var numeroAtual = document.getElementById("idSpan"); //recebendo o valor do html 

var numero = 0;



function incremento() {

    if (numero == 30) {
        alert("O contador contabiliza até o 30");
          

    }else{
        document.getElementById('idSpan').style.color="black";   
        numero = numero + 1;//0+1
        numeroAtual.innerHTML = numero;    //numeroAtual = numero
    }
}

function decremento() {
    if (numero == -20 ) {
        alert("O contador contabiliza até o 30");
          

    } else {
        numero = numero - 1;
        numeroAtual.innerHTML = numero;         
    }

}
