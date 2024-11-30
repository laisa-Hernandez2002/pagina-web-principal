function convert() {
    const value = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    let results = '';

    if (isNaN(value)) {
        results = 'Por favor, ingrese un valor numérico válido.';
    } else {
        switch (inputUnit) {
            case 'C':
                results += `Fahrenheit: ${(value * 9/5) + 32} °F<br>`;
                results += `Kelvin: ${value + 273.15} K<br>`;
                results += `Rankine: ${(value + 273.15) * 9/5} R<br>`;
                break;
            case 'F':
                results += `Celsius: ${(value - 32) * 5/9} °C<br>`;
                results += `Kelvin: ${(value - 32) * 5/9 + 273.15} K<br>`;
                results += `Rankine: ${value + 459.67} R<br>`;
                break;
            case 'K':
                results += `Celsius: ${value - 273.15} °C<br>`;
                results += `Fahrenheit: ${(value - 273.15) * 9/5 + 32} °F<br>`;
                results += `Rankine: ${value * 9/5} R<br>`;
                break;
            case 'R':
                results += `Celsius: ${(value - 491.67) * 5/9} °C<br>`;
                results += `Fahrenheit: ${value - 459.67} °F<br>`;
                results += `Kelvin: ${value * 5/9} K<br>`;
                break;
        }
    }

    document.getElementById('result').innerHTML = results;
}
