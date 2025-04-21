function mostrarEjercicio(idSeleccionado) {

    document.querySelectorAll('[id^="contenido"]').forEach(contenedor => {
        contenedor.style.display = 'none';
    });
    
    const contenedorSeleccionado = document.getElementById(idSeleccionado);
    if (contenedorSeleccionado) {
        contenedorSeleccionado.style.display = 'block';
        const titulo = document.getElementById("titulo");
        const nombreEjercicio = contenedorSeleccionado.dataset.titulo;
        titulo.innerHTML = `<h2>Ejercicio ${idSeleccionado.slice(9)}</h2><hr>`;
    }
}

window.onload = function() {
    mostrarEjercicio('');
};

crearmenu();
function crearmenu(){   
    let txt= "";
    let titmen = [
        "Calc", "Mayor", "100", "Asce", "Nota", "AreaTri", "Par", "Rosa",
        "Empleado", "Consec", "200", "Fibon", "30Primo", ">Primo", "Menu", "Divisible", "Primosra"
        ,"Reloj","Tabla X","Anali","Sumaeste","Examen","Trian","Area", "Terreno",
        "Areafigu","Leche","Distancia","Pulgadas", "Conagua", "Mayorque", "Signo", 
        "Lapices", "Harapiento", "Pseudoci", "Langosta", "Vinicult", "Escuela",
        "Chimefon", "Viajes", "Dr Lorenzo", "Paquete", "Pueblodes", "SM", "Menudo", "Datado",
        "1N", "HyM", "For", "Pares1yN", "15Ventas", "Mientras", "EdadAlum", "Estatura",
        "Ahorro", "Fibo2", "Trabadia", "AguasC", "Tikitaka", "Tecnovivir", "Cajaregis", "10Cant", " Ncantidades",
        "Diagrama","Vector","X", "elemento", "promed", " 5x5", "matriz", "3x3", "Triqui"
      ];
      
      var icons = [
          
      ];

      for(var i=0; i<(titmen.length) ;i++){
        let tit = "<i class='"+icons[i]+"'></i> Ejercicio "+(i+1)+" - "+titmen[i];
        txt += "<a href=\"#\" onclick=\"moseje("+i+",'"+"','"+titmen[i]+"');\">"+tit+"</a>";
    }
    document.getElementById("men").innerHTML = txt;
}

    function moseje(n, ico="", tit="Calc"){
        let ti = "<h2><i class='"+ico+"'></i> Ejercicio "+(n+1)+" - "+tit+"</h2><hr>";
        document.getElementById("titulo").innerHTML = ti;
    }

