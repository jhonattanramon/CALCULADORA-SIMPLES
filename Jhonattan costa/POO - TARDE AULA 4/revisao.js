
const nomes = [
    'vitoria', 
    'roberto',
    'Felipe',
    'Leonardo',
   ' Arthur'

]
const idades = [
    '21',
    '21',
    '23',
    '18',
    '21'
]

const matriculas = [
    '1',
    '2',
    '3',
    '4',
    '5',
]

const aluno2 = {
    nome: 'bob', 
    idade: '21',
    matricula: '2'
}

console.log(aluno2.nome)
//------------------------
const buscarMatricula = prompt('digite a matricula do aluno')
for( let i = 0; i < matriculas.length; i++){
    if(buscarMatricula == matriculas[i]) {
        console.log(matriculas[i]+ ': ' + nomes[i] + ' , sua idade é ' + idades[i]  )
    }
    
}





