pintartriqui();

var player=1;
var finjue=0;

const btnlim = document.querySelector('#btnlim');
btnlim.addEventListener("click", function(){limpiar();});
var tb1 = document.getElementById("tb1");
var tb2 = document.getElementById("tb2");
var tb3 = document.getElementById("tb3");
var tb4 = document.getElementById("tb4");
var tb5 = document.getElementById("tb5");
var tb6 = document.getElementById("tb6");
var tb7 = document.getElementById("tb7");
var tb8 = document.getElementById("tb8");
var tb9 = document.getElementById("tb9");


function pintartriqui(){
    var txt ="";
    for(let i=1;i<10;i++){
        txt += "<div id='tb"+i+"' onclick='acttb("+i+");' class='tb'>&nbsp;&nbsp;</div>"
    }
    txt += "<div id='res'>Empate</div>";
    txt += "<input type='button' id='btnlim' class='btn btn-primary btntri' value='Limpiar'>";
    document.getElementById("triqui").innerHTML = txt;
}

function acttb(t){
    let t1 = document.getElementById("tb"+t);
    if(t1.innerHTML=="&nbsp;&nbsp;" && finjue==0){
        if(player==1){
            pintar(t,"X","#0000ff");
            player=2;
        }else{
            pintar(t,"O","#ff0000");
            player=1;
        }
    }
    validar();
}

function validar(){
    let f1 = tb1.innerHTML+tb2.innerHTML+tb3.innerHTML;
    let f2 = tb4.innerHTML+tb5.innerHTML+tb6.innerHTML;
    let f3 = tb7.innerHTML+tb8.innerHTML+tb9.innerHTML;
    let c1 = tb1.innerHTML+tb4.innerHTML+tb7.innerHTML;
    let c2 = tb2.innerHTML+tb5.innerHTML+tb8.innerHTML;
    let c3 = tb3.innerHTML+tb6.innerHTML+tb9.innerHTML;
    let dp = tb1.innerHTML+tb5.innerHTML+tb9.innerHTML;
    let ds = tb3.innerHTML+tb5.innerHTML+tb7.innerHTML;
    let ft = f1+f2+f3;
    let n = ft.indexOf("&nbsp;");
    if(f1=="XXX" || f2=="XXX" || f3=="XXX" || c1=="XXX" || c2=="XXX" || c3=="XXX" || dp=="XXX" || ds=="XXX"){
        bloq();
        document.getElementById("res").innerHTML = "Ganó Jugador X";
        document.getElementById("res").style.display = "inherit";
        finjue=1;
        if(f1=="XXX") pingan(1,3,1);
        if(f2=="XXX") pingan(4,3,1);
        if(f3=="XXX") pingan(7,3,1);
        if(c1=="XXX") pingan(1,7,3);
        if(c2=="XXX") pingan(2,7,3);
        if(c3=="XXX") pingan(3,7,3);    
        if(dp=="XXX") pingan(1,9,4);
        if(ds=="XXX") pingan(3,5,2);
    }else if(f1=="OOO" || f2=="OOO" || f3=="OOO" || c1=="OOO" || c2=="OOO" || c3=="OOO" || dp=="OOO" || ds=="OOO"){
        bloq();
        document.getElementById("res").innerHTML = "Ganó Jugador O";
        document.getElementById("res").style.display = "inherit";
        finjue=1;
        if(f1=="OOO") pingan(1,3,1);
        if(f2=="OOO") pingan(4,3,1);
        if(f3=="OOO") pingan(7,3,1);
        if(c1=="OOO") pingan(1,7,3);
        if(c2=="OOO") pingan(2,7,3);
        if(c3=="OOO") pingan(3,7,3);
        if(dp=="OOO") pingan(1,9,4);
        if(ds=="OOO") pingan(3,5,2);
    }else if(n==-1){
        bloq();
        document.getElementById("res").innerHTML = "Empate";
        document.getElementById("res").style.display = "inherit";
        finjue=1;
    }

}

function pintar(t,sa,col){
    let t1 = document.getElementById("tb"+t);
    t1.innerHTML = sa;
    t1.style.borderColor = col;
    t1.style.color = col;
}

function limpiar(){
    for(let i=1;i<10;i++) pintar(i,"&nbsp;&nbsp;","#ffffff");
    document.getElementById("res").style.display = "none";
    document.getElementById("res").innerHTML = "";
    player=1;
    finjue=0;
}

function bloq(){
    for(let i=1;i<10;i++){
        let tb = document.getElementById("tb"+i);
        pintar(i, tb.innerHTML, "#bfbcbc");
    }
}

function pingan(im,li,ic){
    for(let i=im;i<(im+li);i=i+ic){
        let tb = document.getElementById("tb"+i);
        pintar(i, tb.innerHTML, "#a6ff00");
    }
}
