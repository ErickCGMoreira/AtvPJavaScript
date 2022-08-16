var player = "X";//controle de quem é o jogador atual
var numJog = 0;//numero de jogadas feitas
var PtX = [0,0,0,0,0,0,0,0];//pontuação X do estado atual do tabuleiro
var PtO = [0,0,0,0,0,0,0,0];//pontuação O do estado atual do tabuleiro
var PM = "";//proximo movimento do bot
var pc = false;//controle para ativar o modo vs ai
var dificul = false;//controle de dificuldade
const placar = [0,0,0];//placar

function checkjogo(id) {//esta função é a base do jogo, ela cuida de mudar as imagens ao serem clicadas, adiministra a vez dos jogadores etc...
    var opt = verificarSrc(id);//opt recebe o nome da imagem clickada

    if (opt == "p.png") {//se a imagem clickada for "vasia"
        document.getElementById(id).src = "img/" + player + ".png";//imagem é modificada para a imagem correspondente do player atual
        numJog++;//é registrada 1 jogada

        if (wincheck()) {//caso a condição de vitoria for realizada o jogo termina e o placar é ajustado
            alert("Fim De Jogo " + player + " Venceu!");
            if(player = "X"){
                placar[0]++;
            } else {
                placar[1]++;
            }
            atualizarplacar();
            return false;
        }

        if (numJog >= 9) {//caso foram feitas 9 jogadas o jogo empata
            placar[2]++;
            atualizarplacar();
            alert("Deu velha");
            return false;
        }

        if (player == "X") {//atualiza o player atual, se for o movimento do X o próximo movimento será do O
            player = "O";   
        }
        else {
            player = "X";
        }

        if(player == "O" && pc){//caso seja a vez do O e o modo vs ai estiver ativado é realizado o movimento do bot
            if(dificul){
                checkjogo(modoD());//o movimento é feito atravez da função checkjogo que recebe como valor do id o retorno da função que determina movimento do bot
            }else{
                checkjogo(modoF());
            }
            
        }
    }
}

function modoF(failsafe){//função para determinar o movimento do modo fácil
    if(failsafe != null){//essa fail safe ajuda o código a sair do loop
        return failsafe;
    }
    if(verificarSrc("c5") == "p.png"){//primeiro tenta-se marcar a casa do meio
        return "c5"
    }
    var temp = "c" + Math.floor((Math.random()* 9) + 1);//depois tenta-se marcar uma casa aleatória
    if(verificarSrc(temp) == "p.png"){
        return temp;
    }else{
        modoF()//caso a casa selecionada seja uma casa preenchida a função modoF é chamada novamente, criando um loop que é quebrado no momento queé selecionada uma casa disponível
    }
}

function modoD(){//função que determina o movimento do modo difícil, ela funciona em 3 partes: tentar ganhar, impedir o jogador de ganhar, jogo preestabelecido
    PtX = [0,0,0,0,0,0,0,0];//cada linha, coluna e diagonal do tabuleiro recebe um numero, esse numero corresponde ao numero de imagens iguais presentes na linha atual, esse array marca a pontual referente ao X
    PtO = [0,0,0,0,0,0,0,0];//este array tem o mesmo propósito do array de cima porem ele corresponde a pontuação do O
    PM = "";//essa variável guarda o próximo movimento

    progress();//checar o progresso do tabuleiro
    
    //tentar ganhar
    PtO.forEach(Pmov);//para cada numero do array é executado a função Pmov, ela por sua vez determina se existe uma oportunidade de um novo movimento
    if(PM != "" && PM != null){//caso tenha a oportunidade de movimento esse movimento é retornado e será recebido pela função checkjogo para realizar o movimento
        return PM;
    }
    //impedir o jogador de ganhar
    PM =  "";
    PtX.forEach(Pmov);//para cada numero do array é executado a função Pmov, ela por sua vez determina se existe uma oportunidade de um novo movimento
    if(PM != "" && PM != null){//caso tenha a oportunidade de movimento esse movimento é retornado e será recebido pela função checkjogo para realizar o movimento
        return PM;
    }
    //jogo preestabelecido, caso nenhuma das condições acima se apliquem o bot realiza um dos movimentos abaixo
    if(verificarSrc("c5") == "p.png"){
        return "c5";
    }
    if(verificarSrc("c1") == "p.png" && verificarSrc("c9") != "X.png"){
        return "c1";
    }else if(verificarSrc("c2") == "p.png"){
        return "c2";
    }
    if(verificarSrc("c9") == "p.png"){
        return "c9";
    }else if(verificarSrc("c8") == "p.png"){
        return "c8";
    }
    if(verificarSrc("c4") == "p.png"){
        return "c4";
    }
    if(verificarSrc("c3") == "p.png"){
        return "c3";
    }
    if(verificarSrc("c6") == "p.png"){
        return "c6";
    }
    if(verificarSrc("c7") == "p.png"){
        return "c7";
    }
}

