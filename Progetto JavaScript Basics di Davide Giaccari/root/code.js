let valore = 0;
function k() {
    document.getElementById("display").innerHTML=valore;
}
function aggiungi() {
    valore++;
    k();
}
function sottrai() {
    valore--;
    k();
}

function piu_cinquanta() {
    valore=valore+50;
    k();
}
function meno_cinquanta() {
  
    valore=valore-50;
    k();
}

function piu_cento() {
    valore=valore+100;
    k();
}
function meno_cento() {
    valore=valore-100;
    k();
}
function piu_mille() {
    valore=valore+1000;
    k();
}
function meno_mille() {
    valore=valore-1000;
    k();
}
function reset() {
    valore=0;
    k();
}
function convertToEsa() {
    valore=valore.toString(16);
    k();
    setTimeout(reset,3000);
}
function convertToBit() {
    valore=valore.toString(2)
    k();
    setTimeout(reset,3000);
}
