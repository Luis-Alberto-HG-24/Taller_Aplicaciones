
$(document).ready(function(){

    window.jsPDF = window.jspdf.jsPDF;
    let doc = new jsPDF();
    let nombre;
    let apellido;
    let archivo;

    function genera_pdf(){
        doc.setfont("times", "italic", 400);
        doc.text(nombre ,80,10);
        doc.text(apellido ,80,20);
        doc.save(archivo + ".pdf");
    }

    $('#btn_pdf').click(function (){
        nombre = $('#input_name').val();
        apellido = $('#input_apellido').val();
        archivo = $('#input_filename').val();
        genera_pdf();
    });
});