function Pmov(value, index, array){//essa função recebe um elemento dos arrays Ptx e PtO
    if(value == 2){//caso o valor seja 2 será selecionado na fileira atual a casa que está vasia e o proximo movimento recebe a casa selecionada
        switch(index){
            case 0: if(verificarSrc("c1") == "p.png"){PM = "c1";}else if (verificarSrc("c2") == "p.png"){PM = "c2";}else if (verificarSrc("c3") == "p.png"){PM = "c3";} break;
            case 1: if(verificarSrc("c4") == "p.png"){PM = "c4";}else if (verificarSrc("c5") == "p.png"){PM = "c5";}else if (verificarSrc("c6") == "p.png"){PM = "c6";} break;
            case 2: if(verificarSrc("c7") == "p.png"){PM = "c7";}else if (verificarSrc("c8") == "p.png"){PM = "c8";}else if (verificarSrc("c9") == "p.png"){PM = "c9";} break;
            case 3: if(verificarSrc("c1") == "p.png"){PM = "c1";}else if (verificarSrc("c4") == "p.png"){PM = "c4";}else if (verificarSrc("c7") == "p.png"){PM = "c7";} break;
            case 4: if(verificarSrc("c2") == "p.png"){PM = "c2";}else if (verificarSrc("c5") == "p.png"){PM = "c5";}else if (verificarSrc("c8") == "p.png"){PM = "c8";} break;
            case 5: if(verificarSrc("c3") == "p.png"){PM = "c3";}else if (verificarSrc("c6") == "p.png"){PM = "c6";}else if (verificarSrc("c9") == "p.png"){PM = "c9";} break;
            case 6: if(verificarSrc("c1") == "p.png"){PM = "c1";}else if (verificarSrc("c5") == "p.png"){PM = "c5";}else if (verificarSrc("c9") == "p.png"){PM = "c9";} break;
            case 7: if(verificarSrc("c3") == "p.png"){PM = "c3";}else if (verificarSrc("c5") == "p.png"){PM = "c5";}else if (verificarSrc("c7") == "p.png"){PM = "c7";} break;
        }
    }
}

function progress(){//cada casa é verificada e suas respectivas fileiras recebem update em suas pontuações
    if(verificarSrc("c1") == "X.png"){
        PtX[0]++;
        PtX[3]++;
        PtX[6]++;
    }else if(verificarSrc("c1") == "O.png"){
        PtO[0]++;
        PtO[3]++;
        PtO[6]++;
    }
    if(verificarSrc("c2") == "X.png"){
        PtX[0]++;
        PtX[4]++;
    }else if(verificarSrc("c2") == "O.png"){
        PtO[0]++;
        PtO[4]++;
    }
    if(verificarSrc("c3") == "X.png"){
        PtX[0]++;
        PtX[5]++;
        PtX[7]++;
    }else if(verificarSrc("c3") == "O.png"){
        PtO[0]++;
        PtO[5]++;
        PtO[7]++;
    }
    if(verificarSrc("c4") == "X.png"){
        PtX[1]++;
        PtX[3]++;
    }else if(verificarSrc("c4") == "O.png"){
        PtO[1]++;
        PtO[3]++;
    }
    if(verificarSrc("c5") == "X.png"){
        PtX[1]++;
        PtX[4]++;
        PtX[6]++;
        PtX[7]++;
    }else if(verificarSrc("c5") == "O.png"){
        PtO[1]++;
        PtO[4]++;
        PtO[6]++;
        PtO[7]++;
    }
    if(verificarSrc("c6") == "X.png"){
        PtX[1]++;
        PtX[5]++;
    }else if(verificarSrc("c6") == "O.png"){
        PtO[1]++;
        PtO[5]++;
    }
    if(verificarSrc("c7") == "X.png"){
        PtX[2]++;
        PtX[3]++;
        PtX[7]++;
    }else if(verificarSrc("c7") == "O.png"){
        PtO[2]++;
        PtO[3]++;
        PtO[7]++;
    }
    if(verificarSrc("c8") == "X.png"){
        PtX[2]++;
        PtX[4]++;
    }else if(verificarSrc("c8") == "O.png"){
        PtO[2]++;
        PtO[4]++;
    }
    if(verificarSrc("c9") == "X.png"){
        PtX[2]++;
        PtX[5]++;
        PtX[6]++;
    }else if(verificarSrc("c9") == "O.png"){
        PtO[2]++;
        PtO[5]++;
        PtO[6]++;
    }
}
            
