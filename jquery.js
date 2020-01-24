var trajes = ['img/41-Traje-tipico-de-El-Hierro-hombre-min.png', 'img/42-Traje-tipico-de-El-Hierro-mujer-min.png', 'img/47-Traje-tipico-de-La-Palma-hombre-min.png', 'img/48-Traje-tipico-de-La-Palma-mujer-min.png', 'img/46-Traje-tipico-de-La-Gomera-mujer-min.png', 'img/45-Traje-tipico-de-la-Gomera-hombre-min.png', 'img/53-Traje-tipico-Tenerife-hombre-min.png', 'img/54-Traje-tipico-Tenerife-mujer-min.png', 'img/51-Traje-Tipico-Gran-Canaria-hombre-min.png', 'img/52-Traje-tipico-Gran-Canaria-mujer-min.png', 'img/43-Traje-tipico-de-Fuerteventura-hombre-min.png', 'img/44-Traje-tipico-de-Fuerteventura-mujer-min.png',
    'img/49-Traje-tipico-de-Lanzarote-hombre-min.png', 'img/50-Traje-tipico-de-Lanzarote-mujer-min.png'
];

var islas = ['elhierro.jpg', 'lapalma.jpg', 'gomera.jpg', 'tenerife.jpg', 'grancanaria.jpg', 'fuerteventura.jpg', 'lanzarote.jpg'];
// evaluaTa(ts) , inidica si tenemos el 1er traje
var pri;
// trajes para los niveles
//var ts = [];
var tsS = [];
// numero islas a presentar
let ni = Math.floor(Math.random() * 3) + 4;
// islas sacadas
var isS = [""];
var is = [];
// isla seleccionada
var isclick;
// imagen que hacemos click
var imgC;
// Puntos del marcador
var ptos = 0;
// saco las islas
for (let i = 0; i < ni; i++) {
    function f() {
        let nis = Math.floor(Math.random() * 6)
        let nisS = '"' + nis + '"';
        if (!isS.includes(nisS)) {
            $('<img id="' + nis + '" src="img/' + islas[nis] + '"/>').appendTo('#islas');
            isS.push(nisS);
            is.push(nis);
        } else f();
    }
    f();

}
//  saco los trajes correspondientes a las islas sacadas
var trs = [];
is.forEach(i => {
    trs.push(trajes[i * 2]);
    trs.push(trajes[i * 2 + 1]);
});
// Desabilito los botones
$('#arr').children().click(function () {
    $('#arr nav').hide();
});
// metodo ocnclick para los trajes craedos
function traClick(t) {
    $('#trajes img[src="'+t+'"]').mousedown(function(){
       // alert('fda');
        isclick = t;
        imgC = $(this);
    });
   

}


function draga() {
    $("#trajes").children().draggable({
        containment: '.container',
        revert: true    
    });
}


// Creamos los trajes segun el nivel
function evaluaTa(n) {  
    
    for (let i = 0; i < trs.length; i++) {
        if(tsS.length<n){
            let tr = Math.floor(Math.random() * trs.length);
            if(!tsS.includes(trs[tr])){
                tsS.push(trs[tr]);
                $('<img  onclick="traClick(' + trs[tr] + ')" src="' + trs[tr] + '"/>').appendTo('#trajes');
                // Solo para que los elementos nuevos reconozcan las funciones
                draga(); 
                traClick(trs[tr]);        
            }
            if(i === trs.length-1) evaluaTa(n);           
        }   else break;  
    }
}


// trajes - niveles
$('#n1').click(function () {
    tsS = []; 
    evaluaTa(4);
});

$('#n2').click(function () {
    tsS = []; 
    evaluaTa(7);
});

$('#n3').click(function () {
    tsS = []; 
    evaluaTa(8);
});





$('#islas img').mouseout(function () {
    
    $(this).attr('id', function (y, id) {
        switch (id) {
            case "0":
                if (isclick.includes('Hierro')) {
                    $(imgC).css('background-color', 'greenyellow');
                    $('#ptos').text("" + ptos++);
                }
                else {
                    $(imgC).css('background-color', 'red');
                }
                break;
            case "1":
                if (isclick.includes('Palma')) {
                    $(imgC).css('background-color', 'greenyellow');
                    $('#ptos').text("" + ptos++);
                }
                else {
                    $(imgC).css('background-color', 'red');
                }
                break;
            case "2":
                if (isclick.includes('Gomera')) {
                    $(imgC).css('background-color', 'greenyellow');
                    $('#ptos').text("" + ptos++);
                }
                else {
                    $(imgC).css('background-color', 'red');
                }
                break;
            case "3":
                if (isclick.includes('Tenerife')) {
                    $(imgC).css('background-color', 'greenyellow');
                    $('#ptos').text("" + ptos++);
                }
                else {
                    $(imgC).css('background-color', 'red');
                }
                break;
            case "4":
                if (isclick.includes('Gran')) {
                    $(imgC).css('background-color', 'greenyellow');
                    $('#ptos').text("" + ptos++);
                }
                else {
                    $(imgC).css('background-color', 'red');
                }
                break;
            case "5":
                if (isclick.includes('Fuerteventura')) {
                    $(imgC).css('background-color', 'greenyellow');
                    $('#ptos').text("" + ptos++);
                }
                else {
                    $(imgC).css('background-color', 'red');
                }
                break;
            case "6":
                if (isclick.includes('Lanzarote')) {
                    $(imgC).css('background-color', 'greenyellow');
                    $('#ptos').text("" + ptos++);
                }
                else {
                    $(imgC).css('background-color', 'red');
                }
                break;
        }
    });
    /*   for (let i = 0; i < trs.length; i++) {
           // if (2 * islas[is[i]] === 2 * trs[i]) alert('ok')
           isclick

       }*/
});