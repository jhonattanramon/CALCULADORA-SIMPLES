//teclas de limpar
const keyCleanAll = document.querySelector('.keyCleanAll')
const keyClean = document.querySelector('.keyClean')
const test = document.querySelector('#test')

//barra de resultado
let resultLow = document.querySelector('#resultLow')
let resultUp = document.querySelector('#resultUp')
const span = document.querySelectorAll('span')

    const resultUpInner = resultUp.innerHTML
    const resultLowInner = resultLow.innerHTML






const cleanAll = () => {
    resultUp.innerHTML = " "
    resultLow.innerHTML = " "
}



const cleanC = () => {
      const resultLowInner = resultLow.innerHTML
        let imprima =  resultLowInner.substring(0, resultLowInner.length - 1)
    resultLow.innerHTML = imprima   
}

const numberResult = (num) => {
    const concatenarNumber =  resultLow.innerHTML + num
    const valorNumber = resultLow.innerHTML = +concatenarNumber
    
    
}

const operations = (operation) => {
    
     if(resultLow.innerHTML == " " ){ return alert('Numeros primeiro, operadores depois')
    }else{
       const test =  resultLow.innerHTML + operation
       resultLow.innerHTML = test
       resultUp.innerHTML = resultLow.innerHTML 
       resultLow.innerHTML = " "
       console.log(resultLow)
       console.log(resultUp)
       
    }
}


const operationResult = () => {
    const ultimoCaracter = resultUp.innerHTML.charAt(resultUp.innerHTML.length - 1)
    const test = resultUp.innerHTML.substring(0, resultUp.innerHTML.length - 1)
    console.log(resultUpInner)
    console.log(test)
    switch(ultimoCaracter){
        case('+') :
            const resultadoDaSoma = +resultLow.innerHTML + +resultLow.innerHTML
            resultLow.innerHTML = resultadoDaSoma
            resultUp.innerHTML = " "
            console.log('soma')
            break

            case('-'):
            const resultadoDaSubitracao =  +test - +resultLow.innerHTML
            resultLow.innerHTML = resultadoDaSubitracao
            resultUp.innerHTML = " "
            console.log('subitração')
            break

            case('*'):
            const resultadoDaMultiplicacao = +test * resultLow.innerHTML
            resultLow.innerHTML = resultadoDaMultiplicacao
            resultUp.innerHTML = " "
            console.log('mult')
            console.log(resultadoDaMultiplicacao)
            break
            
            case('/'):
            const resultadoDaDivisao =  +test /  +resultLow.innerHTML
            resultLow.innerHTML = resultadoDaDivisao
            resultUp.innerHTML = " "
            console.log('div')
            break  
    }

}