function wincheck(){//caso alguma fila de PtO ou PtX tenha uma pontuação de 3 o jogo é declarado como ganho
    PtO = [0,0,0,0,0,0,0,0];
    PtX = [0,0,0,0,0,0,0,0];
    progress();//checar o progresso do tabuleiro
    if(PtO[0] == 3 || PtO[1] == 3 || PtO[2] == 3 || PtO[3] == 3 || PtO[4] == 3 || PtO[5] == 3 || PtO[6] == 3|| PtO[7] == 3 || PtX[0] == 3 || PtX[1] == 3 || PtX[2] == 3 || PtX[3] == 3 || PtX[4] == 3 || PtX[5] == 3 || PtX[6] == 3|| PtX[7] == 3){
        return true;
    }
    return false;
}

function verificarSrc(id) {//essa função pega o src do elemento de id informado
    var file = document.getElementById(id).src;
    return file.substring(file.length - 5, file.length);//é retornado apenas os ultimos 5 digitos do src
}

function bot(){//função chamada pelo botão que determina se o modo vs ai está ativado ou não
    if(pc){
        pc = false;//desativa o modo vs ai
        document.getElementById("UI").textContent = "Jogar contra computador: DESATIVADO";//update na UI
        document.getElementById("butsim").textContent = "SIM";
    } else {
        pc = true;//ativa o modo vs ai
        document.getElementById("UI").textContent = "Jogar contra computador: ATIVADO - FACIL";//update na UI
        document.getElementById("butsim").textContent = "NÃO";
    }
}

function easy(){//função chamada pelo botão que determina se o modo facil está ativado
    dificul = false;//ativa o modo facil
    pc = true;//ativa o modo vs ai
    document.getElementById("UI").textContent = "Jogar contra computador: ATIVADO - FACIL";//update na UI
    document.getElementById("butsim").textContent = "NÃO";
}

function hard(){//função chamada pelo botão que determina se o modo dificil está ativado
    dificul = true;//ativa o modo dificil
    pc = true;//ativa o modo vs ai
    document.getElementById("UI").textContent = "Jogar contra computador: ATIVADO - DIFICIL";//update na UI
    document.getElementById("butsim").textContent = "NÃO";
}

function atualizarplacar(){//atualiza o placar com as pontuações atuais
    document.getElementById("placarx").textContent = placar[0];
    document.getElementById("placaro").textContent = placar[1];
    document.getElementById("placarv").textContent = placar[2];
}

function reseting(){//reset no tabuleiro
    document.getElementById("c1").src = "img/transp.png";
    document.getElementById("c2").src = "img/transp.png";
    document.getElementById("c3").src = "img/transp.png";
    document.getElementById("c4").src = "img/transp.png";
    document.getElementById("c5").src = "img/transp.png";
    document.getElementById("c6").src = "img/transp.png";
    document.getElementById("c7").src = "img/transp.png";
    document.getElementById("c8").src = "img/transp.png";
    document.getElementById("c9").src = "img/transp.png";
    player = "X";
    numJog = 0;
}