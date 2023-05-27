const form = document.getElementById('formjs');
const inputA = document.getElementById('a');
const inputB = document.getElementById('b');
const containerMessageError = document.querySelector('.mensagemErro')
const containerMessageSuccess = document.querySelector('.mensagemSucesso')

function aMaiorQueB (a , b){
    return a < b
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    let numA = parseInt( inputA.value)
    let numB = parseInt( inputB.value)
    
    const mensagemSucesso = `O numero ${ inputB.value}, campo B é maior que ${ inputA.value}, campo A`
    const mensagemErro = `O numero ${ inputB.value}, campo B é menor que ${ inputA.value}, campo A`
    let resultado = aMaiorQueB(numA, numB)
    console.log(resultado)
    if (resultado) {
        containerMessageSuccess.innerHTML = mensagemSucesso   
        containerMessageSuccess.style.display = 'block'
        containerMessageError.style.display = 'none'    
    }else {
         
        containerMessageError.innerHTML = mensagemErro   
        containerMessageError.style.display = 'block' 
        containerMessageSuccess.style.display = 'none' 
    }
})

