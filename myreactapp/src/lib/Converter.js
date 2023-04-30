export function toCelcius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

export function toFahrenheit(celcius) {
    return (celcius * 9) / 5 + 32;
}

export function convert(temperature, convertTo) {
    const input = parseFloat(temperature);

    if (Number.isNaN(input)) {
        return '';
    }

    const output = convertTo(input);
    // 2.545647 > 2545.647 > 2546 > 2.546
    const rounded = Math.round(output * 1000) / 1000;

    return rounded.toString();
}