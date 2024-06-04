function convertTemp() {
    let temperature = parseFloat(document.getElementById('temperature').value);
    let scale = document.getElementById('scale').value;

    let celsius, fahrenheit, kelvin;

    if (isNaN(temperature)) {
        alert("Please enter a valid temperature");
        return;
    }

    switch (scale) {
        case 'celsius':
            celsius = temperature;
            fahrenheit = (temperature * 9/5) + 32;
            kelvin = temperature + 273.15;
            break;
        case 'fahrenheit':
            celsius = (temperature - 32) * 5/9;
            fahrenheit = temperature;
            kelvin = celsius + 273.15;
            break;
        case 'kelvin':
            celsius = temperature - 273.15;
            fahrenheit = (celsius * 9/5) + 32;
            kelvin = temperature;
            break;
    }

    document.getElementById('celsiusResult').innerText = `Celsius: ${celsius.toFixed(2)} °C`;
    document.getElementById('fahrenheitResult').innerText = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
    document.getElementById('kelvinResult').innerText = `Kelvin: ${kelvin.toFixed(2)} K`;
}
