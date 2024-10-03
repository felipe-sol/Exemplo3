// Estrutura de repetição

for (let i=0; i<10;i++){
    //console.log(i)
}

//while) {
    
let f =0;
while (f<10){
    //console.log(f)
    f++;
}   

//do while
let w=0;

do{
    //console.log(w);
    w++;
}
while(w<5)

    //funções

function Ola(nome){
    //strings literal ou template strig ${} chama a variável
        console.log(`Seja bem vindo, ${nome}`)
        alert(`seja bem vindo a ${nome}`)
        document.write(`seja bem vindo a ${nome}`)
}
Ola("fiap")
 
// Arrow Function

const hello=()=>(console.log("função arrow function"))

hello()

//ARRAY[] OBJETO{} E METODOS()

let jogadores =[
    {nome:"Huguinho", idade:17},    
    {nome: "Zezinho", idade:18},
    {nome:"Luiziho", idade:19}
]

let listaJogadores =  jogadores.map(function(item){
    return item.idade;
})
console.log(listaJogadores)