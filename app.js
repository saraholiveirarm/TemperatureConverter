const temperatureInput = document.querySelector("#temperature-input");
const temperatureOutput = document.querySelector("#temperature-output");
const inputOptions = document.querySelector("#input-options");
const outputOptions = document.querySelector("#output-options");

const celsiusToFahrenheit = (input) => (+input.value * 9) / 5 + 32;

const celsiusToKelvin = (input) => +input.value + 273.15;

const fahrenheitToCelsius = (input) =>
  (((+input.value - 32) * 5) / 9).toFixed(2);

const fahrenheitToKelvin = (input) => ((+input.value - 32) * 5) / 9 + 273.15;

const kelvinToCelsius = (input) => (+input.value - 273.15).toFixed(2);

const kelvinToFahrenheit = (input) =>
  (((+input.value - 273.15) * 9) / 5 + 32).toFixed(2);

const inputVal = (val) => (inputOptions.value == val ? true : false);
const outputVal = (val) => (outputOptions.value == val ? true : false);

function convertInOut() {
  if (temperatureInput.value !== "") {
    switch (true) {
      case inputVal("celsius") && outputVal("fahrenheit"):
        temperatureOutput.value = celsiusToFahrenheit(temperatureInput);
        break;
      case inputVal("celsius") && outputVal("kelvin"):
        temperatureOutput.value = celsiusToKelvin(temperatureInput);
        break;
      case inputVal("fahrenheit") && outputVal("celsius"):
        temperatureOutput.value = fahrenheitToCelsius(temperatureInput);
        break;
      case inputVal("fahrenheit") && outputVal("kelvin"):
        temperatureOutput.value = fahrenheitToKelvin(temperatureInput);
        break;
      case inputVal("kelvin") && outputVal("celsius"):
        temperatureOutput.value = kelvinToCelsius(temperatureInput);
        break;
      case inputVal("kelvin") && outputVal("fahrenheit"):
        temperatureOutput.value = kelvinToFahrenheit(temperatureInput);
        break;
    }
  } else {
    temperatureOutput.value = "";
  }
}

function convertOutIn() {
  if (temperatureOutput.value !== "") {
    switch (true) {
      case outputVal("celsius") && inputVal("fahrenheit"):
        temperatureInput.value = celsiusToFahrenheit(temperatureOutput);
        break;
      case outputVal("celsius") && inputVal("kelvin"):
        temperatureInput.value = celsiusToKelvin(temperatureOutput);
        break;
      case outputVal("fahrenheit") && inputVal("celsius"):
        temperatureInput.value = fahrenheitToCelsius(temperatureOutput);
        break;
      case outputVal("fahrenheit") && inputVal("kelvin"):
        temperatureInput.value = fahrenheitToKelvin(temperatureOutput);
        break;
      case outputVal("kelvin") && inputVal("celsius"):
        temperatureInput.value = kelvinToCelsius(temperatureOutput);
        break;
      case outputVal("kelvin") && inputVal("fahrenheit"):
        temperatureInput.value = kelvinToFahrenheit(temperatureOutput);
        break;
    }
  } else {
    temperatureInput.value = "";
  }
}

temperatureInput.addEventListener("keyup", convertInOut);
temperatureOutput.addEventListener("keyup", convertOutIn);

// Checks if options are equal and changes the value
function checkIfOptionsAreEqual(op, newOp, field) {
  if (inputOptions.value == op && outputOptions.value == op) {
    field.value = newOp;
  }
}

// This changes the results as you click on different options
inputOptions.addEventListener("click", () => {
  convertInOut();
  checkIfOptionsAreEqual("celsius", "fahrenheit", outputOptions);
  checkIfOptionsAreEqual("fahrenheit", "kelvin", outputOptions);
  checkIfOptionsAreEqual("kelvin", "celsius", outputOptions);
});
inputOptions.addEventListener("click", convertOutIn);
outputOptions.addEventListener("click", () => {
  convertInOut();
  checkIfOptionsAreEqual("celsius", "fahrenheit", inputOptions);
  checkIfOptionsAreEqual("fahrenheit", "kelvin", inputOptions);
  checkIfOptionsAreEqual("kelvin", "celsius", inputOptions);
});
outputOptions.addEventListener("click", convertOutIn);
