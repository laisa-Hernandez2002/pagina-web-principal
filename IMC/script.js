function CalculateIMC(){
    var weigth = document.getElementById('weigth').value;
    var heigth = document.getElementById('heigth').value;

    if(weigth !== '' && heigth !== '' ){
        var bmi = weigth  / ((heigth /100) ** 2);
        var result = document.getElementById('result');
        result.innerHTML = 'tu IMC es: ' + bmi.toFixed(2);

        if(bmi < 18.5){
            result.innerHTML  += ' -Bajo Peso '
        } else if(bmi < 25){
             result.innerHTML += ' -Peso normal'
        } else if(bmi < 30){
            result.innerHTML += ' -Sobrepeso'
       } else {
        result.innerHTML += ' -Obesidad'
   }
    }


}