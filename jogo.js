var player = "X";
var numJog = 0;


function checkjogo(id) {
    var pc = document.getElementById('cpu').Checked;
    var opt = verificarSrc(id);

    if (opt == "transp.png") {
        document.getElementById(id).src = "img/" + player + ".png";

        if (player == "X") {
            player = "O";   
        }
        else {
            player = "X";
        }
    }

    if (winchek()) {
        alert("Fim De Jogo" = player + "Venceu!")
        return false;
    }

    num++;

    if (num >= 9) {
        alert("Deu velha");
        return false;
    }
}

function modoF(){
    if(verificarSrc("c5") == "transp.png"){
        return "c5";
    }
    return "c" + Math.flor((Math.random()* 9) + 1);
}

function modoD(){
    if(verificarSrc("c5") == "transp.png"){
        return "c5";
    }
    return "c" + Math.flor((Math.random()* 9) + 1);
}
            
function wincheck(){
    if ((verificarSrc("c1") == verificarSrc("c2")) && (verificarSrc("c1") == verificarSrc("c3")) && verificarSrc("c1") != "transp.png") {
        return true;
    }
    if ((verificarSrc("c4") == verificarSrc("c5")) && (verificarSrc("c4") == verificarSrc("c6")) && verificarSrc("c4") != "transp.png") {
        return true;
    }
    if ((verificarSrc("c7") == verificarSrc("c8")) && (verificarSrc("c7") == verificarSrc("c9")) && verificarSrc("c7") != "transp.png") {
        return true;
    }
    if ((verificarSrc("c1") == verificarSrc("c4")) && (verificarSrc("c1") == verificarSrc("c7")) && verificarSrc("c1") != "transp.png") {
        return true;
    }
    if ((verificarSrc("c2") == verificarSrc("c5")) && (verificarSrc("c2") == verificarSrc("c8")) && verificarSrc("c2") != "transp.png") {
        return true;
    }
    if ((verificarSrc("c3") == verificarSrc("c6")) && (verificarSrc("c3") == verificarSrc("c9")) && verificarSrc("c3") != "transp.png") {
        return true;
    }
    if ((verificarSrc("c1") == verificarSrc("c5")) && (verificarSrc("c1") == verificarSrc("c9")) && verificarSrc("c1") != "transp.png") {
        return true;
    }
    if ((verificarSrc("c3") == verificarSrc("c5")) && (verificarSrc("c3") == verificarSrc("c7")) && verificarSrc("c3") != "transp.png") {
        return true;
    }
}


    function verificarSrc(id) {
        var file = document.getElementById(id).src;
        return file.substring(file.length - 10, file.length);
    }


















// var input_tel = document.getElementById("telefone");
// input_tel.addEventListener('keyup', mask_tel);

// var input_cpf = document.getElementById("cpf");
// input_cpf.addEventListener('keyup', mask_cpf);

// function mask_tel(e) {

//     var caracter = e.target.value.replace(/\D/g, "");
//     caracter = caracter.replace(/^(\d\d)(\d)/g, "($1) $2"); /* (31) */
//     caracter = caracter.replace(/(\d{5})(\d)/, "$1-$2"); /* 00000-0000*/

//     e.target.value = caracter;
// }

// function mask_cpf(e) {


//     var caracter = e.target.value.replace(/\D/g, "");
//     caracter = caracter.replace(/^(\d\d)(\d)/g, "($1) $2");
//     caracter = caracter.replace(/(\d{5})(\d)/, "$1-$2");
// }