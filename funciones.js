function consumirAPI() {
    var fecha = [];
    var caldas = [];
    var antioquia = [];
    var bogota = [];
    var risaralda = [];


//CONSUMO DE LA API

fetch('https://www.datos.gov.co/resource/8835-5baf.json')
      .then(respuesta => respuesta.json())
      .then(function(datos_obtenidos) {
          datos_obtenidos.forEach(elemento => {
              if (elemento.fecha != undefined && elemento.caldas != undefined && elemento
                .antioquia != undefined && elemento.bogota != undefined && elemento.risaralda != undefined) {
                    caldas.push(elemento.caldas);
                    antioquia.push(elemento.antioquia);
                    bogota.push(elemento.bogota);
                    risaralda.push(elemento.risaralda);
                    fecha.push(elemento.fecha);
                }
          });

        //VARIABLES PARA LAS GRAFICAS
        var graf1 = {
            y: caldas,
            x: fecha,
            name: 'Caldas',
            type: 'bar'
        };
        var graf2 = {
            y: antioquia,
            x: fecha,
            name: 'Antioquia',
            type: 'bar'
        };
        var graf3 = {
            y: bogota,
            x: fecha,
            name: 'Bogota',
            type: 'bar'
        };
        var graf4 = {
            y: risaralda,
            x: fecha,
            name: 'Risaralda',
            type: 'bar'
        };
        
        var datosGraficas = [graf1, graf2, graf3, graf4];

        var layout = {
            barmode: 'stack',
            title: {
                text: 'Pruebas PCR realizadas en Colombia',
            },
        };

        Plotly.newPlot('grafico', datosGraficas, layout);;
      });
}
consumirAPI();

