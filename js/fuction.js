$(document).ready(function() {
    $('#myModal').modal('show');
})

function abrirModal(){
    document.getElementById('modal_pai').style.backgroundColor="rgba(0,0,0,0.7)";
    document.getElementById('modal_pai').style.zIndex="3";
    document.getElementById('modal').style.marginTop="170px";
}

function fecharModal(){
    document.getElementById('modal_pai').style.backgroundColor="rgba(0,0,0,0.7)";
    document.getElementById('modal_pai').style.zIndex="1";
    document.getElementById('modal').style.marginTop="-500px";
    document.getElementById('corpo').style.zIndex="2";
    document.getElementById('corpo').style.position="absolute";
}