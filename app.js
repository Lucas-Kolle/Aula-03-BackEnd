/***********************************************************************************************************************************************************************
 * Objetivo: Criar um sistema que permite calculo de juros utilizando boas práticas com funções.
 * Autor: Lucas Kolle
 * Data: 11/02/2026
 * versão: 1.0.02.26
 **********************************************************************************************************************************************************************/

//impor da biblioteca readline
const { match } = require("assert/strict")
const readline = require("readline")

//cria o objeto da entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//entrada do nome do cliente
entradaDeDados.question("Digite o nome do cliente:", function(nome){

    let nomeCliente = nome

    //entrada do nome do produto
    entradaDeDados.question("digite o nome do produto:", function(produto){

        let nomeProduto = produto

        //entrada do capital
        entradaDeDados.question("Digite o valor da compra:", function(capital){

            let capitalProduto = capital
            
            //entradad da taxa de juros
            entradaDeDados.question("Digite a taxa de juros a ser aplicada na compra:", function(taxa){

                let taxaCompra = taxa

                //entrada do tempo de pagamento
                entradaDeDados.question("Digite o tempo para realizar o pagamento:", function(tempo){

                    let tempoPagamento = tempo

                    //import da biblioteca que realiza calculos financeiros
                    let calculos = require("./modulo/calculos.js")

                    let montante = calculos.calcularJurosCompostos(capitalProduto, taxaCompra, tempoPagamento)

                    if(montante){

                        console.log(`o montante final é: ${montante.toFixed(2)}`)
                    }else{

                        console.log("ERRO: Devido a problemas no calculo de juros, o programa encerrou.")
                        entradaDeDados.close()
                    }
                    
                })
            })
        })
    })
})
