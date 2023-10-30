/*Chamei uma variavel*/
var button = document.getElementById('calcular');

/*Chamei uma variavel*/
var button_limpar = document.getElementById('limpar');

//Falamos para quando cliclar no botão ele vai receber o nome calculo
button.addEventListener('click',calculo);
//Falamos para quando cliclar no botão limpar ele vai receber o nome limpar
button_limpar.addEventListener('click',limpar);

/*Fizemos uma função para resolver os calculos*/
function calculo(e){

    /*Chamei uma variavel*/
    var num1 = parseFloat(document.getElementById('num1').value);

    /*Chamei uma variavel*/
    var num2 = parseFloat(document.getElementById('num2').value);

    /*Chamei uma variavel*/
    var num3 = parseFloat(document.getElementById('num3').value);

    /*Chamei uma variavel*/
    var delta = Math.pow(num2,2) - 4*num1*num3;

    //--------------------------------------------------------------------------------------------------------------------------------------------
    //Aqui começa o JavaScript da Calculadora
    
    //Colocamos um alerta para dizer quanto o delta vale
    alert(`O delta é: ${delta}`);

    //Chamamos um IF para quando o delta vor maior que o 0
    if(delta > 0){

        /*Chamei uma variavel*/
        var raiz1 = (-num2 + Math.sqrt(delta) )/(2*num1);

        /*Chamei uma variavel*/
        var raiz2 = (-num2 - Math.sqrt(delta) )/(2*num1);

        //Colocamos isso para aparecer no html a Raiz 1 e a Raiz 2
        document.getElementById("resultado").innerHTML = "Raiz 1 = " + raiz1 + "<br>" + "Raiz 2 = " + raiz2; 
        
    }
    //Colocamos isso para quando delta for igual que zero ele vai nconseguir fazer os calculos
    else if (delta===0){
        /*Chamei uma variavel*/
        var raizUnica = (-num2 + Math.sqrt(delta) )/(2*num1);
        document.getElementById("resultado").innerHTML = "Raiz única = " + raizUnica;

    }
    //Chamamos isso para quando delta for menor que zero ele vai aparecer essa mensagem
    else if (delta < 0){
        document.getElementById("resultado").innerHTML = "Delta < 0, não existem raízes no conjunto dos números reais.";
    }
}

//Colocamos uma função para limpar os numeros
function limpar(e){
    //Falamos que o num1 não tem valor 
    document.getElementById('num1').value = " ";
    //Falamos que o num2 não tem valor 
    document.getElementById('num2').value = " ";
    //Falamos que o num3 não tem valor 
    document.getElementById('num3').value = " ";
    //Falamos para quando apertar no resultado ele resetar os numeros
    document.getElementById('resultado').innerHTML = null;
}
