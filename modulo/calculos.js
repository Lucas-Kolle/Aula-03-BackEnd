/**********************************************************************************************************************************************************
 * Objetivo: Arquivo responsável pelas funções de calculos para este projeto
 * Autor: Lucas Kolle
 * Data: 11/02/2026
 * versão: 1.0.02.26
 **********************************************************************************************************************************************************/

//criando uma função para calcular o valor da compra parcelada 
//método tradicional de criar uma função
// REGRA: TODA FUNÇÃO DEVE RETORNAR NO MINIMO TRUE OU FALSE (BOOLEAN)
function calcularJurosCompostos(valorCompra, taxaJuros, tempoPago){ // () -> aqui você coloca as entradas / argumentos para utilizar na função
    
    //recebe os argumentos da função em variáveis locais
    //as variáveis valor, taxa, tempo são numéricas por conta da conversão (Number()), mas os argumentos ainda são Strings
    let valor = Number(valorCompra)
    let taxa = Number(taxaJuros)
    let tempo = Number(tempoPago)

    //validação para entradas vazias ou de caracteres inválidos
    if(valorCompra == "" || isNaN(valorCompra) || tempoPago == "" || isNaN(tempoPago)){
        console.log("ERRO: Valores de compra ou tempo de pagamentos estão incorretos.")
        return false
    }else{

        //chama a função para converter o número em percentual
    let percentual = calcularPercentual(taxa)

    //validação para o erro do percentual na função calcularPercentual
    if(percentual){
        let montante = valor * ((1 + percentual) ** tempo)
        return Number(montante.toFixed(2))
    }else{
        console.log("ERRO: Valor da taxa está incorreto.")
        return false
    }
    }

}

function calcularPercentual(numero){

    let numeroPercentual = Number(numero)

    //validação para verificar se é um número válido
    if( numero == "" || numero <= 0 || isNaN(numero)){
        return false // não pode processar
    }else{
        //processamento do calculo percentual
        let percentual = numeroPercentual / 100
        return Number(percentual.toFixed(2)) //retorna o resultado
    }
}

//tornando as duas funções públicas para este projeto
module.exports = {

    calcularJurosCompostos,
    calcularPercentual
}