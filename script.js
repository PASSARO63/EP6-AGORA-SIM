
/*Colocamos uma função para o usuario colocar seu nome e aparecer na pagina*/
function inclui_nome() {
    /*Chamei uma variavel*/
    var nome_variavel = prompt("Coloque seu nome:");
    /*Colocamos um IF para aparecer o nome do usuario + um Bem vindo*/
    if (nome_variavel) {
        document.getElementById("marcacao_nome").innerHTML = "Seja bem-vindo " + nome_variavel + " ,ao nosso site de matemática, onde tornamos o aprendizado divertido e acessível para todos. ";
    }
    /*Se o usuario não preencher o campo de nome o ELSE vai ativar e vai aparecer o alerta */
    else {
        alert("Nome não atribuido, preencha o nome.");
        inclui_nome();
    }
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------


//-------------------------------------------------------------------------------------------------------------------------------------------------------------
/*Aqui começa o javascript do Landing Page*/

/*Chamei uma variavel*/
var menu = document.querySelector('nav');

/*Chamei uma variavel*/
var menuIcon = document.querySelector('.menu-icon');

/*Chamei uma variavel*/
var closeIcon = document.querySelector('.close-icon');

/*Aqui e para qaundo a pessoa clicar na variavel menuIcon ele ativar o menu*/
menuIcon.addEventListener('click', () => {
    menu.classList.add('active')
});

/*Aqui e para qaundo a pessoa clicar na variavel closeIcon ele desativar o menu*/
closeIcon.addEventListener('click', () => {
    menu.classList.remove('active')
});

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

/*Colocamos uma função para corrigir as perguntas*/
function funcao_resposta() {

    /*Chamei uma variavel*/
    var resp1 = document.querySelector('input[name="quest_1"]:checked');

    /*Chamei uma variavel*/
    var resp2 = document.querySelector('input[name="quest_2"]:checked');

    /*Chamei uma variavel*/
    var resp3 = document.querySelector('input[name="quest_3"]:checked');

    /*Chamei uma variavel*/
    var resp4 = document.querySelector('input[name="quest_4"]:checked');

    /*Chamei uma variavel*/
    var resp5 = document.querySelector('input[name="quest_5"]:checked');

    /*Chamei uma variavel*/
    var resp6 = document.querySelector('input[name="quest_6"]:checked');

    /*Chamei uma variavel*/
    var resp7 = document.querySelector('input[name="quest_7"]:checked');

    /*Chamei uma variavel*/
    var resp8 = document.querySelector('input[name="quest_8"]:checked');

    /*Chamei uma variavel*/
    var resp9 = document.querySelector('input[name="quest_9"]:checked');

    /*Chamei uma variavel*/
    var resp10 = document.querySelector('input[name="quest_10"]:checked');

    /*Chamei uma variavel*/
    var contador = 0;

    /*Colocamos um If para conferir se as respostas estão certas ou erradas*/
    if (resp1 && resp2 && resp3 && resp4 && resp5 && resp6 && resp7 && resp8 && resp9 && resp10) {

        /*Colocamos um IF para ver se a resposta 1 esta correta ou errada e se a resposta estiver certa o contador conta +1 acerto*/
        if (resp1.value == "correta") {
            document.getElementById("resp_correta_1").innerHTML = "Correta!"
            contador = contador + 1;
        }
        /*Colocamos um ELSE para quando o ususario clicar na opção errada aparecer o porque ela errou*/
        else {
            document.getElementById("resp_errada_1").innerHTML = "Errada, pois o valor do discriminante (Δ) de uma equação de segundo grau é calculado pela fórmula Δ = b² - 4ac."
        }

        /*Colocamos um IF para ver se a resposta 2 esta correta ou errada e se a resposta estiver certa o contador conta +1 acerto*/
        if (resp2.value == "correta") {
            document.getElementById("resp_correta_2").innerHTML = "Correta!"
            contador = contador + 1;
        }
        /*Colocamos um ELSE para quando o ususario clicar na opção errada aparecer o porque ela errou*/
        else {
            document.getElementById("resp_errada_2").innerHTML = "Errada, a fórmula correta é x = (-b ± √Δ) / (2a), onde Δ é o discriminante da equação. Essa opção não corresponde à fórmula correta."
        }

        /*Colocamos um IF para ver se a resposta 3 esta correta ou errada e se a resposta estiver certa o contador conta +1 acerto*/
        if (resp3.value == "correta") {
            document.getElementById("resp_correta_3").innerHTML = "Correta!"
            contador = contador + 1;
        }
        /*Colocamos um ELSE para quando o ususario clicar na opção errada aparecer o porque ela errou*/
        else {
            document.getElementById("resp_errada_3").innerHTML = "Errada, porque quando o discriminante é igual a zero, a equação possui apenas uma raiz real."
        }

        /*Colocamos um IF para ver se a resposta 4 esta correta ou errada e se a resposta estiver certa o contador conta +1 acerto*/
        if (resp4.value == "correta") {
            document.getElementById("resp_correta_4").innerHTML = "Correta!"
            contador = contador + 1;
        }
        /*Colocamos um ELSE para quando o ususario clicar na opção errada aparecer o porque ela errou*/
        else {
            document.getElementById("resp_errada_4").innerHTML = "Errada, pois quando o discriminante é menor que zero, a equação não possui raízes reais."
        }

        /*Colocamos um IF para ver se a resposta 5 esta correta ou errada e se a resposta estiver certa o contador conta +1 acerto*/
        if (resp5.value == "correta") {
            document.getElementById("resp_correta_5").innerHTML = "Correta!"
            contador = contador + 1;
        }
        /*Colocamos um ELSE para quando o ususario clicar na opção errada aparecer o porque ela errou*/
        else {
            document.getElementById("resp_errada_5").innerHTML = "Errada. Quando o discriminante é maior que zero, a equação possui duas raízes reais."
        }

        /*Colocamos um IF para ver se a resposta 6 esta correta ou errada e se a resposta estiver certa o contador conta +1 acerto*/
        if (resp6.value == "correta") {
            document.getElementById("resp_correta_6").innerHTML = "Correta!"
            contador = contador + 1;
        }
        /*Colocamos um ELSE para quando o ususario clicar na opção errada aparecer o porque ela errou*/
        else {
            document.getElementById("resp_errada_6").innerHTML = "Errada, pois o coeficiente a é o termo que multiplica a variável de maior grau na equação de segundo grau e é responsável pela inclinação da curva. Os coeficientes b, c e d têm outras funções na equação."
        }

        /*Colocamos um IF para ver se a resposta 7 esta correta ou errada e se a resposta estiver certa o contador conta +1 acerto*/
        if (resp7.value == "correta") {
            document.getElementById("resp_correta_7").innerHTML = "Correta!"
            contador = contador + 1;
        }
        /*Colocamos um ELSE para quando o ususario clicar na opção errada aparecer o porque ela errou*/
        else {
            document.getElementById("resp_errada_7").innerHTML = "Errada, porque quando o coeficiente a é igual a zero, a equação deixa de ser uma equação de segundo grau."
        }

        /*Colocamos um IF para ver se a resposta 8 esta correta ou errada e se a resposta estiver certa o contador conta +1 acerto*/
        if (resp8.value == "correta") {
            document.getElementById("resp_correta_8").innerHTML = "Correta!"
            contador = contador + 1;
        }
        /*Colocamos um ELSE para quando o ususario clicar na opção errada aparecer o porque ela errou*/
        else {
            document.getElementById("resp_errada_8").innerHTML = "Errada, uma equação de segundo grau pode ter no máximo duas raízes reais, não podendo ter 0 raízes reais ou infinitas raízes reais."
        }

        /*Colocamos um IF para ver se a resposta 9 esta correta ou errada e se a resposta estiver certa o contador conta +1 acerto*/
        if (resp9.value == "correta") {
            document.getElementById("resp_correta_9").innerHTML = "Correta!"
            contador = contador + 1;
        }
        /*Colocamos um ELSE para quando o ususario clicar na opção errada aparecer o porque ela errou*/
        else {
            document.getElementById("resp_errada_9").innerHTML = "Errada, porque o nome dado às raízes iguais em uma equação de segundo grau é raízes coincidentes ou raiz dupla. As raízes distintas referem-se a raízes diferentes, as raízes complexas envolvem números complexos e as raízes imaginárias envolvem números imaginários."
        }

        /*Colocamos um IF para ver se a resposta 10 esta correta ou errada e se a resposta estiver certa o contador conta +1 acerto*/
        if (resp10.value == "correta") {
            document.getElementById("resp_correta_10").innerHTML = "Correta!"
            contador = contador + 1;
        }
        /*Colocamos um ELSE para quando o ususario clicar na opção errada aparecer o porque ela errou*/
        else {
            document.getElementById("resp_errada_10").innerHTML = "Errada, o nome dado às raízes diferentes em uma equação de segundo grau é raízes distintas"

            //Aqui e para mostrar quantas questões o usuario acertou
            document.getElementById("quantos_acertos").innerHTML = "Você acertou " + contador + " questões!";
        }

        
    //*Verifica as respostas, um alerta*//
        if (funcao_resposta) {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            Toast.fire({
                icon: 'success',
                title: 'Resposta resgistrada'
            })
        }

    }

    
    //*Verifica as respostas se foram enviadas, um alerta*//
    else {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'error',
            title: 'Não deixe resposta em branco, por favor!'
        })
    }

}
/*----------------------------------------------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------------------------------------------*/


