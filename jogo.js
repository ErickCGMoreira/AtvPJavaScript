var player = "X";
var numJog = 0;
var PtX = [0,0,0,0,0,0,0,0];
var PtO = [0,0,0,0,0,0,0,0];
var PM = "";
var pc = false;
var dificul = false;
const placar = [0,0,0];

function checkjogo(id) {
    var opt = verificarSrc(id);

    if (opt == "p.png") {
        document.getElementById(id).src = "img/" + player + ".png";
        numJog++;

        if (wincheck()) {
            alert("Fim De Jogo " + player + " Venceu!");
            if(player = "X"){
                placar[0]++;
            } else {
                placar[1]++;
            }
            atualizarplacar();
            return false;
        }

        if (player == "X") {
            player = "O";   
        }
        else {
            player = "X";
        }

        if(player == "O" && pc){
            if(dificul){
                checkjogo(modoD());
            }else{
                checkjogo(modoF());
            }
            
        }
    }

    if (numJog >= 9) {
        plac[2]++;
        atualizarplacar();
        alert("Deu velha");
        return false;
    }
}

function modoF(failsafe){
    if(failsafe != null){
        return failsafe;
    }
    if(verificarSrc("c5") == "p.png"){
        return "c5";
    }
    var temp = "c" + Math.floor((Math.random()* 9) + 1);
    if(verificarSrc(temp) == "p.png"){
        return temp;
    }else{
        modoF()
    }
}

function modoD(){
    PtX = [0,0,0,0,0,0,0,0];
    PtO = [0,0,0,0,0,0,0,0];
    PM = "";
    
    progress();

    PtO.forEach(Pmov);
    if(PM != "" && PM != null){
        return PM;
    }
    PM =  "";
    PtX.forEach(Pmov);
    if(PM != "" && PM != null){
        return PM;
    }

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

function Pmov(value, index, array){
    if(value == 2){
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

function progress(){
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
            
function wincheck(){
    if ((verificarSrc("c1") == verificarSrc("c2")) && (verificarSrc("c1") == verificarSrc("c3")) && verificarSrc("c1") != "p.png") {
        return true;
    }
    if ((verificarSrc("c4") == verificarSrc("c5")) && (verificarSrc("c4") == verificarSrc("c6")) && verificarSrc("c4") != "p.png") {
        return true;
    }
    if ((verificarSrc("c7") == verificarSrc("c8")) && (verificarSrc("c7") == verificarSrc("c9")) && verificarSrc("c7") != "p.png") {
        return true;
    }
    if ((verificarSrc("c1") == verificarSrc("c4")) && (verificarSrc("c1") == verificarSrc("c7")) && verificarSrc("c1") != "p.png") {
        return true;
    }
    if ((verificarSrc("c2") == verificarSrc("c5")) && (verificarSrc("c2") == verificarSrc("c8")) && verificarSrc("c2") != "p.png") {
        return true;
    }
    if ((verificarSrc("c3") == verificarSrc("c6")) && (verificarSrc("c3") == verificarSrc("c9")) && verificarSrc("c3") != "p.png") {
        return true;
    }
    if ((verificarSrc("c1") == verificarSrc("c5")) && (verificarSrc("c1") == verificarSrc("c9")) && verificarSrc("c1") != "p.png") {
        return true;
    }
    if ((verificarSrc("c3") == verificarSrc("c5")) && (verificarSrc("c3") == verificarSrc("c7")) && verificarSrc("c3") != "p.png") {
        return true;
    }
    return false;
}

function verificarSrc(id) {
    var file = document.getElementById(id).src;
    return file.substring(file.length - 5, file.length);
}

function bot(){
    if(pc){
        pc = false;
        document.getElementById("UI").textContent = "Jogar contra computador: DESATIVADO";
        document.getElementById("butsim").textContent = "SIM";
    } else {
        pc = true;
        document.getElementById("UI").textContent = "Jogar contra computador: ATIVADO - FACIL";
        document.getElementById("butsim").textContent = "NÃO";
    }
}

function easy(){
    dificul = false;
    pc = true;
    document.getElementById("UI").textContent = "Jogar contra computador: ATIVADO - FACIL";
}

function hard(){
    dificul = true;
    pc = true;
    document.getElementById("UI").textContent = "Jogar contra computador: ATIVADO - DIFICIL";
}

function atualizarplacar(){
    document.getElementById("placarx").textContent = placar[0];
    document.getElementById("placaro").textContent = placar[1];
    document.getElementById("placarv").textContent = placar[2];
}

function reseting(){
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
}
