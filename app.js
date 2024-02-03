const temperatureInput = document.querySelector("#temperature-input");
const temperatureOutput = document.querySelector("#temperature-output");
const inputOptions = document.querySelector("#input-options");
const outputOptions = document.querySelector("#output-options");

const celsiusToFahrenheit = (input) => (input.value * 9) / 5 + 32;

const celsiusToKelvin = (input) => parseFloat(input.value) + 273.15;

const fahrenheitToCelsius = (input) =>
  (((input.value - 32) * 5) / 9).toFixed(2);

const fahrenheitToKelvin = (input) => ((input.value - 32) * 5) / 9 + 273.15;

const kelvinToCelsius = (input) =>
  (parseFloat(input.value) - 273.15).toFixed(2);

const kelvintoFahrenheit = (input) =>
  (((input.value - 273.15) * 9) / 5 + 32).toFixed(2);

function convertInOut() {
  if (inputOptions.value == outputOptions.value) {
    temperatureOutput.value = temperatureInput.value;
  } else if (
    inputOptions.value == "celsius" &&
    outputOptions.value == "fahrenheit"
  ) {
    temperatureOutput.value = celsiusToFahrenheit(temperatureInput);
  } else if (
    inputOptions.value == "celsius" &&
    outputOptions.value == "kelvin"
  ) {
    temperatureOutput.value = celsiusToKelvin(temperatureInput);
  } else if (
    inputOptions.value == "fahrenheit" &&
    outputOptions.value == "celsius"
  ) {
    temperatureOutput.value = fahrenheitToCelsius(temperatureInput);
  } else if (
    inputOptions.value == "fahrenheit" &&
    outputOptions.value == "kelvin"
  ) {
    temperatureOutput.value = fahrenheitToKelvin(temperatureInput);
  } else if (
    inputOptions.value == "kelvin" &&
    outputOptions.value == "celsius"
  ) {
    temperatureOutput.value = kelvinToCelsius(temperatureInput);
  } else if (
    inputOptions.value == "kelvin" &&
    outputOptions.value == "fahrenheit"
  ) {
    temperatureOutput.value = kelvintoFahrenheit(temperatureInput);
  }
}

function convertOutIn() {
  if (outputOptions.value == inputOptions.value) {
    temperatureInput.value = temperatureOutput.value;
  } else if (
    outputOptions.value == "celsius" &&
    inputOptions.value == "fahrenheit"
  ) {
    temperatureInput.value = celsiusToFahrenheit(temperatureOutput);
  } else if (
    outputOptions.value == "celsius" &&
    inputOptions.value == "kelvin"
  ) {
    temperatureInput.value = celsiusToKelvin(temperatureOutput);
  } else if (
    outputOptions.value == "fahrenheit" &&
    inputOptions.value == "celsius"
  ) {
    temperatureInput.value = fahrenheitToCelsius(temperatureOutput);
  } else if (
    outputOptions.value == "fahrenheit" &&
    inputOptions.value == "kelvin"
  ) {
    temperatureInput.value = fahrenheitToKelvin(temperatureOutput);
  } else if (
    outputOptions.value == "kelvin" &&
    inputOptions.value == "celsius"
  ) {
    temperatureInput.value = kelvinToCelsius(temperatureOutput);
  } else if (
    outputOptions.value == "kelvin" &&
    inputOptions.value == "fahrenheit"
  ) {
    temperatureInput.value = kelvintoFahrenheit(temperatureOutput);
  }
}

temperatureInput.addEventListener("keyup", convertInOut);
temperatureOutput.addEventListener("keyup", convertOutIn);

// This changes the results as you click on different options
inputOptions.addEventListener("click", convertInOut);
inputOptions.addEventListener("click", convertOutIn);
outputOptions.addEventListener("click", convertInOut);
outputOptions.addEventListener("click", convertOutIn);
