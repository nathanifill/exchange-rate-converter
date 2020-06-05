/* VARIABLES */

const currencyOneValue = document.getElementById('currency-one-value');
const currencyOneSymbol = document.getElementById('currency-one-symbol');
const currencyTwoValue = document.getElementById('currency-two-value');
const currencyTwoSymbol = document.getElementById('currency-two-symbol');

const rateValue = document.getElementById('rate-value');
const swapBtn = document.getElementById('swap-btn');

/* FUNCTIONS */

// Fetches rate and calculates if necessary (only USD base currency allowed on exchange rate APIs free tier hence the need for calculated rates)
function updateRate() {
  const symbolOne = currencyOneSymbol.value;
  const symbolTwo = currencyTwoSymbol.value;
  const currencyRateJson = fetch(
    'https://v6.exchangerate-api.com/v6/b89a1e8bfb018c52322952f8/latest/USD'
  )
    .then((response) => response.json())
    .then(function (data) {
      rate = (
        data['conversion_rates'][symbolTwo] /
        data['conversion_rates'][symbolOne]
      ).toFixed(4);

      // converts commas in larger figures to floating point numbers
      currencyTwoValue.value = (
        rate * parseFloat(currencyOneValue.value.replace(',', ''))
      ).toFixed(2);
      rateValue.innerText = `1 ${symbolOne} = ${rate} ${symbolTwo}`;
    });
}

// Swaps the currencies around
function swapCurrencies() {
  const temp = currencyOneSymbol.value;
  currencyOneSymbol.value = currencyTwoSymbol.value;
  currencyTwoSymbol.value = temp;
  updateRate();
}

/* EVENT LISTENERS */

// Updates rate on load
updateRate();

currencyOneValue.addEventListener('input', updateRate);
currencyOneSymbol.addEventListener('change', updateRate);
currencyTwoValue.addEventListener('input', updateRate);
currencyTwoSymbol.addEventListener('change', updateRate);
swapBtn.addEventListener('click', swapCurrencies);