function verificarRespostas() {

    /*Chamei uma variavel*/
    var resposta1 = document.getElementById("resposta1").value;

    /*Chamei uma variavel*/
    var resposta2 = document.getElementById("resposta2").value;

    /*Chamei uma variavel*/
    var resposta3 = document.getElementById("resposta3").value;

    /*Chamei uma variavel*/
    var resposta4 = document.getElementById("resposta4").value;

    /*Chamei uma variavel*/
    var resposta5 = document.getElementById("resposta5").value;

    /*Chamei uma variavel*/
    var resposta6 = document.getElementById("resposta6").value;

    /*Chamei uma variavel*/
    var resposta7 = document.getElementById("resposta7").value;

    /*Chamei uma variavel*/
    var resposta8 = document.getElementById("resposta8").value;

    /*Chamei uma variavel*/
    var resposta9 = document.getElementById("resposta9").value;

    /*Chamei uma variavel*/
    var resposta10 = document.getElementById("resposta10").value;

    //-----------------------------------------------------------------------------------------------------------------------------------------

    /*Chamei uma variavel*/
    var resposta01 = document.getElementById("resposta01").value;
    /*Chamei uma variavel*/
    var resposta02 = document.getElementById("resposta02").value;

    /*Chamei uma variavel*/
    var resposta03 = document.getElementById("resposta03").value;

    /*Chamei uma variavel*/
    var resposta04 = document.getElementById("resposta04").value;

    /*Chamei uma variavel*/
    var resposta05 = document.getElementById("resposta05").value;

    /*Chamei uma variavel*/
    var resposta06 = document.getElementById("resposta06").value;

    /*Chamei uma variavel*/
    var resposta07 = document.getElementById("resposta07").value;

    /*Chamei uma variavel*/
    var resposta08 = document.getElementById("resposta08").value;

    /*Chamei uma variavel*/
    var resposta09 = document.getElementById("resposta09").value;

    /*Chamei uma variavel*/
    var resposta010 = document.getElementById("resposta010").value;

    /*Chamei uma variavel*/
    var contador = 0;

    // Verificar respostas do Questionario
    if (resposta01 && resposta02 && resposta03 && resposta04 && resposta05 && resposta06 && resposta07 && resposta08 && resposta09 && resposta10) {
        //Colocamos um IF para adicionaras respostas das questões caso o usuario acerte va aparecer um grafico da resposta e tambem vai ghanar 1 ponto no contador
        if ((resposta1 == 1 && resposta01 == 3) || (resposta01 == 1 && resposta1 == 3)) {
            document.getElementById("resultado1").innerHTML = "Resposta correta! Observe no  gráfico";
            document.getElementById("imagem-1").innerHTML = "<img width='220px' height='120px' src='imagens/Grafico-1.png'>";
            contador = contador + 1;
        }
        //Colocamos um ELSE para caso o usuario errar a questão Aparecer o motivo do erro e também mostramos o grafico da resposta
        else {
            document.getElementById("incorreto1").innerHTML = "Resposta incorreta! O correto seria X1 = 1 , X2 = 3. Para resolvermos essa equação podemos usar a fórmula quadratica, que é x = (-b ± √(b² - 4ac)) / (2a), substituímos os valores a = 1, b = -4 e c = 3 na equação. Após os cálculos, encontramos as soluções x = 1 e x = 3. Como pode ver no gráfico os valores correspondentes.";
            document.getElementById("imagem-1").innerHTML = "<img width='220px' height='120px' src='imagens/Grafico-1.png'>";
        }


        //Colocamos um IF para adicionaras respostas das questões caso o usuario acerte va aparecer um grafico da resposta e tambem vai ghanar 1 ponto no contador
        if ((resposta2 == -3 && resposta02 == 1) || (resposta02 == -3 && resposta2 == 1)) {
            document.getElementById("resultado2").innerHTML = "Resposta correta! Segue o Grafico da resposta correta";
            document.getElementById("imagem-2").innerHTML = "<img width='220px' height='120px' src='imagens/Grafico-2.png'>"
            contador = contador + 1;
        }
        //Colocamos um ELSE para caso o usuario errar a questão Aparecer o motivo do erro e também mostramos o grafico da resposta
        else {
            document.getElementById("incorreto2").innerHTML = "Resposta incorreta! O correto seria X1 = -3 , X2 = 1. Para resolvermos essa equação podemos usar a fórmula quadratica, você usa a fórmula x = (-b ± √(b² - 4ac)) / (2a), onde a = 2, b = 5 e c = -3. Substituindo esses valores na fórmula e realizando os cálculos, você também encontrará as mesmas soluções x = -3 e x = 1. Como pode ver no gráfico os valores correspondentes.";
            document.getElementById("imagem-2").innerHTML = "<img width='220px' height='120px' src='imagens/Grafico-2.png'>";
        }


        //Colocamos um IF para adicionaras respostas das questões caso o usuario acerte va aparecer um grafico da resposta e tambem vai ghanar 1 ponto no contador
        if ((resposta3 == -3 && resposta03 == 3) || (resposta03 == -3 && resposta3 == 3)) {
            document.getElementById("resultado3").innerHTML = "Resposta correta! Segue o Grafico da resposta correta";
            document.getElementById("imagem-3").innerHTML = "<img width='220px' height='120px' src='imagens/Grafico-3.png'>"
            contador = contador + 1;
        }
        //Colocamos um ELSE para caso o usuario errar a questão Aparecer o motivo do erro e também mostramos o grafico da resposta
        else {
            document.getElementById("incorreto3").innerHTML = "Resposta incorreta! O correto seria X1 = -3 , X2 = 3. Para resolvermos essa equação podemos usar a fórmula quadratica,  usamos a fórmula x = (-b ± √(b² - 4ac)) / (2a), onde a = 1, b = 0 e c = -9. Substituindo esses valores na fórmula e realizando os cálculos, encontramos as mesmas soluções x = -3 e x = 3. Como pode ver no gráfico os valores correspondentes. ";
            document.getElementById("imagem-3").innerHTML = "<img width='220px' height='120px' src='imagens/Grafico-3.png'>";
        }


        //Colocamos um IF para adicionaras respostas das questões caso o usuario acerte va aparecer um grafico da resposta e tambem vai ghanar 1 ponto no contador
        if ((resposta4 == -1 && resposta04 == -1) || (resposta04 == -1 && resposta4 == -1)) {
            document.getElementById("resultado4").innerHTML = "Resposta correta! Segue o Grafico da resposta correta";
            document.getElementById("imagem-4").innerHTML = "<img width='220px' height='120px' src='imagens/Grafico-4.png'>"
            contador = contador + 1;
        }
        //Colocamos um ELSE para caso o usuario errar a questão Aparecer o motivo do erro e também mostramos o grafico da resposta
        else {
            document.getElementById("incorreto4").innerHTML = "Resposta incorreta! O correto seria X1 = -1 , X2 = -1. Para resolvermos essa equação podemos usar a fórmula quadratica, usamos a fórmula x = (-b ± √(b² - 4ac)) / (2a), onde a = 1, b = 2 e c = 1. Substituindo esses valores na fórmula e realizando os cálculos, encontramos a mesma solução x = -1. Como pode ver no gráfico os valores correspondentes.";
            document.getElementById("imagem-4").innerHTML = "<img width='220px' height='120px' src='imagens/Grafico-4.png'>";
        }


        //Colocamos um IF para adicionaras respostas das questões caso o usuario acerte va aparecer um grafico da resposta e tambem vai ghanar 1 ponto no contador
        if ((resposta5 == 1 && resposta05 == 1) || (resposta05 == 1 && resposta5 == 1)) {
            document.getElementById("resultado5").innerHTML = "Resposta correta! Segue o Grafico da resposta correta";
            document.getElementById("imagem-5").innerHTML = "<img width='220px' height='120px' src='imagens/Grafico-5.png'>"
            contador = contador + 1;
        }
        //Colocamos um ELSE para caso o usuario errar a questão Aparecer o motivo do erro e também mostramos o grafico da resposta
        else {
            document.getElementById("incorreto5").innerHTML = "Resposta incorreta! O correto seria X1 = 1 , X2 = 1. Para resolvermos essa equação podemos usar a fórmula quadratica, que é x = (-b ± √(b² - 4ac)) / (2a), substituímos os valores a = 4, b = -8 e c = 4 na equação. Após os cálculos, encontramos as soluções x = 1 e x = 1. Como pode ver no gráfico os valores correspondentes.";
            document.getElementById("imagem-5").innerHTML = "<img width='220px' height='120px' src='imagens/Grafico-5.png'>";
        }


        //Colocamos um IF para adicionaras respostas das questões caso o usuario acerte va aparecer um grafico da resposta e tambem vai ghanar 1 ponto no contador
        if ((resposta6 == -5 && resposta06 == -2) || (resposta06 == -5 && resposta6 == -2)) {
            document.getElementById("resultado6").innerHTML = "Resposta correta! Segue o Grafico da resposta correta";
            document.getElementById("imagem-6").innerHTML = "<img width='220px' height='120px' src='imagens/Grafico-6.png'>"
            contador = contador + 1;
        }
        //Colocamos um ELSE para caso o usuario errar a questão Aparecer o motivo do erro e também mostramos o grafico da resposta
        else {
            document.getElementById("incorreto6").innerHTML = "Resposta incorreta! O correto seria X1 = -5 , X2 = -2. Para resolvermos essa equação podemos usar a fórmula quadratica, que é x = (-b ± √(b² - 4ac)) / (2a), substituímos os valores a = 1, b = 7 e c = 10 na equação. Após os cálculos, encontramos as soluções x = -2 e x = -5. Como pode ver no gráfico os valores correspondentes.";
            document.getElementById("imagem-6").innerHTML = "<img width='220px' height='120px' src='imagens/Grafico-6.png'>";
        }


        //Colocamos um IF para adicionaras respostas das questões caso o usuario acerte va aparecer um grafico da resposta e tambem vai ghanar 1 ponto no contador
        if ((resposta7 == -5 && resposta07 == 4) || (resposta07 == 4 && resposta7 == -5)) {
            document.getElementById("resultado7").innerHTML = "Resposta correta! Segue o Grafico da resposta correta";
            document.getElementById("imagem-7").innerHTML = "<img width='220px' height='120px' src='imagens/Grafico-7.png'>"
            contador = contador + 1;
        }
        //Colocamos um ELSE para caso o usuario errar a questão Aparecer o motivo do erro e também mostramos o grafico da resposta
        else {
            document.getElementById("incorreto7").innerHTML = "Resposta incorreta! O correto seria X1 = -5 , X2 = 4. Para resolvermos essa equação podemos usar a fórmula quadratica, que é x = (-b ± √(b² - 4ac)) / (2a), substituímos os valores a = 1, b = 1 e c = -20 na equação. Após os cálculos, encontramos as mesmas soluções x = -5 e x = 4. .Como pode ver no gráfico os valores correspondentes.";
            document.getElementById("imagem-7").innerHTML = "<img width='220px' height='120px' src='imagens/Grafico-7.png'>";
        }


        //Colocamos um IF para adicionaras respostas das questões caso o usuario acerte va aparecer um grafico da resposta e tambem vai ghanar 1 ponto no contador
        if ((resposta8 == 3 && resposta08 == 3) || (resposta08 == 3 && resposta8 == 3)) {
            document.getElementById("resultado8").innerHTML = "Resposta correta! Segue o Grafico da resposta correta";
            document.getElementById("imagem-8").innerHTML = "<img width='220px' height='120px' src='imagens/Grafico-8.png'>"
            contador = contador + 1;
        }
        //Colocamos um ELSE para caso o usuario errar a questão Aparecer o motivo do erro e também mostramos o grafico da resposta
        else {
            document.getElementById("incorreto8").innerHTML = "Resposta incorreta! O correto seria X1 = -3 , X2 = 3. Para resolvermos essa equação podemos usar a fórmula quadratica,  que é x = (-b ± √(b² - 4ac)) / (2a), substituímos os valores a = 1, b = -6 e c = 9 na equação. Após os cálculos, encontramos a mesma solução x = 3. Como pode ver no gráfico os valores correspondentes.";
            document.getElementById("imagem-8").innerHTML = "<img width='220px' height='120px' src='imagens/Grafico-8.png'>";
        }


        //Colocamos um IF para adicionaras respostas das questões caso o usuario acerte va aparecer um grafico da resposta e tambem vai ghanar 1 ponto no contador
        if ((resposta9 == -3 && resposta09 == 4) || (resposta09 == 4 && resposta9 == -3)) {
            document.getElementById("resultado9").innerHTML = "Resposta correta! Segue o Grafico da resposta correta";
            document.getElementById("imagem-9").innerHTML = "<img width='220px' height='120px' src='imagens/Grafico-9.png'>"
            contador = contador + 1;
        }
        //Colocamos um ELSE para caso o usuario errar a questão Aparecer o motivo do erro e também mostramos o grafico da resposta
        else {
            document.getElementById("incorreto9").innerHTML = "Resposta incorreta! O correto seria X1 = -3 , X2 = 4. Para resolvermos essa equação podemos usar a fórmula quadratica, que é x = (-b ± √(b² - 4ac)) / (2a), substituímos os valores a = 5, b = 1 e c = -2 na equação. Após os cálculos, encontramos as mesmas soluções x = 2/5 e x = -1. Como pode ver no gráfico os valores correspondentes. ";
            document.getElementById("imagem-9").innerHTML = "<img width='220px' height='120px' src='imagens/Grafico-9.png'>";
        }


        //Colocamos um IF para adicionaras respostas das questões caso o usuario acerte va aparecer um grafico da resposta e tambem vai ghanar 1 ponto no contador
        if ((resposta10 == -1 && resposta010 == -1) || (resposta010 == -1 && resposta10 == -1)) {
            document.getElementById("resultado10").innerHTML = "Resposta correta! Segue o Grafico da resposta correta";
            document.getElementById("imagem-10").innerHTML = "<img width='220px' height='120px' src='imagens/Grafico-10.png'>"
            contador = contador + 1;
        }
        //Colocamos um ELSE para caso o usuario errar a questão Aparecer o motivo do erro e também mostramos o grafico da resposta
        else {
            document.getElementById("incorreto10").innerHTML = "Resposta incorreta! O correto seria X1 = -1 , X2 = -1. Para resolvermos essa equação podemos usar a fórmula quadratica, que é x = (-b ± √(b² - 4ac)) / (2a), substituímos os valores a = 2, b = 4 e c = 2 na equação. Após os cálculos, encontramos as soluções x = -1 e x = -1. As soluções são repetidas porque o discriminante é igual a zero. Como pode ver no gráfico os valores correspondentes.";
            document.getElementById("imagem-10").innerHTML = "<img width='220px' height='120px' src='imagens/Grafico-10.png'>";
            //Aqui e para ver quantas questões o usuario acertou
            document.getElementById("quantos_acertos").innerHTML = "Você acertou " + contador + " questões!";
        }

        //*Verifica as respostas um alerta*//
        if (verificarRespostas) {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            Toast.fire({
                icon: 'success',
                title: 'Resposta resgistrada'
            })
        }

    }

    //*Verifica as respostas se foram enviadas, um alerta*//
    else {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'error',
            title: 'Não deixe resposta em branco, por favor!'
        })
    }
}


/*----------------------------------------------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------------------------------------------*/

/*Aqui começa o javascript para mudança de imagem*/

/*Colocamos uma função para mudar um objeto para imagem*/
function mudar(objeto, imagem) {
    /*Mudando uma imagem por outra*/
    muda.src = imagem;
}

javascript
// Espera até que o documento esteja pronto
$(function () {
    var stopPoint = 500; // ponto em que a div deve parar de acompanhar a tela

    // Monitora o evento de rolagem da janela
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop(); // Obtém a posição atual de rolagem da página

        // Verifica se a posição de rolagem ultrapassou o ponto definido
        if (scrollTop >= stopPoint) {
            $('.info-aside').addClass('stopped'); // Adiciona a classe 'stopped' à div 'info-aside'
        } else {
            $('.info-aside').removeClass('stopped'); // Remove a classe 'stopped' da div 'info-aside'
        }
    });
});



