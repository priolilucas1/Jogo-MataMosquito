var altura= 0
var largura= 0
var vidas= 1
var tempoCronometro=20

var criaMosquitoTempo=0;

//--------------Definindo níveis------------------
    //O search pega apenas o que está a partir da interrogação, ou seja, os parâmetros
    var nivel = window.location.search
    //Substituindo a interrogação por '' com replace
    nivel = nivel.replace('?','')

    if(nivel==='facil'){
        criaMosquitoTempo = 2000
    }else if(nivel==='normal'){
        criaMosquitoTempo = 1500
    }else{
        criaMosquitoTempo = 1000
    }

    
//Ajustar tamanho dinamicamente
function ajustaTamanho() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}
ajustaTamanho()

//Colocando o tempo inicial
var cronometro = setInterval(()=> { 
    tempoCronometro--

    if (tempoCronometro<0) {
        clearInterval(cronometro) //Apaga o ciclo de Interval
        clearInterval(criarMosquito) 
        window.location.href='vitoria.html'
    }else{
        document.getElementById('tempo').innerText = tempoCronometro
    }

}, 1000)

//Posição do mosquito
function posicaoRandom() {

    //--------------Remover mosquito anterior------------------
    var mosquitoTela= document.getElementById('mosquito');

	if(mosquitoTela) {
        mosquitoTela.remove() //Remove da tela

        if(vidas>3){ //Perder mais de 3 vidas (Interrompe o jogo)
            window.location.href='game_over.html'

        }else{
            document.getElementById('v'+vidas).src='imagens/coracao_vazio.png'
            vidas++
        }
    }

    //---------------------Posição X e Y------------------------
	var posicaoX = Math.floor(Math.random() * largura) - 100 //Usado para não passar da tela
	var posicaoY = Math.floor(Math.random() * altura) - 100

	posicaoX = posicaoX < 0 ? 0 : posicaoX //Operadores ternários
	posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)
    

	//------------------Criar elemento HTML---------------------
	var mosquitoImagem = document.createElement('img') //Cria a tag imagem
	mosquitoImagem.src = 'imagens/mosquito.png' //Atribui a imagem na tag
	mosquitoImagem.className = tamanhoRandom() + ' ' + ladoRandom() //Define as classes, tem que separar com espaço
	mosquitoImagem.style.left = posicaoX + 'px'
	mosquitoImagem.style.top = posicaoY + 'px'
	mosquitoImagem.style.position = 'absolute'
    mosquitoImagem.id = 'mosquito' //Id do mosquito


    //----------------- Acertar mosquito------------------------
    mosquitoImagem.onclick = function(){
        this.remove();
    }
    mosquitoImagem.o

	document.body.appendChild(mosquitoImagem) //Adiciona o objeto no body
}

//Definir tamanho aleatório do mosquito
function tamanhoRandom() {
	var tamanho = Math.floor(Math.random() * 3)
	
	switch(tamanho) {
		case 0: //Se for 0, coloca classe como "mosquito1"
			return 'mosquito1' 
		
		case 1: //Se for 1, coloca classe como "mosquito2"
			return 'mosquito2'

		case 2: //Se for 2, coloca classe como "mosquito3"
			return 'mosquito3'
	}
}

//Definir o lado aleatório do mosquito
function ladoRandom() {
	var lado = Math.floor(Math.random() * 2)
	
	if(lado===0){
		return 'ladoESQ'
	}else{
        return 'ladoDIR'
    }        

}

