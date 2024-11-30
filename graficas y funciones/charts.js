//Cragra libreria Google Charts
google.charts.load('current', {packages: ['corechart', 'line']});

google.charts.setOnLoadCallback(drawBackgroundColor);
function KTG(e_D,e_c){     
  let C0 = 2.9969 - 0.0090 *(e_c) + 0.01338 * Math.pow(e_c,2);
  let C1 = 0.0609 + 0.2590 *(e_c) - 0.2649 * Math.pow(e_c,2);
  let C2 = 0.1391 + 0.1804 *(e_c) + 0.1538 * Math.pow(e_c,2);
  let C3 = 0.5103 + 0.7518 *(e_c) - 0.4977 * Math.pow(e_c,2);
  return C0 + C1 / (e_D) + C2 / Math.pow(e_D,2) + C3 / Math.pow(e_D,3)
  
}
/* function xsquare(x) {
  return Math.pow(x,2);
} */

//Se ejecuta al cargar Google Charts
function graficarFunciones() {
  google.charts.setOnLoadCallback(dibujarGraficas);
}

function dibujarGraficas() {
    const data = new google.visualization.DataTable();
    data.addColumn('number', 'X');
    data.addColumn('number', 'f(x) = x^2');
    data.addColumn('number', 'f(x) = tan(x)');
    data.addColumn('number', 'f(x) = 10cos(x)');
    data.addColumn('number', 'f(x) = 5log(x)');
    data.addColumn('number', 'f(x) = 5sqrt(x)');

  //Rangos para x
  const rows = [];
  for (let x = 1; x<=10; x += 0.5) {
    rows.push([
      x,
      Math.pow(x, 2),    // x^2
      Math.tan(x),
      10 * Math.cos(x),
      5 * Math.log(x),
      5 * Math.sqrt(x),
    ]);
  }
  data.addRows(rows);

  //opciones de la grafica
  const options = {
    title: 'Funciones matemáticas',
    hAxis: { title: 'X'},
    vAxis: { title: 'f(x)'},
    curveType: 'function',
    legend: { position: 'bottom'}
  };

  //Dibujarla
  const chart = new google.visualization.LineChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}


function drawBackgroundColor() {
      var data = new google.visualization.DataTable();      
      data.addColumn('number', 'e/D');
      data.addColumn('number', 'e/c = 1.00');
      data.addColumn('number', 'e/c = 0.50');
      data.addColumn('number', 'e/c = 0.25');
      data.addColumn('number', 'e/c = 0.00');

      
      const xy = [];
      const xy1 = [];
      const rows = 41;
      const columns = 2;

      for (let i = 0; i < rows; i++) {
        xy[i] = [];
        xy1[i] = [];
      for (let j = 0; j < columns; j++) {
        xy[i][j] = 0;
        xy1[i][j] = 0;
      }
      }
      let inc = 1;
      for (let i = 0; i< rows; i++){
        xy[i][0] = inc;
        xy[i][1] = KTG((inc),1);
        xy[i][2] = KTG((inc),0.5);
        xy[i][3] = KTG((inc),0.25);
        xy[i][4] = KTG((inc),0);
        inc = inc+0.1;
        
       /*  xy[i][1] = Math.pow(i/40,2); */
      }
      
/*       let point = [];
      point = [[3.5 ,3.6]];
      console.log(point); */
      console.log(xy);
      data.addRows(xy);
      /* datapoint.addRows(point); */
      /* data.addRows(point); */
      var options = {
        title: 'PLATE WITH OFFSET CIRCULAR HOLE – UNIAXIAL TENSION LOADING (MODEL 1-1)',
        hAxis: {
          title: 'e/D'
        },
        vAxis: {
          title: 'KTG'
        },
        backgroundColor: '#ffff',
 /*        pointSize: 2.5,
        series: {
          0: {pointShape: ''},
          1: {pointShape: 'cicle'},
          2: {pointShape: 'cicle'},
          3: {pointShape: 'cicle'}
        } */
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
      chart.draw(data, options);
     
    }