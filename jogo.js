var player = "X";
var numJog = 0;
var ultmov;
var  PtX = [0,0,0,0,0,0,0,0];
var  PtO = [0,0,0,0,0,0,0,0];
var  PM = ["","","","","","","",""];

function checkjogo(id) {
    var pc = document.getElementById('cpu') == 1;
    var dificul = document.getElementById("modo") == 1;
    var opt = verificarSrc(id);
    ultmov = id;

    if (opt == "p.png") {
        document.getElementById(id).src = "img/" + player + ".png";


        if (wincheck()) {
            alert("Fim De Jogo " + player + " Venceu!");
            return false;
        }

        if (player == "X") {
            player = "O";   
        }
        else {
            player = "X";
        }

        if(player == "O"){
            checkjogo(modoD());
        }
    }

    numJog++;

    if (numJog >= 9) {
        alert("Deu velha");
        return false;
    }
}

function modoF(){
    if(verificarSrc("c5") == "p.png"){
        return "c5";
    }
    return "c" + Math.floor((Math.random()* 9) + 1);
}

function modoD(){
    PtX = [0,0,0,0,0,0,0,0];
    PtO = [0,0,0,0,0,0,0,0];
    PM = [""];
    
    progress();

    PM.push(PtO.forEach(Pmov));
    if(PM[1] != "" && PM[1] != null){
        return PM[1];
    }
    PM = [""];
    PM.push(PtX.forEach(Pmov));
    if(PM[1] != "" && PM[1] != null){
        return PM[1];
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
    }else{
        return "c8";
    }
}

function Pmov(value, index, array){
    if(value == 2){
        switch(index){
            case 0: if(verificarSrc("c1") == "p.png"){return "c1"}else if (verificarSrc("c2") == "p.png"){return "c2"}else{return "c3"}
            case 1: if(verificarSrc("c4") == "p.png"){return "c4"}else if (verificarSrc("c5") == "p.png"){return "c5"}else{return "c6"}
            case 2: if(verificarSrc("c7") == "p.png"){return "c7"}else if (verificarSrc("c8") == "p.png"){return "c8"}else{return "c9"}
            case 3: if(verificarSrc("c1") == "p.png"){return "c1"}else if (verificarSrc("c4") == "p.png"){return "c4"}else{return "c7"}
            case 4: if(verificarSrc("c2") == "p.png"){return "c2"}else if (verificarSrc("c5") == "p.png"){return "c5"}else{return "c8"}
            case 5: if(verificarSrc("c3") == "p.png"){return "c3"}else if (verificarSrc("c6") == "p.png"){return "c6"}else{return "c9"}
            case 6: if(verificarSrc("c1") == "p.png"){return "c1"}else if (verificarSrc("c5") == "p.png"){return "c5"}else{return "c9"}
            case 7: if(verificarSrc("c3") == "p.png"){return "c3"}else if (verificarSrc("c5") == "p.png"){return "c5"}else{return "c7"}
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