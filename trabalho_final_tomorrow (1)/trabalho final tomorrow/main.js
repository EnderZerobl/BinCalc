const binariopronto = document.getElementById("complemento");
const button = document.getElementById("buttonconvert");//Botão de conversão
const decimalpronto = document.getElementById("decimal")
const hexadecimalpronto = document.getElementById("hexadecimal")
const octalpronto = document.getElementById("octal")

// Conversão para Complemento de Um


function binaryToOnesComplement(binaryNumber) {
        if (!binaryNumber.match(/^[01]+$/)) {
          binariopronto.value =  "Invalid binary number";
        }
        var invertedBits = binaryNumber
          .split('')
          .map(bit => (bit === '0' ? '1' : '0'))
          .join('');
          
        binariopronto.value = invertedBits;
      
      }

//Fim do bloco de conversão para complemento de dois

//Binário para decimal

function binaryToDecimal(binary){
    var decimalNumber = parseInt(binary, 2);
    decimalpronto.value = decimalNumber;
  }

//Fim do bloco conversão para decimal

//Binário para hexadecimal

function hexconvert(biNu){

    var decim = parseInt(biNu, 2);
    var hex = decim.toString(16).toUpperCase();
    
    hexadecimalpronto.value = hex;
}

//Fim do bloco conversão para hexadecimal

//Binário para octal 

function octal(binarQ){

    var dec = parseInt(binarQ, 2);
    var octalb = dec.toString(8).toUpperCase();
    
    octalpronto.value = octalb;
}

//Fim do bloco de conversões

//Evento
button.addEventListener("click", () =>{
    let valor = document.getElementById("number").value;//número que será inputado

    octal(valor);
    binaryToDecimal(valor);
    hexconvert(valor);
    binaryToOnesComplement(valor);

});

